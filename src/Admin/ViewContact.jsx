import { useEffect, useState } from "react";
function Viewcontact() {
    const [allContact, setAllContact] = useState([])
    async function getAllContact() {
        try {
            const res = await fetch("http://localhost:4000/getAllContact")
            const data = await res.json()
            setAllContact(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllContact()
    }, [])
    

    async function deleteContact(id) {
        try {
            let res = await fetch(`http://localhost:4000/api/deleteContact/${id}`, {
                method: "delete"
            })
            let data = await res.json()
            if (res.ok) {
                getAllContact()
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
            <div className="mt-5 col-md-8 top">
              
                <h1> All Contacts</h1>
                <table className="table table-hover mt-5">
                    <thead>

                        <tr>
                            <th> Sr </th>
                            <th>Name </th>
                            <th>Email </th>
                            <th>Subject </th>
                            <th>Messages</th>
                            <th>Mobile Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {

                            allContact.map((item, idx) => {
                                return (

                                    <>

                                        <tr>
                                            <td>{idx + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.Subject}</td>
                                            <td>{item.Message}</td>
                                            <td>{item.Mobile}</td>
                                            <td><button className="btn btn-danger" onClick={() => {
                                                deleteContact(item._id)
                                            }}>Delete</button></td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>

        </>

    )
}
export default Viewcontact


