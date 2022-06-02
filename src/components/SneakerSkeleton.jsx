import React from 'react';

const SneakerSkeleton = () => {
    return (
        <div className="sneaker__product--skeleton">
            <div className="sneaker__img--skeleton"></div>
            <h3 className="sneaker__brand--skeleton"></h3>
            <div className="sneaker__title--skeleton"></div>
            <div className="sneaker__price--skeleton"></div>
        </div>
    );
}

export default SneakerSkeleton;
