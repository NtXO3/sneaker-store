import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../App';

const Buy = ({ product, size }) => {
    const [quantity, setQuantity] = useState(1)

    const { cart, setCart, addToCart, toggleCart } = useContext(AppContext)

    function handleQuantity(dir) {
        if (dir === '+') {
            setQuantity(quantity + 1)
        }
        else {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        }
    }

    function handleInput(e) {
        setQuantity(parseInt(e.target.value))
    }

    return (
        <div className="product__quantity--wrapper">
            <div className="quantity__selector">
                <FontAwesomeIcon icon={faMinus} className='fa-minus quantity-btn' onClick={() => handleQuantity('-')}/>
                <FontAwesomeIcon icon={faPlus} className='fa-plus quantity-btn' onClick={() => handleQuantity('+')}/>
                <input type="number" className="product__quantity" value={quantity} min-value="1" onChange={handleInput}/>
            </div>
            <button className="add-to-cart__btn" onClick={(e) => {
                addToCart(product, quantity, size)
                toggleCart(e)
                }}><FontAwesomeIcon icon={faBasketShopping} />Add To Cart</button>
        </div>
    );
}

export default Buy;
