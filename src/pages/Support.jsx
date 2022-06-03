import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

const Support = () => {
    return (
        <>
        <header id="support__header">
            <div className="container">
                <div className="row about__row">
                    <div className="support__top--wrapper">
                        <img src="https://cdn.webshopapp.com/shops/176120/themes/171203/v/1633/assets/service-banner.jpg?20220525102800?20200422131816" alt="" className="support__top--img" />
                        <div className="support__top--backdrop"></div>
                        <h1 className="support__top--title">Klantenservice</h1>
                    </div>
                    <h1 className="support__title">Sneakers - De <span className="orange">#1 Retailer</span> in Sneakers</h1>
                    <p className="support__top--para">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ea maxime consequuntur sequi debitis, cum quae, culpa aliquam dolore, quas amet. Pariatur sequi deserunt vero. Quos debitis vero alias repellat?
                    </p>
                </div>
            </div>
        </header>
        <About />
        <Contact />
        <FAQ />
        </>
    );
}

export default Support;
