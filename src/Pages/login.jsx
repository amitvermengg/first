import { useState } from "react"
import { useContext } from "react"
import { authContext } from "../context/AuthContextProvider"
import { useNavigate } from "react-router-dom"
function Login() {
    let [show, setShow] = useState(false)
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")

    let {setIsLogin} =  useContext(authContext)
let navigate =  useNavigate()
    async function handelFrom(e) {
        e.preventDefault()
        try {


            let res = await fetch("http://localhost:4000/api/Login", {
                method: "post",
                body: JSON.stringify({ email, password, }),
                headers: {
                    "content-Type": "application/json"
                }
            })
           let data =   await res.json()
           if(res.ok){
            alert(data.msg) 
            localStorage.setItem("userID" , data.find._id)
            setIsLogin(true)
            navigate("/")
           }else{
            alert(data.msg)
           }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        
            <div className="container  mt-5">
                <div className="row ">
                    <div className="col-md-6 sign p-4">
                        <form onSubmit={handelFrom}>
                            <h1>
                                Login
                            </h1>

                            <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Enter your email" className="form-control" required />
                            <br />
                            <div className="passDiv">
                                <input type={show == true ? "text" : "password"} value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Create password " className="form-control" required />
                                <span className="eye" onClick={() => {
                                    setShow(!show)
                                }}><i class="fa-solid fa-eye"></i></span>
                            </div>
                            <br />

                            <button className="btn bg-primary text-white BROWSE text center " >Login  Now</button>
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
export default Login
