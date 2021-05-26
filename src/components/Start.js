import React from 'react'
import Background from './children/Background';
import Header from './children/Header';
import OpenHours from './children/OpenHours';
import OrderType from './children/OrderType';
import Krav from './children/Krav';

const Start = () => {
    return (
        <>
            <Header/>
            <OpenHours text="Öppet" time="08:00 - 20:30" />
            <OrderType/>
            <Krav/>
            <Background height={"100vh"}/>

        </>
    )
}

export default Start
