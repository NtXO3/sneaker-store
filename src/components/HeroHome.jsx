import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const HeroHome = () => {
    const [index, setIndex] = useState(0)
    const navigate = useNavigate()
    const timeoutRef = useRef(null)

    const delay = 3500

    const slideContent = [
        {
            title: 'The #1 Online Store to find your new pair of Kicks',
            button: 'Shop Now',
            img: 'https://static.sneakerjagers.com/news/nl/2019/07/555088-101-jordan-1-retro-og-chicago-2-1010x673.jpeg',
            link: '/collections'
        },
        {
            title: 'Over 1500 Sneakers for Men',
            button: 'Shop Men Collection',
            img: 'https://www.mensjournal.com/wp-content/uploads/2021/04/MensSneakersMain1.jpg?quality=86&strip=all',
            link: '/collections/men'
        },
        {
            title: 'Over 800 Sneakers for Women',
            button: 'Shop Women Collection',
            img: 'https://c4.wallpaperflare.com/wallpaper/975/463/764/women-converse-legs-rain-wallpaper-preview.jpg',
            link: '/collections/women'
        }
    ]

    function resetTimeout () {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() => 
            setIndex((prevIndex) => prevIndex === slideContent.length - 1 ? 0 : prevIndex + 1),
            delay
        );

        return () => {
            resetTimeout()
        }
    }, [index])

    return (
        <section id="hero__home">
            {/* <button className="slideshow__btn slideshow__left" ><FontAwesomeIcon icon={faAngleLeft} /></button>
            <button className="slideshow__btn slideshow__right"><FontAwesomeIcon icon={faAngleRight} /></button> */}
            <div className="slideshow__wrapper" style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}>
                {
                    slideContent.map((item, index) => (
                        <div className="hero__slideshow--frame" key={index}>
                            <div className="home__backdrop"></div>
                            <img src={item.img} alt="" className="home__slideshow--img" />
                            <div className="slideshow__description">
                                <h1 className="slideshow__title">{item.title}</h1>
                                <button className="btn hero__btn" onClick={() => navigate(item.link)}>{item.button}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="slideshow__indexes">
                {
                    slideContent.map((_, idx) => (
                        <button key={idx} className="slideshow__index--btn" id={idx === index && 'slideshow__index--active'} onClick={() => setIndex(idx)}></button>
                    ))
                }
            </div>
        </section>
    );
}

export default HeroHome;
