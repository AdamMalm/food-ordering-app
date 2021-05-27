import React from 'react';
import HeaderSecondary from './children/HeaderSecondary';
import OpenHours from './children/OpenHours';
import { useSession } from "../contexts/SessionContext";

const ItemPage = () => {
    const { activeItem, orderTime, addToShoppingCart, shoppingCart } = useSession()

    return (
        <>
            <HeaderSecondary/>
            <OpenHours text="Beräknad tid för leverans" time={orderTime + " minuter"} />
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
