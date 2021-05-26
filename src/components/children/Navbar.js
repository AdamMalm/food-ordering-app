import React from 'react';
import { Link } from 'react-router-dom';
import {animateScroll as scroll } from "react-scroll";
import NavItem from "./children/NavItem";

const navbar = ({ fooddata }) => {
    return (
        <div className="navbar-container">
            <ul>
                {
                    fooddata.categories.map(item => {
                        return (<li key={item.categoryId}><NavItem title={item.name}/></li>)
                    })
                }
            </ul>
        </div>
    )
}

export default navbar
