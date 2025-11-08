import { useState } from "react"
function AddProduct() {

    let [name, setName] = useState("")
    let [price, setprice] = useState("")
    let [ratting, setratting] = useState("")
    let [Message, setmessage] = useState("")
    let [imgPath, setImgPath] = useState("")

    function handelfrom() {
        if (imgPath == "") {
            return alert("upload Img first ")
        }

        fetch("http://localhost:4000/AddProduct", {
            method: "post",
            body: JSON.stringify({ name, price, ratting, Message, imgPath }),
            headers: {
                "content-type": "application/json"
            }
        })
            .then((res) => { return res.json() })
            .then(data => alert(data.msg))
            .catch((error) => console.log(error))

    }

    async function handelImg(e) {
        let file = e.target.files[0]
        let form = new FormData()
        form.append("file", file)
        form.append("upload_preset", "imgDemo")
        try {

            let res = await fetch("https://api.cloudinary.com/v1_1/db3hdxqub/image/upload", {
                method: "post",
                body: form
            })
            let data = await res.json()
            setImgPath(data.secure_url);
        } catch (error) {
            console.log(error);
        }
    }
    return (        
        <>
            <div className="col-md-1"></div>
            <div className="mt-5 col-md-8  ">
                <div className="row border p-5 shadow bg-body rounded ">
                    <h1 className="top "> ADDPRODUCT</h1>
                    <div className="col-mt-5 top  ">
                        <br />
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="ENTER NAME" className="form-control" />
                        <br />
                        <input type="file" placeholder="IMAGE" className="form-control" onChange={handelImg} />
                        <br />
                        <input type="price " value={price} onChange={(e) => { setprice(e.target.value) }} placeholder="PRICE" className="form-control" />
                        <br />
                        <input type="text" value={ratting} onChange={(e) => { setratting(e.target.value) }} placeholder="ratting" className="form-control" />
                        <br />

                        <input type="text" value={Message} onChange={(e) => { setmessage(e.target.value) }} placeholder="ENTER  Description " className="form-control" />
                        <br />
                        <button className="btn bg-primary text-white BROWSE " onClick={handelfrom} >SUBMIT </button>
                        <br />

                    </div>
                </div>
            </div>


        </>
    )
}
export default AddProduct