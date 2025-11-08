
import { createContext, useState } from "react"
import { useEffect } from "react"

export let cartContext = createContext()


function AddToCartContextProvider({ children }) {

    let [cartItem, setCartItem] = useState([])
    let userID = localStorage.getItem("userID")


    const fetchCartData = async () => {
        if (userID) {
            try {
                const res = await fetch(`http://localhost:4000/api/cart/${userID}`);
                const data = await res.json();
                setCartItem(data);
            } catch (err) {
                console.log(err)
            }
        }
        else {
            setCartItem([])
        }
    };

    useEffect(() => {
        fetchCartData()
    }, [])

// console.log(cartItem);

function addProductQut(productId ){
           let newCart =   cartItem.map(element => {
                if (element.productId._id == productId) {
                     element.qut =  Number (element.qut) + 1;
                     return element
                } 
               return element
            });
           setCartItem(newCart);
    }

    function removeProductQut(productId ){
           let newCart =   cartItem.map(element => {
                if (element.productId._id == productId) {
                    if (element.qut == 0) {
                        return element
                    }
                     element.qut =  Number (element.qut) - 1;
                     return element
                } 
               return element
            });
           setCartItem(newCart);
    }


    async function addToCart(productId) {
        try {

            let res = await fetch(`http://localhost:4000/AddToCart/${userID}`, {
                method: "post",
                body: JSON.stringify({ productId }),
                headers: {
                    "content-type": "application/json"
                }
            })
            let data = await res.json()
            alert(data.msg);
            fetchCartData()
        } catch (error) {
            console.log(error);
        }

    }

     const totalPrice =  cartItem.reduce((total , val)=>{
            total  += Number(val.productId.price) * Number(val.qut)
            return total
    } , 0)


 async function removeProduct(productId){
       let res =  await fetch("http://localhost:4000/api/removefromcart" , {
            method : "delete",
            body: JSON.stringify({ productId , userID }),
            headers: {
                "content-type": "application/json"
            }
        })
      let data =  await res.json()
      alert(data.msg);
      fetchCartData()
  }

    return (
        <>
            <cartContext.Provider value={{ addToCart , cartItem ,addProductQut ,totalPrice ,removeProductQut , removeProduct }}>
                {children}
            </cartContext.Provider>
        </>
    )
}
export default AddToCartContextProvider