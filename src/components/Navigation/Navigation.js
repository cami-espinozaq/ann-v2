import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import "./navigation.css";

export const Navigation = (props) => {
    const background = `url(${props.backgroundUrl})`;
    return (
        <div className="bgded parallax"
            style={{ backgroundImage: background }}>
            <div className="wrapper row2">
                <nav className="mainav hoc clear">
                    <ul className="clear">
                        <li>
                            <NavLink to="/" exact>Home</NavLink>
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
        <div className="breadcrumb hoc clear"> 
            <ul>
                <li><HashLink to="#">Home</HashLink></li>
                <li><HashLink to="#">{props.activePage}</HashLink></li>
            </ul>
        </div>
    );
};