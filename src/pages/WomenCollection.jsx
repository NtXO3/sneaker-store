import React, { useState, useEffect } from 'react';
import CollectionHeader from '../components/CollectionHeader';
import CollectionSideBar from '../components/CollectionSideBar';
import Sneaker from '../components/Sneaker';
import SneakerSkeleton from '../components/SneakerSkeleton';
import products from '../products';

const WomenCollection = () => {
    const initSneakers = products.filter(item => item.category === 'Women' || item.category === 'Unisex')
    const [sneakers, setSneakers] = useState(initSneakers)
    const [filteredBrands, setFilteredBrands] = useState('')

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 150)
    }, [])

    return (
        <>
            <CollectionHeader 
                title='Vrouwen Sneakers'
                para="Hier vind je de nieuwste en tofste vrouwencollecties sneakers. Wij zorgen ervoor dat je er zoals altijd weer fris bij kan lopen met de nieuwste items!"
            />
            <main id="collection__body">
                <div className="container">
                    <div className="collection__row">
                        <CollectionSideBar sneakers={sneakers} setSneakers={setSneakers} filteredBrands={filteredBrands} setFilteredBrands={setFilteredBrands} category='Women' />
                        <div className="sneakers">
                            {
                                isLoading ?
                                new Array(10).fill(0).map((_, index) => <SneakerSkeleton key={index} />)
                                :
                                sneakers.map(item => <Sneaker key={item.id} sneaker={item} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default WomenCollection;
