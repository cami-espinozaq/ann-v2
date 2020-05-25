import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../../assets/css/main.css';
import './header.css';

const Header = () => {
    return (
        <React.Fragment>
            <div className="wrapper row0">
                <div id="top" className="topbar hoc clear"> 
                    <ul>    
                        <li>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                            +44 (0) 7922 532760
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />
                            ann@anncarrtours.co.uk
                        </li>
                        <li>
                            <a 
                                href="https://www.facebook.com/anncarrtours"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                                /anncarrtours
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.instagram.com/anncarrtours"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                                @anncarrtours
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="wrapper row1">
                <header id="header" className="hoc clear"> 
                    <div id="logo" className="fl_left">
                        <h1><Link to="/">Ann Carr Tours</Link></h1>
                    </div>
                    <div className="fl_right">
                        <HashLink smooth className="btn" to="#contact-me">
                            Contact me
                        </HashLink>
                    </div>
                </header>
            </div>
        </React.Fragment>
    );
};

export default Header;