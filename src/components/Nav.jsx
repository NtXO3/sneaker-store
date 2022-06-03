import React, { useState } from 'react';
import { Drawer } from '@mantine/core';
import Logo from '../assets/logo.svg'
import UserAvatar from '../assets/image-avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
    const [opened, setOpened] = useState(false)

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
                        <Link to='/support'><a className="nav__anchor">Support</a></Link>
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
                <button className="menu__btn" onClick={() => setOpened(true)}><FontAwesomeIcon icon={faBars} /></button>
                <img src={Logo} alt="" className="nav__logo nav__logo--mobile" />
                <div className="cart--wrapper mobile__cart">
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
            </div>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                padding="xl"
                size='67%'
                title={<img src={Logo} alt="" className="nav__logo" />}
            >
                <div className="mobile__drawer--inside">
                    <div className="mobile__links">
                        <Link to='/' className='nav__anchor nav__anchor--mobile' onClick={() => setOpened(false)}>Home</Link>
                        <Link to='/collections' className='nav__anchor nav__anchor--mobile' onClick={() => setOpened(false)}>Collections</Link>
                        <Link to='/collections/men' className='nav__anchor nav__anchor--mobile' onClick={() => setOpened(false)} >Men</Link>
                        <Link to='/collections/women' className='nav__anchor nav__anchor--mobile' onClick={() => setOpened(false)}>Women</Link>
                        <Link to='/collections/about' className='nav__anchor nav__anchor--mobile' onClick={() => setOpened(false)}>About</Link>
                        <Link to='/collections/contact' className='nav__anchor nav__anchor--mobile' onClick={() => setOpened(false)}>Contact</Link>
                    </div>
                    <div className="mobile__buttons">
                    {
                        user?.email ?
                        <>
                        <button className="btn mobile__menu--btn" onClick={() => {
                            setOpened(false)
                            navigate('/account')
                        }}>Account</button>
                        <button className="secondary__btn" onClick={async () => {
                            setOpened(false)
                            await logOut()
                        }}>Log Out</button>
                        </>
                        :
                        <>
                            <div className="mobile__auth">
                                <Register />
                            </div>
                        </>
                    }
                    </div>
                </div>
            </Drawer>
        </nav>
    );
}

export default Nav;
