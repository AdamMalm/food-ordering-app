import React from 'react';
import Background from './children/Background';
import Header from './children/Header';
import OpenHours from './children/OpenHours';
import Navbar from './children/Navbar';
import MenuItems from "./children/MenuItems";
import fooddata from "../jsonconvert";


const Menu = () => {
    return (
        <> 
            <Header/>
            <OpenHours text="Beräknad tid för leverans" time="45 minuter" />
            <Navbar fooddata={fooddata}/>
            {/* <MenuItems fooddata={fooddata}/> */}
            <Background height={"auto"}/>
            
        </>
    )
}

export default Menu
