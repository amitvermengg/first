import { useContext, useState } from "react"
import { cartContext } from "../context/AddToCartContextProvider"
import axios from "axios"
function Viewcart() {
    const { cartItem, addProductQut, totalPrice, removeProductQut, removeProduct } = useContext(cartContext)
    let [name, setName] = useState("")
    let [lastname, setLastName] = useState("")
    let [addres, setAddres] = useState("")
    let [city, setCity] = useState("")
    let [pincode, setPincode] = useState("")
     let [number, setNumber] = useState("")

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };
    const handleSubmit = async () => {
        const isScriptLoaded = await loadRazorpayScript();

        if (!isScriptLoaded) {
            alert("Razorpay SDK failed to load. Please check your internet connection.");
            return;
        }
        let userId = localStorage.getItem("userID")

        if (userId) {
            try {
                const res = await axios.post(
                    "http://localhost:4000/api/orders/checkout",
                    {
                        userId,
                        cartItem,
                        totalPrice,
                        address : {name , lastname , pincode , city , addres , number}
                    }
                )
                if (res.data.success) {
                    const option = {
                        key: "rzp_test_99IwqPHWTFKkXS",
                        amount: totalPrice * 100,
                        currency: "INR",
                        name: "Dairy",
                        description: "Order Payment",
                        handler: async function (response) {
                            try {
                               
                                const paymentRes = await fetch(
                                    `http://localhost:4000/api/order/${res.data.order._id}`,
                                    {
                                        method: "put",
                                        headers: { "content-type": "application/json" },
                                        body: JSON.stringify({
                                            paymentId: response.razorpay_payment_id,
                                            paymentStatus: "paid",
                                        }),
                                    }
                                );
                                if (paymentRes.ok) {
                                    alert("Payment Successful!");
                                } else {
                                    console.error(error);
                                }
                            }
                            catch (error) {
                                alert("something went wrong while updating payment,");
                                console.log(error);
                            }
                        },
                        prefill: {
                            name: "admin",
                            email: "user@example.com",
                            contact: "9999242426"
                        },
                        theme: {
                            color: "#3399cc",
                        }
                    }
                    const rzp = new window.Razorpay(option);
                    rzp.open();
                }
                else {
                    alert("Failed to create order . try again .");
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            alert("plz login your Account!");
        }
    }

    if (cartItem.length == 0) {
        return (
            <>

                <h1 className="text-center"> Product Not Found !</h1>
            </>
        )
    }
    return (
        <>

            <div className="container ab mt-5">
                {
                    cartItem.map((item) => {
                        return (
                            <div className="row mt-5">
                                <div className="col-md-3">
                                    <img src={item.productId.imgPath} alt="" height={"100%"} width={"100%"} />
                                </div>
                                <div className="col-md-3">
                                    <h2>Product Name :  {item.productId.name}</h2>
                                    <h5>Price : ₹ {item.productId.price}</h5>

                                </div>
                                <div className="col-md-3">
                                    <input type="text" value={item.qut} />
                                    <button onClick={() => { addProductQut(item.productId._id) }} className="bt">+</button>
                                    <button onClick={() => { removeProductQut(item.productId._id) }} className="bt">-</button>

                                    <p>  total : {Number(item.productId.price) * Number(item.qut)}</p>
                                </div>

                                <div className="col-md-3">
                                    <button className="btn btn-danger" onClick={() => { removeProduct(item._id) }}> Delete</button>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
            <p> total : {totalPrice}</p>
            <div>
                <div className="container aa">
                    <h1 className="text-center">Address</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-5 ">
                            <div className="row">
                                <div className="col-md-5">
                                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="First name" className="form-control" />
                                </div>
                                <div className="col-md-7">
                                    <input type="text " value={lastname} onChange={(e) => { setLastName(e.target.value) }} placeholder="last name" className="form-control" />
                                </div>
                            </div>
                            <br />
                            <input type="text " value={addres} onChange={(e) => { setAddres(e.target.value) }} placeholder=" addres" className="form-control" />
                            <br />
                            <br />
                            <input type="text " value={number} onChange={(e) => { setNumber(e.target.value) }} placeholder=" Enter Number " className="form-control" />
                            <br />
                            <div className="row">
                                <div className="col-md-5">
                                    <input type="text " value={city} onChange={(e) => { setCity(e.target.value) }} placeholder=" city " className="form-control" />
                                </div>
                                <div className="col-md-7">
                                    <input type="text " value={pincode} onChange={(e) => { setPincode(e.target.value) }} placeholder="pin code " className="form-control" />
                                    <br />
                                    <button className="btn bg-primary text-white BROWSE text center " onClick={handleSubmit} >submit</button>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}
export default Viewcart