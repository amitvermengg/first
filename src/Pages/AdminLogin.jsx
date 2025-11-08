import { useState } from "react"
import { useNavigate } from "react-router-dom"
function AdminLogin(){
    let [username , setUserName] =  useState("")
    let [password , setPassword] =  useState("")
    let navigate =  useNavigate()

   function handelAdminLogin(){
    
    if(username == "admin" && password == "12345"){
        alert("Admin Login")
        navigate("/admin")
    }else{
        alert("password or usernmae is wrong ! ")
    }
   }
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height : "80vh"}}>
        <div className="border p-5 shadow bg-body rounded">
            <input type="text" value={username} onChange={(e)=>{setUserName(e.target.value)}} className="form-control" placeholder="Enter username" />
            <br />
        
            <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Enter password" />
            <br />
            
            <button className="btn btn-primary" onClick={handelAdminLogin} > Submit</button>
        </div>
        </div>
    )
}
export default AdminLogin