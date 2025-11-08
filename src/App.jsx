import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Blog from "./components/blog"
import Signup from "./components/Sign up"
import AdminLogin from "./Pages/AdminLogin"
import Viewcontact from "./Admin/ViewContact"
import AddProduct from "./Admin/AddProduct"
import Viewproduct from "./Admin/ViewProduct"
import Sign from "./Pages/Sign"
import Login from "./Pages/login"
import AdminLayout from "./Admin/AdminLayout"
import AuthContextProvider from "./context/AuthContextProvider"
import AddToCartContextProvider from "./context/AddToCartContextProvider"
import Viewcart from "./Pages/Viewcart"
import MyOrders from "./Pages/Myorders"
function App() {
    return (
        <>
            <BrowserRouter>
            <AddToCartContextProvider>
                <AuthContextProvider>
                    <Routes>
                        <Route path="/" element={<Layout></Layout>}>
                            <Route index element={<Home></Home>}></Route>
                            <Route path="about" element={<About />}></Route>
                            <Route path="contact" element={<Contact></Contact>}></Route>
                            <Route path="blog" element={<Blog></Blog>}></Route>
                            <Route path="adminlogin" element={<AdminLogin></AdminLogin>}></Route>
                            <Route path="Signup" element={<Signup />}></Route>
                            <Route path="Sign" element={<Sign />}></Route>
                            <Route path="login" element={<Login />}></Route>
                            <Route path="viewCart" element={<Viewcart></Viewcart>}></Route>
                            <Route path="myorder" element={<MyOrders/>}></Route>

                        </Route>
                        <Route path="admin" element={<AdminLayout></AdminLayout>}>
                            <Route index element={<></>}></Route>
                            <Route path="viewcontact" element={<Viewcontact />}></Route>
                            <Route path="Addproduct" element={<AddProduct />}></Route>
                            <Route path="view" element={<Viewproduct></Viewproduct>}></Route>
                            
                        </Route>
                    </Routes>
                </AuthContextProvider>
                </AddToCartContextProvider>
            </BrowserRouter>
        </>
    )
}

export default App



