import React from 'react';
import Sneaker from './Sneaker';

const Recommended = ({ products, currProduct}) => {
    return (
        <section id="recommended">
            <div className="container">
                <div className="row recommended__row">
                    <h1 className="section__title">Aanbevolen Sneakers <span className="orange">Voor Jou</span> </h1>
                    <div className="recommended__sneakers">
                        {
                            products.slice().filter(item => item.category === currProduct.category || 'Unsiex').filter(item => item.price < currProduct.price + 50).slice(0, 4).map(item => <Sneaker key={item.id} sneaker={item} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Recommended;
