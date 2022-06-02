import React, { useState } from 'react';
import Logo from '../assets/logo.svg'
import UserAvatar from '../assets/image-avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import CartModal from './CartModal';
import { Link } from 'react-router-dom';
import { UserAuth } from '../AuthContext';
import Register from './Register';
import { useNavigate } from 'react-router-dom';
import NavAccount from './NavAccount';

const Nav = ({ setCartOpen, cartOpen, toggleCart, closeModal }) => {
    const { user, signUp, logIn, logOut} = UserAuth()
    let navigate = useNavigate()

    return (
        <nav>
            <div className="nav__container">
                <ul className="nav__links">
                    <li className="nav__link">
                        <Link to='/'>
                            <img src={Logo} alt="" className="nav__logo" />
                        </Link>
                    </li>
                    <li className="nav__link">
                        <Link to='/collections'><a className="nav__anchor">Collections</a></Link>
                    </li>
                    <li className="nav__link">
                        <Link to='/collections/men'><a className="nav__anchor">Men</a></Link>
                    </li>
                    <li className="nav__link">
                        <Link to='/collections/women'><a className="nav__anchor">Women</a></Link>
                    </li>
                    <li className="nav__link">
                        <Link to='/about'><a className="nav__anchor">About</a></Link>
                    </li>
                    <li className="nav__link">
                        <Link to='/contact'><a className="nav__anchor">Contact</a></Link>
                    </li>
                </ul>
                <div className="nav__right">
                    <div className="cart--wrapper">
                        <button className="cart__toggle" onClick={toggleCart}>
                            <FontAwesomeIcon icon={faBasketShopping} />
                        </button>
                        {
                            cartOpen ?
                            <CartModal />
                            :
                            <></>
                        }
                    </div>
                    <div className="nav__account">
                        {
                            user?.email ?
                            <NavAccount />
                            :
                            <>
                                <Register />
                            </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
