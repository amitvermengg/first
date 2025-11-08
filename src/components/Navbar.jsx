import { Link } from "react-router-dom"
import { useContext } from "react";
import { authContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
function Navbar() {
    let navigate = useNavigate()
    let { isLogin, setIsLogin } = useContext(authContext)
    if (!isLogin) {
        // navigate("/login")
    }
    return (
        <div className="text">
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <li><a href=" "> <i class="fa-solid fa-phone"></i> 9812668023</a></li>
                    </div>
                    <div class="col-md-3">
                        <li><a href=""><i class="fa-solid fa-envelope-open"></i> amitverma6224@gmail.com</a></li>
                    </div>
                    <div class="col-md-3">
                        <li><a href=""> <i class="fa-solid fa-clock"></i>MONDAY-FRIDAY</a></li>
                    </div>
                    {/* 
                    <div class="col-md-3">
                        <li><a href="" ><i class="fa-solid fa-cart-shopping"></i> cart</a></li>
                    </div> */}
                    <div class="col-md-3">
                        <li><Link to={"adminlogin"} > Admin Login</Link></li>
                    </div>
                </div>
            </div >

            <div class=" container mt-5">
                <div class="row">
                    <div class="col-md-3">
                        <img src="logo.png" alt="" width="100%" />
                    </div>
                    <div class="col-md-9 nav-link1 d-flex gap-5 justify-content-end">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About us</Link></li>
                        <li><Link to="blog">Blog </Link></li>
                        <li><Link to="contact">Contact Us</Link></li>
                       
                        {
                            isLogin ? (
                                <>
                                    <li onClick={() => {
                                        localStorage.removeItem("userID")
                                        setIsLogin(false)
                                    }}>
                                        logout
                                        </li>
                                         <li><Link to="viewCart"> viewCart </Link></li>
                                          <li><Link to="myorder"> my Orders </Link></li>
                                </>
                            ) : (
                                <>
                                 <li><Link to="login"> login </Link></li>
                                    <li><Link to="sign"> Sign up  </Link></li>
                                  
                                </>
                            )
                        }


                    </div>
                </div>
            </div>
        </div>
    )

}
export default Navbar