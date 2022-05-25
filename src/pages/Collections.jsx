import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
    return (
        <main id="collections__hero">
            <div className="hero__half">
                <Link to='/collections/men'>
                    <img src="https://cdn.luxe.digital/media/2019/12/16162219/best-men-online-shopping-mr-porter-menswear-style-luxe-digital.jpg" alt="" className="hero__img" />
                    <div className="hero__backdrop"></div>
                    <div className="hero__inside">  
                        <h1 className='hero__title'>Browse Men Collection</h1>
                        <button className="btn hero__btn">Browse Men Sneakers</button>
                    </div>
                </Link>
            </div>
            <div className="hero__half">
                <Link to='/collections/women'>
                    <img src="https://image-cdn.hypb.st/https%3A%2F%2Fbae.hypebeast.com%2Ffiles%2F2018%2F01%2Fmaha-amsterdam-womens-sneaker-store-interview-7.jpg?w=1600&cbr=1&q=90&fit=max" alt="" className="hero__img" />
                    <div className="hero__backdrop"></div>
                    <div className="hero__inside inside__left">  
                        <h1 className='hero__title'>Browse Women Collection</h1>
                        <button className="btn hero__btn">Browse Women Sneakers</button>
                    </div>
                </Link>
            </div>
        </main>
    );
}

export default Collections;
