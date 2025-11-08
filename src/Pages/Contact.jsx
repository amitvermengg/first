import { useState } from "react";


function Contact() {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [Subject, setSubject] = useState("")
    let [Message, setmessage] = useState("")
    let [Mobile, setMobile] = useState("")


    function handelFrom() {
        if (name == "") {
            return alert("Enter Name ")
        }
     
        fetch("http://localhost:4000/addContact" , {
            method : "post",
            body : JSON.stringify({name , email , Subject , Message , Mobile}),
            headers :{
                "content-Type" : "application/json"
            }  
        })
        .then((res)=>{ return res.json()})
        .then(data => alert(data.msg))
        .catch(( error)=> console.log(error))
    }
    return (
        <>
            <div className=" text mt-5 p-5">
                <h1>CONTACT US </h1>
                <p> You are here: / Home / Contact</p>
                {/* <button onClick={()=>{
                            setA(a + 1)
                 }}>Add</button> */}
            </div>
            <div className="container">
                <div className="row p-5 mt-5">
                    <div className="col-md-4 ">
                        <img src="set-dairy-products-vector-illustration-hand-drawing-doodles_127770-585.avif" alt="" width={"100%"} />
                    </div>
                    <div className="col-md-8">
                        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" />
                        <br />
                        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email " className="form-control" />
                        <br />
                        <input type="text" value={Subject} onChange={(e) => { setSubject(e.target.value) }} placeholder="Subject " className="form-control" />
                       <br />
                        <input type="number" value={Mobile} onChange={(e) => { setMobile(e.target.value) }} placeholder="Mobile"  className="form-control" />
                        <br />
                        <textarea name="massage" value={Message} onChange={(e) => { setmessage(e.target.value) }} placeholder="message " className="form-control"></textarea>
                        <br />
                        <button className="btn btn-primary" onClick={handelFrom}> Submit</button>
                    </div>
                </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111081.21367299651!2d74.94800409612732!3d29.53710819557341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114db0893d723d%3A0xc51125be998c4f95!2sSirsa%2C%20Haryana!5e0!3m2!1sen!2sin!4v1756380435458!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>

           




        </>
    )
}
export default Contact; 