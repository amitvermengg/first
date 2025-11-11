function WhyCards(props) {
    return (
        <div className=" d-flex gap-3 align-items-start ">
            <span className=" p-2 rounded-circle bg-warning">{props.no}</span>
            <div>
                <h4>{props.title}</h4>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}
import { useState, useEffect } from "react"
import { cartContext } from "../context/AddToCartContextProvider"
import { useContext } from "react"
function ChooseUs() {
    const [allproduct, setallprduct] = useState([])
    let { addToCart } = useContext(cartContext)
    async function getAllproduct() {
        try {
            const res = await fetch("http://localhost:4000/getAllProduct")
            const data = await res.json()
            setallprduct(data);

        } catch (error) {

            console.log(error);

        }
    }
    useEffect(() => {
        getAllproduct()
    }, [])


    return (
        <>
            <div className="bg-danger p-4">
                <div className="container">
                    <h2 className="text-center">Why to choose us</h2>

                    <div className="row">
                        <div className="col-md-4">
                            <WhyCards no={1} title={"Organic and non-GMO"} desc={"A high-performant Virtuemart template suitable for any kind of Joomla project. We recommend building small websites with Buttermilk."} ></WhyCards>
                            <WhyCards no={2} title={"Award wining quality"} desc={"Buttermilk is the perfect Joomla template for your shop or company website."}></WhyCards>
                            <WhyCards no={3} title={"Best dairy products"} desc={"Small niche template for building small business websites with just exact amount of inner pages to ease your customers.."}></WhyCards>

                        </div>
                        <div className="col-md-4">
                            <img src="./bottles (1) - Copy.png" alt="" />
                        </div>
                        <div className="col-md-4">
                            <WhyCards no={4} title={"Healthy and nutritious"} desc={"It got revolutionary page builder, so you can create everything without coding. Create responsive pages and banners super fast."} ></WhyCards>
                            <WhyCards no={5} title={"500 acres of pasture"} desc={"Buttermilk is the perfect Joomla template for your shop or company website."}></WhyCards>
                            <WhyCards no={6} title={"Delivery to your door"} desc={"Add unlimited module positions or colors! Change the layout with ease by using the Layout builder and add your elements with the Page builder.."}></WhyCards>
                        </div>
                    </div>
                </div>
            </div >
            <div className="">
                <div className="container mt-5">
                    <div className="row">
                        {
                            allproduct.map((item) => {
                                return (
                                    <div className="col-md-4 card pt-3">
                                        <img src={item.imgPath} alt="" height={"100%"} width={"100%"} />
                                        <h3 className="text-center   bg-danger text-white BROWSE  ">{item.name} </h3>
                                        <button className="btn bg-primary text-white BROWSE" onClick={() => { addToCart(item._id) }}>ADD TO CART</button>
                                    </div>
                                )
                            })
                        }
                       
                    </div>
                </div>
            </div>






        </>
    )
}
export default ChooseUs