import React from 'react';
import HeaderSecondary from './children/HeaderSecondary';
import OpenHours from './children/OpenHours';
import ItemDetails from './children/ItemDetails';
import { useSession } from "../contexts/SessionContext";
import Background from './children/Background';

const ItemPage = () => {
    const { activeItem, orderTime, addToShoppingCart, shoppingCart } = useSession()

    return (
        <>
            <HeaderSecondary/>
            <OpenHours text="Beräknad tid för leverans" time={orderTime + " minuter"} />
            <ItemDetails/>
            <Background height={"150vh"}/>
        </>
    )
}

export default ItemPage
