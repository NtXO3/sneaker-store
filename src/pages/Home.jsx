import React from 'react';
import FAQ from '../components/FAQ';
import Featured from '../components/Featured';
import HeroHome from '../components/HeroHome';
import Collections from './Collections';

const Home = () => {
    return (
        <>
            <HeroHome />
            <Featured />
            <FAQ />
        </>
    );
}

export default Home;
