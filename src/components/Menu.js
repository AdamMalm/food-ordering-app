import React from 'react';
import BackgroundOverflow from './children/BackgroundOverflow';
import Header from './children/Header';
import OpenHours from './children/OpenHours';
import Navbar from './children/Navbar';

const Menu = () => {
    return (
        <>
            <BackgroundOverflow/>
            <Header/>
            <OpenHours text="Beräknad tid för leverans" time="45 minuter" />
        </>
    )
}

export default Menu
