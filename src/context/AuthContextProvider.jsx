
import { createContext, useState } from "react"
import { useEffect } from "react"
export let authContext = createContext()


function AuthContextProvider({ children }) {
    let [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        let userID = localStorage.getItem("userID")
        if (userID) {
            setIsLogin(true)
        }
    }, [isLogin])

    return (
        <>
            <authContext.Provider value={{ isLogin, setIsLogin }}>
                {children}
            </authContext.Provider>

        </>
    )
}
export default AuthContextProvider