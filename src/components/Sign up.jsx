function Signup() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-6  box ">
                        <h1 className="text-center"> Sign up</h1>
                        <label htmlFor="" className="">  Email : </label><input type="text" placeholder="Email" className="form-control" />
                        <br />
                        <br />
                        <label htmlFor=""> Password :</label>   <input type="text" placeholder=" password" name="from centrol" />
                        <br />
                        <br />
                        <label htmlFor=""> Confirm  Password :</label> <input type="text" placeholder=" confirm password " name="from centrol" />
                        <br />
                        <br />
                        <button className="btn bg-primary text-white BROWSE">Sign up </button>
                    </div>
                </div>
            </div>



        </>
    )
}
export default Signup;