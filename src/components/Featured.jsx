import React, { useState } from 'react';
import products from '../products';
import Sneaker from './Sneaker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Featured = () => {
    const [sneakers, setSneakers] = useState(products)

    const handleSlideshow = (dir) => {
        const slideshowEl = document.querySelector('.featured__sneakers')
        if (dir === 'right') {
            slideshowEl.scrollLeft = slideshowEl.scrollLeft + 540
        }
        if (dir === 'left') {
            slideshowEl.scrollLeft = slideshowEl.scrollLeft - 500
        }
    }

    return (
        <section id="featured__sneakers">
            <div className="container">
                <div className="row">
                    <h1 className="section__title">Onze <span className="orange">Sneakers</span> </h1>
                    <div className="featured__sneakers--wrapper">
                        <button className="slideshow__btn slideshow__left" onClick={() => handleSlideshow('left')}><FontAwesomeIcon icon={faAngleLeft} /></button>
                        <button className="slideshow__btn slideshow__right" onClick={() => handleSlideshow('right')}><FontAwesomeIcon icon={faAngleRight} /></button>
                        <div className="featured__sneakers">
                            {
                                sneakers.map(item => <Sneaker key={item.id} sneaker={item} slider={true} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
