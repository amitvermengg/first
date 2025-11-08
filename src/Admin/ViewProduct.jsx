import { useState, useEffect } from "react";
function Viewproduct() {
    const [allproduct, setallprduct] = useState([])
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
    // console.log(allproduct);


    async function deleteproduct(id) {
        console.log("click");
        try {

            let res = await fetch(`http://localhost:4000/api/deleteProduct/${id}`, {
                method: "delete"
            })
            let data = await res.json()
            if (res.ok) {
                getAllproduct()
                alert(data.msg)
            }
            console.log(data);
        } catch (error) {
            console.log(error);

        }
    }


    return (
        <>
         <div className="col-md-1"></div>
            <div className="col-md-8 mt-5 top">
                <h1 className=" text-center p-4">All Product</h1>
                <table className="table table-hover mt-5">
                    <thead>
                        <tr>
                            <th>Sr no</th>
                            <th>name</th>
                            <th>price</th>
                            <th>ratting</th>
                            <th>message</th>
                            <th>imgpath</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {
                        allproduct.map((item, idx) => {
                            return (
                                <>
                                    <tr>

                                        <td> {idx + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.ratting}</td>
                                        <td>{item.Message}</td>
                                        <td> <img src={item.imgPath} alt="" width={100} /></td>
                                        <td><button className="btn btn-danger" onClick={() => {
                                            
                                            deleteproduct(item._id)
                                        }}>Delete</button></td>
                                    </tr>
                                </>
                            )
                        }



                        )
                    }
                </table>
            </div>
        </>
    )



}
export default Viewproduct;

