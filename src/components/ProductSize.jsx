import React from 'react';

const ProductSize = ({ size, selected, setSize }) => {
    let selectedStyle = ''
    if (selected) {
        selectedStyle = 'size-selected'
    }

    const handleClick = (e) => {
        const sizeNum = e.target.textContent.slice(3)
        setSize(+sizeNum)
    }

    return (
        <button className="product__size" id={selectedStyle} onClick={handleClick}>
            EU {size}
        </button>
    );
}

export default ProductSize;
