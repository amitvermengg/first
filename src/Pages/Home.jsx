import OurStores from "../components/OurStores"
import ChooseUs from "../components/ChooseUs"
import blog from "../components/blog"
function Home() {

    let data = [
        {
            id: 1,
            step: "step 1",
            description: "Buttermilk farm produces .We produce healthy 100% organic dairy products for your table.",
            img: "milk can.png"
        },

        {
            id: 2,
            step: "step 2",
            description: "Choose your products.Select your products from our shop and place your order.",
            img: "paneer.png"
        },
        {
            id: 3,
            step: "step 3",
            description: "We will deliver for free.Depending on the delivery method you choose we can deliver for free.",
            img: "milk bottel.png"
        },

    ]
    return (

        <>

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="position-relative d-flex justify-content-center" >
                            <div className="position-absolute good">
                                <h1> GOOD FOOD</h1>
                                <h1>GOOD LIFE</h1>
                            </div>
                            <img src="images/slide_3.jpg" class="d-block w-100" alt="   m" width={"100%"} />
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div className="position-relative d-flex justify-content" >
                            <div className="position-absolute god">
                                <h1>Freshness You Can Taste, Quality You Can Trust</h1>
                            </div>
                            <img src="images/slide_1.jpg" class="d-block w-100" alt="   " width={"100%"} />
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className="position-relative d-flex justify-content" >
                            <div className="position-absolute gud1">
                                <h1>Build your online  store  today </h1>
                                <h1>  And sell everything with us</h1>
                            </div>
                            <img src="images/slide_2.jpg" class="d-block w-100" alt="   m" width={"100%"} />
                        </div>

                    </div>

                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    
            <div className="container mt-5">
                <h1 className="text-center">How to Order</h1>
                <div className="row">
                    {
                        data.map((val) => {
                            return (
                                <div className="col-md-4 border  ">
                                    <img src={val.img} alt="" width={"100%"} />
                                    <h2 className="text-center">{val.step}</h2>
                                    <p className="text-center">{val.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <OurStores></OurStores>
            <ChooseUs></ChooseUs>
            <blog></blog>
        </>


    )
}
export default Home