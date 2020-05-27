import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
                            <SocialMedia site="facebook">
                                <FontAwesomeIcon icon={faFacebookF} />
                                /anncarrtours
                            </SocialMedia>
                        </li>
                        <li>
                            <SocialMedia site="instagram">
                                <FontAwesomeIcon size="lg" icon={faInstagram} />
                                @anncarrtours
                            </SocialMedia>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="wrapper row1">
                <header className="header hoc clear"> 
                    <div className="logo">
                        <h1><Link to="/">Ann Carr Tours</Link></h1>
                    </div>
                    <div className="contactMe">
                        <HashLink smooth className="btn" to="#contact-me">
                            Contact me
                        </HashLink>
                    </div>
                </header>
            </div>
        </React.Fragment>
    );
};

const SocialMedia = (props) => (
    <a 
        href={`https://www.${props.site}.com/anncarrtours`}
        target="_blank"
        rel="noopener noreferrer"
        className="noTransition">
        {props.children}
    </a>
);

export default Header;