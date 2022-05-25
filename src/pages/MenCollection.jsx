import React, { useState } from 'react';
import Collection from '../components/Collection';
import CollectionHeader from '../components/CollectionHeader';
import CollectionSideBar from '../components/CollectionSideBar'
import products from '../products';
import Sneaker from '../components/Sneaker';

const MenCollection = ({ products }) => {
    const initSneakers = products.filter(item => item.category === 'Men')
    const [sneakers, setSneakers] = useState(initSneakers)
    const [filteredBrands, setFilteredBrands] = useState('')

    return (
        <>
            <CollectionHeader 
                title='Heren Sneakers'
                para="Hier vind je de nieuwste en tofste herencollecties sneakers. Wij zorgen ervoor dat je er zoals altijd weer fris bij kan lopen met de nieuwste items!"
            />
            <main id="collection__body">
                <div className="container">
                    <div className="collection__row">
                        <CollectionSideBar sneakers={sneakers} setSneakers={setSneakers} filteredBrands={filteredBrands} setFilteredBrands={setFilteredBrands} />
                        <div className="sneakers">
                            {
                                sneakers.map(item => <Sneaker key={item.id} sneaker={item} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MenCollection;
