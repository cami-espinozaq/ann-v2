import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Wrapper, mainClass } from '../../shared/helper';
import classes from './header.module.css';

const Header = () => {
    return (
        <React.Fragment>
            <Wrapper class={classes.upperRow}>
                <div id="top" className={mainClass(classes.topbar)}>
                    <ul>    
                        <li>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                            +44 (0) 7922 532760
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />
                            ann@anncarrtours.co.uk
                        </li>
                        <li><a 
                                href="https://www.facebook.com/anncarrtours"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                                /anncarrtours
                            </a>
                        </li>
                        <li><a 
                                href="https://www.instagram.com/anncarrtours"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                                @anncarrtours
                            </a>
                        </li>
                    </ul>
                </div>
            </Wrapper>
            <Wrapper class={classes.lowerRow}>
                <header className={mainClass(classes.header)}>
                    <div className={classes.logo}>
                        <h1><Link to="/">Ann Carr Tours</Link></h1>
                    </div>
                    <div className={classes.contactMe}>
                        <HashLink smooth className="btn" to="#contact-me">
                            Contact me
                        </HashLink>
                    </div>
                </header>
            </Wrapper>
        </React.Fragment>
    );
};

export default Header;