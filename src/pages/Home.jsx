import React, { useEffect } from 'react';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Featured from '../components/Featured';
import HeroHome from '../components/HeroHome';
import Collections from './Collections';

const Home = () => {

    const animationElements = document.getElementsByClassName('row')
    const appearOptions = {}

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            }
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
        })
    }, appearOptions)

    useEffect(() => {
        console.log(animationElements)
        Array.from(animationElements).forEach(elem => {
            appearOnScroll.observe(elem)
        })

    }, [animationElements])
    

    return (
        <>
            <HeroHome />
            <section id="brands">
                <div className="container">
                    <div className="row">
                        <div className="brands__imgs--wrapper">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="" className="brand__img" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" alt="" className="brand__img" />
                            <img src="https://www.svgrepo.com/show/303470/puma-logo-logo.svg" alt="" className="brand__img" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Vans_company_logo.svg" alt="" className="brand__img" />
                            <img src="https://logosarchive.com/wp-content/uploads/2021/12/Yeezy-logo.svg" alt="" className="brand__img" />
                        </div>
                    </div>
                </div>
            </section>
            <Featured />
            <CTA />
        </>
    );
}

export default Home;
