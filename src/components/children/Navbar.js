import React from 'react';
import { Link } from 'react-router-dom';
import {animateScroll as scroll } from "react-scroll";

const navbar = () => {
    return (
        <div className="navbar-container">
            <nav>
                <ul>
                    <li><Link to="">Populärt</Link></li>
                    <li><Link to="">Pizza</Link></li>
                    <li><Link to="">Pasta</Link></li>
                    <li><Link to="">Sallad</Link></li>
                    <li><Link to="">Barnmeny</Link></li>
                    <li><Link to="">Antipasto</Link></li>
                    <li><Link to="">Dolci</Link></li>
                    <li><Link to="">Dryck</Link></li>
                    <li><Link to="">Övrigt</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default navbar
