import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMobileAlt, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Badges from '../../assets/images/footer/badges.png';
import { HashLink } from 'react-router-hash-link';
import "./footer.css";

export const Footer = () => {
    return (
        <React.Fragment>
            <div className="wrapper row4">
                <footer className="footer hoc clear"> 
                    <div className="one_centered_block">
                        <h6 id="contact-me" className="heading">Contact Me</h6>
                        <div className="list-with-img">
                            <ul className="linklist">
                                <li>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                    +44 (0) 121 707 8538
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                    +44 (0) 7922 532760
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    ann@anncarrtours.co.uk
                                </li>                                
                            </ul>
                            <img src={Badges} alt="badges"/>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="wrapper row5">
                <div className="copyright hoc clear"> 
                    <p className="fl_left">
                        Copyright &copy; 2019 - All Rights Reserved - anncarrtours.co.uk
                    </p>
                    <p className="fl_right">
                        <a 
                            href="https://www.os-templates.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Free Website Templates">
                            Thanks to OS Templates
                        </a>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export const BackToTop = () => {

    const [ isScrolled, setIsScrolled ] = useState();

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    const scrollHandler = (e) => {
        const element = e.target.documentElement
        const visible = element.scrollTop / element.scrollHeight > 0.2;
        setIsScrolled(visible);
    }

    const backToTop = (
        <HashLink smooth className="backtotop" to="#top">
            <FontAwesomeIcon icon={faChevronUp} />
        </HashLink>
    );

    return isScrolled ? backToTop : null;
}