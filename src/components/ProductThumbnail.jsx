import React from 'react';

const ProductThumbnail = ({ image, selected, setMainImg }) => {
    let selectedStyle = ''
    if (selected) {
        selectedStyle = 'selected'
    }

    function handleClick(e) {
        setMainImg(e.target.src)
    }

    return (
        <figure className="product__thumbnail--figure" id={selectedStyle}>
            <img src={image} alt="" className="product__thumbnail" onClick={handleClick}/>
        </figure>
    );
}

export default ProductThumbnail;
