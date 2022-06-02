import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

const CartModalItem = ({product}) => {
    const { cart, setCart, addToCart, removeFromCart } = useContext(AppContext)
    return (
        <div className="cart__modal--items">
            <div className="cart__item">
                <Link to={`/sneakers/${product.url}`} ><img src={product.images[0]} alt="" className="cart__img" /></Link>
                <div className="cart__item--info">
                    <Link to={`/sneakers/${product.url}`} ><h3 className="cart__title">{product.title}</h3></Link>
                    <Link to={`/sneakers/${product.url}`} >
                        <h3 className="cart__size">Size: EU {product.size} {product.category}</h3>
                    </Link>
                    <h3 className="cart__total">
                        €{product.salePrice ? product.salePrice : product.price} x {product.quantity} <span className="total__price">€{((product.salePrice ? product.salePrice : product.price) * product.quantity).toFixed(2)}</span>
                    </h3>
                </div>
                <button className="cart__delete" onClick={() => removeFromCart(product.id, product.size)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}

export default CartModalItem;
