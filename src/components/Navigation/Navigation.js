import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Navigation = (props) => {

    const background = `url(${props.backgroundUrl})`;
    return (
        <div className="bgded parallax"
            style={{ backgroundImage: background }}>
            <div className="wrapper row2">
                <nav id="mainav" className="hoc clear">
                    <ul className="clear">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About Me</NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery">Gallery</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="wrapper overlay">
                {props.children}
            </div>
        </div>
    );
};

export const Breadcrumb = (props) => {
    return (
        <div id="breadcrumb" className="hoc clear"> 
            <ul>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">{props.activePage}</Link></li>
            </ul>
        </div>
    );
};