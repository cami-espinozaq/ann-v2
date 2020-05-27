import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Wrapper, mainClass } from '../../shared/helper';

import classes from "./navigation.module.css";

export const Navigation = (props) => {
    const background = `url(${props.backgroundUrl})`;
    return (
        <div className="bgded parallax"
            style={{ backgroundImage: background }}>
            <Wrapper class={classes.row}>
                <nav className={mainClass(classes.mainav)}>
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
            </Wrapper>
            <Wrapper class={classes.overlay}>
                {props.children}
            </Wrapper>
        </div>
    );
};

export const Breadcrumb = (props) => {
    return (
        <div className={mainClass(classes.breadcrumb)}> 
            <ul>
                <li><HashLink to="#">Home</HashLink></li>
                <li><HashLink to="#">{props.activePage}</HashLink></li>
            </ul>
        </div>
    );
};