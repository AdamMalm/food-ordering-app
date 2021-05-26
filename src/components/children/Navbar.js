import React from 'react';
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
