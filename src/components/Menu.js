import React from 'react';
import BackgroundOverflow from './children/BackgroundOverflow';
import Header from './children/Header';
import OpenHours from './children/OpenHours';
import Navbar from './children/Navbar';
import MenuItems from "./children/MenuItems"

const Menu = () => {
    return (
        <> 
            <Header/>
            <OpenHours text="Beräknad tid för leverans" time="45 minuter" />
            <BackgroundOverflow/>
            
        </>
    )
}

export default Menu
