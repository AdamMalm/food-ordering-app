import React from 'react';
import { Link } from 'react-router-dom';
import {animateScroll as scroll } from "react-scroll";

const navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-item">
                <Link to="">Populärt</Link>
            </div>
            <div className="navbar-item">
                <Link to="">Pizza</Link>
            </div>
            <div className="navbar-item">
                <Link to="">Pasta</Link>
            </div>
            <div className="navbar-item">
                <Link to="">Sallad</Link>
            </div>
            <div className="navbar-item">
                <Link to="">Barnmeny</Link>
            </div>
            <div className="navbar-item">
                <Link to="">Antipasto</Link>
            </div>
            <div className="navbar-item">
                <Link to="">Dolci</Link>
            </div>
            <div className="navbar-item">
                <Link to="">Dryck</Link>
            </div>
            <div className="navbar-item">
                <Link to="">Övrigt</Link>
            </div>
        </div>
    )
}

export default navbar
