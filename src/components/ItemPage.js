import React from 'react';
import Header from './children/Header';
import OpenHours from './children/OpenHours';
import { useSession } from "../contexts/SessionContext";

const ItemPage = () => {
    const { activeItem, orderTime, addToShoppingCart, shoppingCart } = useSession()

    return (
        <>
            <Header/>
            <OpenHours text="Beräknad tid för leverans" time={orderTime + " minuter"} />
            {console.log(activeItem)}
            <div onClick={() => addToShoppingCart(activeItem)} style={{background: "red"}}>
                <p>memememe</p>
            </div>
            <div onClick={() => console.log(shoppingCart)} style={{background: "blue"}}>
                <p>emememeem</p>
            </div>
        </>
    )
}

export default ItemPage
