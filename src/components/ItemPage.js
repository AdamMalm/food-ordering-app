import React from 'react';
import Header from './children/Header';
import OpenHours from './children/OpenHours';
import ItemDetails from './children/ItemDetails';
import { useSession } from "../contexts/SessionContext";
import Background from './children/Background';

const ItemPage = () => {
    const { activeItem, orderTime, addToShoppingCart, shoppingCart } = useSession()

    return (
        <>
            <Header/>
            <OpenHours text="Beräknad tid för leverans" time={orderTime + " minuter"} />
            {console.log(activeItem.name)}
            <ItemDetails/>
            <div onClick={() => addToShoppingCart(activeItem)} style={{background: "red"}}>
            </div>
            <div onClick={() => console.log(shoppingCart)} style={{background: "blue"}}>
            </div>
            <Background height={"auto"}/>
        </>
    )
}

export default ItemPage
