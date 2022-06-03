import React, { useState } from 'react';
import WomenWithBags from '../assets/Beautiful-Girl-Holding-Shopping-Bag-Transparent-PNG.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const CTA = () => {
    const [loading, setLoading] = useState(false)
    const [signedUpForNotifs, setSignedUpForNotifs] = useState(false)

    const mockSignUp = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSignedUpForNotifs(true)
        }, 800)
    }

    return (
        <section id="cta">
            <div className="container">
                <div className="row row__cta">
                    <div className="cta__inside">
                        <div className="cta__description">
                            <h1 className="cta__title">Sign Up For Our Newsletter</h1>
                            <p className="cta__para">Receive all the latest stock and sales updates in your inbox!<br/>You also get a 20% Discount Code when you sign up!</p>
                            <div className="cta__input--wrapper">
                                <input type="email" className="cta__input" placeholder='Enter your E-Mail...' />
                                <button className='cta__btn' onClick={mockSignUp}>{loading ? <FontAwesomeIcon icon={faSpinner} className='fa-spinner-account' /> : 'Sign Up'}</button>
                            </div>
                            <div className={signedUpForNotifs ? 'success__message success__message--shown' : 'success__message'}>Thanks for subscribing to our Newsletter!</div>
                        </div>
                        <figure className="cta__img--wrapper">
                            <img src={WomenWithBags} alt="" className="cta__img" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;
