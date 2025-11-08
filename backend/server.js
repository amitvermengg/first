let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors")
const { transformWithEsbuild } = require("vite")
let bcrypt = require("bcrypt")


let app = express()
let port = 4000
app.use(cors())

app.use(express.json())

let contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Subject: {
        type: String,
    },
    Message: {
        type: String,
    },
    Mobile: {
        type: String,
        required: true
    }
})


let Contacts = mongoose.model("Contact", contactSchema)

app.post("/addContact", async (req, res) => {
    let data = req.body

    try {
        await Contacts.create(data)
        res.status(200).json({ msg: "Data Save !" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error !" })
    }
})

app.get("/getAllContact", async (req, res) => {
    try {
        const allContact = await Contacts.find()
        res.json(allContact)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error !" })
    }
})

app.delete("/api/deleteContact/:id", async (req, res) => {
    let _id = req.params.id
    try {
        let data = await Contacts.findOneAndDelete({ _id })
        res.status(200).json({ msg: " data delete" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error !" })
    }
})





let addproductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    ratting: {
        type: String,
        required: true

    },
    Message: {
        type: String,


    },
    imgPath: {
        type: String,
        required: true
    }
})


let Product = mongoose.model("Product", addproductSchema)

app.post("/addproduct", async (req, res) => {
    let data = req.body

    try {
        await Product.create(data)
        res.status(200).json({ msg: "addproduct" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "server error !" })

    }
})


app.get("/getAllProduct", async (req, res) => {
    try {
        const allContact = await Product.find()
        res.json(allContact)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error !" })
    }
})

app.delete("/api/deleteProduct/:id", async (req, res) => {
    let _id = req.params.id
    try {
        let data = await Product.findOneAndDelete({ _id })
        res.status(200).json({ msg: " data delete" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error !" })
    }
})

let Signschema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})


let Sign = mongoose.model("sign", Signschema)

app.post("/api/sign", async (req, res) => {
    let data = req.body
    try {

        let find = await Sign.findOne({ email: data.email })
        console.log(find);
        if (find) {
            return res.status(400).json({ msg: " Email Allready exist !" })
        }
        let salt = await bcrypt.genSalt()
        let newPassword = await bcrypt.hash(data.password, salt)
        data.password = newPassword
        await Sign.create(data)
        res.status(200).json({ msg: "sign" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "server error !" })
    }

})

app.post("/api/login", async (req, res) => {
    let data = req.body
    console.log(data);
    try {


        let find = await Sign.findOne({ email: data.email })

        if (!find) {
            return res.status(400).json({ msg: "user Not  Found ! " })
        }
        let match = await bcrypt.compare(data.password, find.password)

        if (!match) {
            return res.status(400).json({ msg: "user Not  Found ! " })
        }
        res.status(200).json({ msg: "LOGIN", find })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "server error !" })
    }

})


let cartSchema = mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "sign"
    },
    products: [
        {
            productId: {
                type: mongoose.Types.ObjectId,
                ref: "Product"
            },
            qut: {
                type: String,
                default: 1,
            }

        }
    ]
})

let Cart = mongoose.model("Cart", cartSchema)

app.post("/addToCart/:userID", async (req, res) => {

    let userID = req.params.userID
    let productId = req.body.productId

    try {
        let cart = await Cart.findOne({ userID })

        if (!cart) {
            cart = new Cart({ userID, products: [] })
        }
        let findIndex = cart.products.findIndex((p) => p.productId == productId)
        if (findIndex > -1) {
            let qut = cart.products[findIndex].qut
            let qut1 = Number(qut) + 1
            cart.products[findIndex].qut = qut1
        } else {
            cart.products.push({ productId, qut: 1 })
        }

        await cart.save()
        res.status(200).json({ msg: "Product Add !" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "server error !" })
    }

})


app.get("/api/cart/:userid", async (req, res) => {
    try {
        const allProduct = await Cart.findOne({ userID: req.params.userid }).populate("products.productId");
        res.status(200).json(allProduct.products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});


app.delete("/api/removefromcart", async (req, res) => {
    try {
        let { userID, productId } = req.body
        console.log(productId);
        let cart = await Cart.findOne({ userID })
        let filterProduct = cart.products.filter((val) => {
            if (val._id != productId) {
                return val
            }
        })
        console.log(filterProduct);
        cart.products = filterProduct
        await cart.save()
        res.status(200).json({ msg: "product Remove !" })
    } catch (error) {

        res.status(500).json({ msg: error.message });
    }

})



let orderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "sign"
    },
    products: [
        {
            productId: {
                type: mongoose.Types.ObjectId,
                ref: "Product"
            },
            qut: {
                type: String,
                default: 1,
            }
        }
    ],
    totalAmount: {
        type: String,
    },
    paymentMethod: {
        type: String,
    },
    paymentStatus: { type: String, default: "pending" },
    paymentId: { type: String, default: "null" },
    address: {
        name: {
            type: String,
        },
        lastname: {
            type: String
        },
        pincode: {
            type: String
        },
        city: {
            type: String
        },
        addres: {
            type: String
        },
         number: {
            type: String
        }

    }
})

let Order = mongoose.model("Order", orderSchema)

app.post("/api/orders/checkout", async (req, res) => {
    try {
        const { userId, cartItem, totalPrice  ,address } = req.body;
        const cart = await Cart.findOne({ userID: userId }).populate("products.productId", "price");
        const newOrder = new Order({
            userId,
            products: cartItem,
            totalAmount: totalPrice,
            address
        });

        await newOrder.save();

        cart.products = [];
        await cart.save();
        res.status(200).json({ success: true, order: newOrder });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})


app.put("/api/order/:orderId", async (req, res) => {
    const { orderId } = req.params;
    let data = req.body
    console.log(data);
    const { paymentId, paymentStatus } = req.body;
    console.log(orderId + paymentId, paymentStatus);
    try {
        const updateOrder = await Order.findByIdAndUpdate(
            orderId,
            { paymentId, paymentStatus },
            { new: true }
        );
        res.status(200).json({ msg: "ok", })
    } catch (err) {
        res.status(500).json({ message: `Faild `, error: err });
    }
})


app.get("/api/myorder/:userId", async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId }).populate("products.productId")
        console.log(orders);
        res.json(orders);
    } catch (error) {
        console.log(error)
        res.status(500).josn({ error: error.message });
    }
})










// mongoose.connect("mongodb://localhost:27017/firstProject")
mongoose.connect("mongodb+srv://amitverma6224_db_user:FrmRWzgdM91sT4hq@cluster0.dydrpyh.mongodb.net/firstProject")
    .then(() => {
        app.listen(port, () => {
            console.log(`server Start port no is ${port}`);
        })

    })

    .catch((error) => {
        console.log(error);
    })
