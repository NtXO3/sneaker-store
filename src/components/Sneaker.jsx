import React from 'react';
import { Link } from 'react-router-dom';

const Sneaker = ({ sneaker }) => {
    return (
        <div className="sneaker__product">
            <Link to={`/sneakers/${sneaker.url}`}>
                <figure className="sneaker__img--wrapper">
                    <img src={sneaker.images[0]} alt="" className="sneaker__img" />
                </figure>
            </Link>
            <Link to={`/sneakers/${sneaker.url}`}><h3 className="sneaker__brand">{sneaker.brand}</h3></Link>
            <Link to={`/sneakers/${sneaker.url}`}><h2 className="sneaker__title">{sneaker.title}</h2></Link>
            {
                sneaker.salePrice ?
                <Link to={`/sneakers/${sneaker.url}`}><h3 className="sneaker__price">€{sneaker.salePrice} <span className="regular__price">€{sneaker.price}</span></h3></Link>
                :
                <Link to={`/sneakers/${sneaker.url}`}><h3 className="sneaker__price">€{sneaker.price}</h3></Link>
            }
            
        </div>
    );
}

export default Sneaker;
