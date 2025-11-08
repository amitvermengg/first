import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState , useEffect } from "react";
const MyOrders = () => {

 const [orders, setOrders] = useState([])
    async function getOrders() {
        let userId =  localStorage.getItem("userID")
        if (!userId) {
            return alert("login your account ")
        }
        try {
            const res = await fetch(`http://localhost:4000/api/myorder/${userId}`)
            const data = await res.json()
            setOrders(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getOrders()
    }, [])
//   const orders = [
//     {
//       _id: "690dd170f2785ee252411ba2",
//       userId: "68f0ce12d8f3fe64d9040f84",
//       products: [
//         {
//           productId: {
//             _id: "68f2180fa7887698a1f2e50f",
//             name: "milk",
//             price: "70",
//             ratting: "4",
//             Message: "pure milk ",
//             imgPath:
//               "https://res.cloudinary.com/db3hdxqub/image/upload/v1760696322/ovr1kucsl9cwuprkebri.webp",
//           },
//           qut: "1",
//           _id: "690dd14df2785ee252411b86",
//         },
//         {
//           productId: {
//             _id: "68f2199ca7887698a1f2e516",
//             name: "PANEER ",
//             price: "300",
//             ratting: "4",
//             Message: "GOOD FOR HEALTH ",
//             imgPath:
//               "https://res.cloudinary.com/db3hdxqub/image/upload/v1760696705/rj3ogvme3fngmcwdserk.jpg",
//           },
//           qut: "1",
//           _id: "690dd150f2785ee252411b8d",
//         },
//         {
//           productId: {
//             _id: "68f219bea7887698a1f2e518",
//             name: "CREAM",
//             price: "400",
//             ratting: "5",
//             Message: "GOOD",
//             imgPath:
//               "https://res.cloudinary.com/db3hdxqub/image/upload/v1760696761/wa3bdv3qxl1uxeppwcwc.avif",
//           },
//           qut: "1",
//           _id: "690dd152f2785ee252411b96",
//         },
//       ],
//       totalAmount: "770",
//       paymentStatus: "paid",
//       paymentId: "pay_RcpHnuFHFrKAmq",
//     },
//     {
//       _id: "690dd170f2785ee252411bac",
//       userId: "68f0ce12d8f3fe64d9040f84",
//       products: [
//         {
//           productId: {
//             _id: "68f2180fa7887698a1f2e50f",
//             name: "milk",
//             price: "70",
//             ratting: "4",
//             Message: "pure milk ",
//             imgPath:
//               "https://res.cloudinary.com/db3hdxqub/image/upload/v1760696322/ovr1kucsl9cwuprkebri.webp",
//           },
//           qut: "1",
//           _id: "690dd14df2785ee252411b86",
//         },
//         {
//           productId: {
//             _id: "68f2199ca7887698a1f2e516",
//             name: "PANEER ",
//             price: "300",
//             ratting: "4",
//             Message: "GOOD FOR HEALTH ",
//             imgPath:
//               "https://res.cloudinary.com/db3hdxqub/image/upload/v1760696705/rj3ogvme3fngmcwdserk.jpg",
//           },
//           qut: "1",
//           _id: "690dd150f2785ee252411b8d",
//         },
//         {
//           productId: {
//             _id: "68f219bea7887698a1f2e518",
//             name: "CREAM",
//             price: "400",
//             ratting: "5",
//             Message: "GOOD",
//             imgPath:
//               "https://res.cloudinary.com/db3hdxqub/image/upload/v1760696761/wa3bdv3qxl1uxeppwcwc.avif",
//           },
//           qut: "1",
//           _id: "690dd152f2785ee252411b96",
//         },
//       ],
//       totalAmount: "770",
//       paymentStatus: "pending",
//       paymentId: "null",
//     },
//   ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">My Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center text-muted">No orders found.</div>
      ) : (
        orders.map((order) => (
          <div className="card mb-4 shadow-sm" key={order._id}>
            <div className="card-header d-flex justify-content-between align-items-center">
              <div>
                <strong>Order ID:</strong> {order._id}
              </div>
              <span
                className={`badge ${
                  order.paymentStatus === "paid"
                    ? "bg-success"
                    : "bg-warning text-dark"
                }`}
              >
                {order.paymentStatus.toUpperCase()}
              </span>
            </div>

            <div className="card-body">
              <div className="row">
                {order.products.map((item) => (
                  <div className="col-md-4 mb-3" key={item._id}>
                    <div className="card h-100">
                      <img
                        src={item.productId.imgPath}
                        className="card-img-top"
                        alt={item.productId.name}
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.productId.name}</h5>
                        <p className="card-text text-muted small">
                          {item.productId.Message}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold">
                            ₹{item.productId.price}
                          </span>
                          <span className="badge bg-secondary">
                            Qty: {item.qut}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <hr />
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Address</h5>
                <p>Name : {order.address?.name}</p>
                <p>last Name : {order.address?.lastname}</p>
                 <p>city : {order.address?.city}</p>
                  <p>Pin Code  : {order.address?.pincode}</p> 
                  <p>Address : {order.address?.addres}</p>
                      <p>Number : {order.address?.number}</p>

                </div>
                <div>
                  <strong>Total:</strong> ₹{order.totalAmount}
                </div>
                <div>
                  <strong>Payment ID:</strong>{" "}
                  {order.paymentId && order.paymentId !== "null"
                    ? order.paymentId
                    : "Not Available"}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
