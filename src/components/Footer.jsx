import { Link } from "react-router-dom"
function Footer() {
    return (
        <>
            <div className="bg-primary p-5 mt-5">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-3">
                            <i class="fa-solid fa-phone"></i> 0700 123 456
                        </div>
                        <div className="col-md-3">
                            <i class="fa-regular fa-truck"></i>   amitverma6224@gmail.com
                        </div>
                        <div className="col-md-3">
                            <i class="fa-solid fa-clock"></i>  6:00am to 12:00pm
                        </div>
                        <div className="col-md-3">
                            <Link to="viewCart">
                                {/* <i class="fa-solid fa-cart-shopping"></i> */}
                                <button className="btn  text-black BROWSE "> viewCart </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-danger">
                <div className="container  ">
                    <div className="row  pt-5">
                        <div className="col-md-3 tp ">
                            <button className="btn bg-primary text-white BROWSE  ">CERTIFICATE </button>
                            <div className="mt-5">
                                <img src="certified-organic-product-food-label-8821108.webp" alt="" width={"100%"} height={"100%"} />
                            </div>
                        </div>
                        <div className="col-md-3  tp">
                            <button className="btn bg-primary text-white  BROWSE">SITE INFORMATION</button>
                            <ul className="d-flex flex-column gap-2 mt-5">
                                <li className="border-bottom pb-3"> <i class="fa-solid fa-check"></i> Home</li>
                                <li className="border-bottom pb-3"> <i class="fa-solid fa-check"></i>Terms & Conditions</li>
                                <li className="border-bottom pb-3"> <i class="fa-solid fa-check"></i>Return Policy</li>
                                <li className="border-bottom pb-3"> <i class="fa-solid fa-check"></i>Complaintes  Policy</li>
                                <li className="border-bottom pb-3"> <i class="fa-solid fa-check"></i> Delivery Terms</li>

                            </ul>
                        </div>

                        <div className="col-md-3 tp">

                            <button className="btn bg-primary text-white BROWSE ">PAYMENT MATHODES</button>
                            <div className="mt-5"><img src="public/pmt.avif" alt="" width={"100% "} /></div>
                        </div>
                        <div className="col-md-3 tp text-center-justify  ">
                            <div className=" ">
                                <button className="btn bg-primary text-white BROWSE  ">FOLLOW US </button>
                                <ul className="d-flex flex-column gap-2 mt-5">
 
                                    <a href="https://facebook.com" target="_blank">
                                        <li> <button className="btn bg-primary text-white BROWSE ">  <i class="  fa-brands fa-facebook" ></i> facebook </button></li>
                                    </a>

                                    <a href="https://instagram.com" target="_blank">
                                    <li> <button className="btn bg-primary text-white BROWSE "> <i class="fa-brands fa-instagram"></i> instagram</button></li>
                                      </a>  

                                <a href="https://twitter.com" target="_blank">
                                    <li> <button className="btn bg-primary text-white BROWSE "> <i class="fa-brands fa-square-twitter"></i> twitter </button></li>
                                </a>
                                 <a href="https://youtube.com" target="_blank">
                                <li> <button className="btn bg-primary text-white BROWSE "> <i class="fa-brands fa-youtube"></i> you tube  </button></li>
                           </a>
                             <a href="https://google.com" target="_blank">
                                <li> <button className="btn bg-primary text-white BROWSE "><i class="fa-brands fa-google"></i> google </button></li>
                               </a>
                                <a href="https://whatsapp.com" target="_blank">
                                <li> <button className="btn bg-primary text-white BROWSE "> <i class="fa-brands fa-whatsapp"></i> whatsapp </button></li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}

export default Footer