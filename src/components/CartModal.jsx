import React, {useContext } from 'react';
import { AppContext } from '../App';
import products from '../products';

import CartModalItem from './CartModalItem';

const CartModal = () => {
    const { cart, setCart, addToCart, removeFromCart } = useContext(AppContext)
    return (    
        <div className='cart__modal' onClick={e => e.stopPropagation()}>
            <div className="modal__top">
                <h2 className="modal__title">Cart</h2>
            </div>
            <div className="modal__divider"></div>
            {
                cart.length > 0 ?
                cart.map(item => <CartModalItem key={item.id + item.size} product={item} /> )
                :
                <h3 className='empty__cart'>
                    Your Cart is empty
                </h3>
            }
            <button className="modal__btn">Checkout</button>
        </div>
    );
}

export default CartModal;
