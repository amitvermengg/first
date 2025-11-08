import { useState } from "react"

function sign() {

    let [show, setShow] = useState(false)

    let [Name, setname] = useState("")
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let [confirmpassword, setconfirmpassword] = useState("")


    function handelFrom(e) {
        e.preventDefault()
        if (password !== confirmpassword) {
            return alert("Passwod not Match !")
        }

        fetch("http://localhost:4000/api/sign", {
            method: "post",
            body: JSON.stringify({ Name, email, password, }),
            headers: {
                "content-Type": "application/json"
            }
        })
            .then((res) => { return res.json() })
            .then(data => alert(data.msg))
            .catch((error) => console.log(error))

            setconfirmpassword("")
            setemail("")
            setname("")
            setpassword("")
    }
    return (
        <>
            <div className="container  mt-5">
                <div className="row ">
                    <div className="col-md-6 sign p-4">
                        <form onSubmit={handelFrom}>
                            <h1>
                                Registor
                            </h1>
                            <br />
                            <input type="text" value={Name} onChange={(e) => { setname(e.target.value) }} placeholder="Enter your name" className="form-control" required />
                            <br />
                            <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Enter your email" className="form-control" required />
                            <br />
                            <div className="passDiv">
                                <input type={show == true ? "text" : "password"} value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Create password " className="form-control" required />
                                <span className="eye" onClick={() => {
                                    setShow(!show)
                                }}><i class="fa-solid fa-eye"></i></span>
                            </div>
                            <br />
                            <input type="password" value={confirmpassword} onChange={(e) => { setconfirmpassword(e.target.value) }} placeholder="Confirm password" className="form-control" required />
                            <br />
                            <button className="btn bg-primary text-white BROWSE text center " >Registor Now</button>
                            <br />
                        </form>
                    </div>
                    <div className="col-md-6 p-4">
                        <img src="thnq.jpg2.webp" alt="" width={"100%"} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default sign
