import React, { useContext, useState } from 'react'
import fooddata from "../jsonconvert";

const SessionContext = React.createContext();

export const useSession = () => {
    return useContext(SessionContext)
}

const SessionProvider = ({ children }) => {
    const [sessionAddress, setSessionAddress] = useState("");
    const [orderTime, setOrderTime] = useState(45);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [activeItem, setActiveItem] = useState([])

    const addToShoppingCart = (array) => {
        setTotalPrice(totalPrice + array.price)
        shoppingCart.push(array)
    }
    

    const value = {
        fooddata,
        sessionAddress,
        setSessionAddress,
        orderTime, 
        setOrderTime,
        shoppingCart,
        setShoppingCart,
        addToShoppingCart,
        activeItem,
        setActiveItem,
        totalPrice,
        setTotalPrice
    }

    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    )
}

export {SessionProvider}
