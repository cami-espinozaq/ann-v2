import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Badges from '../../assets/images/footer/badges.png';
import "./footer.css";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="wrapper row4">
                <footer id="footer" className="hoc clear"> 
                    <div className="one_centered_block">
                        <h6 id="contact-me" className="heading">Contact Me</h6>
                        <div className="list-with-img">
                            <ul className="linklist contact">
                                <li>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                    +44 (0) 121 707 8538
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faMobile} />
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
                <div id="copyright" className="hoc clear"> 
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

export default Footer;