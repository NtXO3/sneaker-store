import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="row about__row">
                    <div className="about__wrapper">
                        <div className="about__column">
                            <h1 className="about__title">Locatie Sneakers</h1>
                            <h3 className="location__sub-title">Sneakers B.V.</h3>
                            <h3 className="location__sub-title">Straatnaam 99</h3>
                            <h3 className="location__sub-title">1111AA, Leiden</h3>
                            <h3 className="location__sub-title">KVK: 001122112</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39168.65282659467!2d4.409912377137797!3d52.151767694644164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c68b88c9d753%3A0x74076352baf3fe49!2sLeiden!5e0!3m2!1snl!2snl!4v1654282386911!5m2!1snl!2snl" style={{border: 0, width: '100%', height: 200, marginTop: 24}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="about__column">
                            <h1 className="about__title">Openingstijden</h1>
                            <div className="opening__time dark">
                                <h4 className="opening__time--title">Maandag</h4>
                                <p className="opening__time--hours">10:00 - 18:30</p>
                            </div>
                            <div className="opening__time">
                                <h4 className="opening__time--title">Dinsdag</h4>
                                <p className="opening__time--hours">10:00 - 18:30</p>
                            </div>
                            <div className="opening__time dark">
                                <h4 className="opening__time--title">Woensdag</h4>
                                <p className="opening__time--hours">10:00 - 18:30</p>
                            </div>
                            <div className="opening__time">
                                <h4 className="opening__time--title">Donderdag</h4>
                                <p className="opening__time--hours">10:00 - 21:00</p>
                            </div>
                            <div className="opening__time dark">
                                <h4 className="opening__time--title">Vrijdag</h4>
                                <p className="opening__time--hours">10:00 - 18:30</p>
                            </div>
                            <div className="opening__time">
                                <h4 className="opening__time--title">Zaterdag</h4>
                                <p className="opening__time--hours">10:00 - 18:30</p>
                            </div>
                            <div className="opening__time dark">
                                <h4 className="opening__time--title">Zondag</h4>
                                <p className="opening__time--hours">12:00 - 18:00</p>
                            </div>
                        </div>
                        <div className="about__column">
                            <h1 className="about__title">Contactgegevens</h1>
                            <div className="contact--info--wrapper">
                                <FontAwesomeIcon icon={faPhone} className='contact__icon' />
                                <div className="contact__info">
                                    <h3 className="contact__title">Bel Ons</h3>
                                    <p className="contact__option">+31 6 12345678</p>
                                </div>
                            </div>
                            <div className="contact--info--wrapper">
                                <FontAwesomeIcon icon={faEnvelope} className='contact__icon' />
                                <div className="contact__info">
                                    <h3 className="contact__title">Email Ons</h3>
                                    <p className="contact__option">example@example.nl</p>
                                </div>
                            </div>
                            <div className="contact--info--wrapper">
                                <FontAwesomeIcon icon={faWhatsapp} className='contact__icon whatsapp' />
                                <div className="contact__info">
                                    <h3 className="contact__title whatsapp">WhatsApp Ons</h3>
                                    <p className="contact__option">+31 6 12345678</p>
                                </div>
                            </div>
                            <div className="contact--info--wrapper">
                                <FontAwesomeIcon icon={faFacebookF} className='contact__icon facebook' />
                                <div className="contact__info">
                                    <h3 className="contact__title facebook">Facebook</h3>
                                    <p className="contact__option">Vind ons op Facebook</p>
                                </div>
                            </div>
                            <div className="contact--info--wrapper">
                                <FontAwesomeIcon icon={faInstagram} className='contact__icon instagram' />
                                <div className="contact__info">
                                    <h3 className="contact__title instagram">Instagram</h3>
                                    <p className="contact__option">Vind ons op Instagram</p>
                                </div>
                            </div>
                            <div className="contact--info--wrapper">
                                <FontAwesomeIcon icon={faYoutube} className='contact__icon youtube' />
                                <div className="contact__info">
                                    <h3 className="contact__title youtube">YouTube</h3>
                                    <p className="contact__option">Vind ons op YouTube</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
