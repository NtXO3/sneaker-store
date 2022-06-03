import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { LoadingOverlay } from '@mantine/core';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [visible, setVisible] = useState(false)
    const [sucess, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
            setSuccess(true)
        }, 1000)
    }

    return (
        <section id="contact">
            <div className="container">
                <div className="row about__row">
                    <div className="contact__wrapper">
                        <div className="contact__form--wrapper">
                            <h3 className="contact__form--title">Neem Contact Op</h3>
                            <form onSubmit={handleSubmit} className="contact__form">
                                <div className="form__row">
                                    <input type="text" className='contact__input input__half' placeholder='Naam*' required onChange={(e) => setName(e.target.value)} value={name}/>
                                    <input type="text" className='contact__input input__half' placeholder='Bedrijf' onChange={(e) => setCompany(e.target.value)} value={company}/>
                                </div>
                                <div className="form__row">
                                    <input type="email" className='contact__input input__half' placeholder='Email*' required onChange={(e) => setEmail(e.target.value)} value={email}/>
                                    <input type="phone" className='contact__input input__half' placeholder='Telefoonnummer' onChange={(e) => setPhone(e.target.value)} value={phone}/>
                                </div>
                                <input type="text" className='contact__input' placeholder='Onderwerp*' required onChange={(e) => setSubject(e.target.value)} value={subject}/>
                                <textarea className='contact__message contact__input' placeholder='Bericht*' required onChange={(e) => setMessage(e.target.value)} value={message}/>
                                <div className="contact__form--bottom">
                                    <button className="btn contact__btn">Versturen</button>
                                    <p className="contact__form--bottom--text">*Verplichte Velden </p>
                                </div>
                            </form>
                            <LoadingOverlay visible={visible} />
                            {
                                sucess ?
                                <div className="success__overlay">
                                    <div className="success__inside">
                                        <FontAwesomeIcon icon={faThumbsUp} className='success__icon'/>
                                        <h1 className="success__title">Gelukt! We hebben je bericht in goede orde ontvangen!</h1>
                                        <p className="success__message">Dit bericht is niet echt verstuurd. Die functionaliteit heb ik niet echt geimplementeerd</p>
                                    </div>
                                </div>
                                :
                                <></>
                            }
                        </div>
                        <div className="contact__chat--wrapper">
                            <img src="https://cdn.webshopapp.com/shops/176120/themes/171203/v/1633/assets/faq-banner.jpg?20220525102800?20200422131816" alt="" className="contact__chat--img" />
                            <div className="contact__chat--backdrop"></div>
                            <div className="contact__chat--inside">
                                <FontAwesomeIcon icon={faComments} className='contact__chat--icon' />
                                <h1 className="contact__chat--title">Stel direct al je vragen</h1>
                                <p className="contact__chat--sub-title">Krijg direct al je antwoorden via onze live chat</p>
                                <button className="contact__chat--btn" onClick={() => alert('This feature has not yet been implemented')}>Start een live chat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
