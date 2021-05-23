import React from 'react'
import Background from './children/Background';
import Header from './children/Header';
import OpenHours from './children/OpenHours';
import OrderType from './children/OrderType';
import Krav from './children/Krav';

const Start = () => {
    return (
        <>
            <Background/>
            <Header/>
            <OpenHours/>
            <OrderType/>
            <Krav/>
        </>
    )
}

export default Start
