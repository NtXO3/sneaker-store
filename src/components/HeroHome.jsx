import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const HeroHome = () => {
    const [index, setIndex] = useState(0)

    const handleSlideshow = (dir) => {
        const { innerWidth: width } = window
        console.log(width)
        const slideshowEl = document.querySelector('.slideshow__wrapper')
        if (dir === 'right') {
            slideshowEl.scrollLeft = slideshowEl.scrollLeft + width
        }
        if (dir === 'left') {
            slideshowEl.scrollLeft = slideshowEl.scrollLeft - width
        }
    }

    return (
        <section id="hero__home">
            <button className="slideshow__btn slideshow__left" onClick={() => handleSlideshow('left')}><FontAwesomeIcon icon={faAngleLeft} /></button>
            <button className="slideshow__btn slideshow__right" onClick={() => handleSlideshow('right')}><FontAwesomeIcon icon={faAngleRight} /></button>
            <div className="slideshow__wrapper">
                <div className="hero__slideshow--frame">
                    <div className="home__backdrop"></div>
                    <img src='https://static.sneakerjagers.com/news/nl/2019/07/555088-101-jordan-1-retro-og-chicago-2-1010x673.jpeg' alt="" className="home__slideshow--img" />
                </div>
                <div className="hero__slideshow--frame">
                    <div className="home__backdrop"></div>
                    <img src='https://www.mensjournal.com/wp-content/uploads/2021/04/MensSneakersMain1.jpg?quality=86&strip=all' alt="" className="home__slideshow--img" />
                </div>
                <div className="hero__slideshow--frame">
                    <div className="home__backdrop"></div>
                    <img src='https://static.sneakerjagers.com/news/nl/2019/07/555088-101-jordan-1-retro-og-chicago-2-1010x673.jpeg' alt="" className="home__slideshow--img" />
                </div>
            </div>
        </section>
    );
}

export default HeroHome;
