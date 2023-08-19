import React from 'react';
import './footer-style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import mackaLogo from '../images/logoText_macka-white.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer-background">
                <div className="footer-content">
                    <div className="footer-column">
                        <img src={mackaLogo} className='footer-logo' alt="Macka Logo" />
                    </div>
                    <div className="footer-column">
                        <div className="opening-hours">
                            <h1>
                                Odpiralni čas:
                            </h1>
                            <p>Pon - Čet: 9.00 - 23.00</p>
                            <p>Pet - Sob:  9.00 - 2.00 </p>
                            <p>Ned: 9.00 - 23.00</p>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="location">
                            <h3>Lokacija:</h3>
                            <p>Naslov: Vojašniška ulica 6</p>
                            <p>Mesto: Maribor</p>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="social-media">
                            <h1>Socialna omrežja:</h1>
                            <a href="https://www.instagram.com/macka_bar/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.facebook.com/mackabar/">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
