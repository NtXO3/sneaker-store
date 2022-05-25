import React from 'react';
import Logo from '../assets/logo.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__info">
                    <img src={Logo} alt="" className="footer__logo" />
                    <p className="footer__slogan">
                        De #1 Sneaker Oplossing in Nederland
                    </p>
                    <p className="footer__copyright">
                        Copyright &copy; Sneakers 2022
                    </p>
                    <div className="footer__social--links">
                        <a href="" className="footer__social--link">
                            <FontAwesomeIcon icon = {faFacebook}/>
                        </a>
                        <a href="" className="footer__social--link">
                            <FontAwesomeIcon icon = {faInstagram}/>
                        </a>
                        <a href="" className="footer__social--link">
                            <FontAwesomeIcon icon = {faPhone}/>
                        </a>
                        <a href="" className="footer__social--link">
                            <FontAwesomeIcon icon = {faEnvelope}/>
                        </a>
                    </div>
                </div>
                <ul className="footer__links">
                    <li className="footer__links--title">
                        Onze Winkel
                    </li>
                    <li>
                        <a href="" className="footer__link">Collecties</a>
                    </li>
                    <li>
                        <a href="" className="footer__link">Mannen</a>
                    </li>
                    <li>
                        <a href="" className="footer__link">Vrouwen</a>
                    </li>
                </ul>
                <ul className="footer__links">
                    <li className="footer__links--title">
                        Over Ons
                    </li>
                    <li>
                        <a href="" className="footer__link">Info</a>
                    </li>
                    <li>
                        <a href="" className="footer__link">Contact</a>
                    </li>
                    <li>
                        <a href="" className="footer__link">Vacatures</a>
                    </li>
                </ul>
                <ul className="footer__links">
                    <li className="footer__links--title">
                        Policies
                    </li>
                    <li>
                        <a href="" className="footer__link">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="" className="footer__link">Terms of Service</a>
                    </li>
                    <li>
                        <a href="" className="footer__link">Geld Terug Garantie</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
