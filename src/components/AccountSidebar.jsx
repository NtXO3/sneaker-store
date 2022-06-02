import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faBagShopping, faAddressCard, faBookmark } from '@fortawesome/free-solid-svg-icons';

const AccountSidebar = ({ path }) => {
    let navigate = useNavigate()
    return (
        <aside id='account__sidebar'>
            <div className="account__sidebar--wrapper">
                <h1 className="sidebar__title">Mijn Account</h1>
                <div className="account__divider"></div>
                <button className="account__sidebar--link" id={path === '/account/wishlist' ? 'selected-account' : ''} onClick={() => navigate('/account/wishlist')}><FontAwesomeIcon icon={faBookmark} />&nbsp;&nbsp;Opgeslagen Sneakers</button>
                <button className="account__sidebar--link" id={path === '/account/orders' ? 'selected-account' : ''} onClick={() => navigate('/account/orders')}><FontAwesomeIcon icon={faBagShopping} />&nbsp;&nbsp;Bestellingen</button>
                <button className="account__sidebar--link" id={path === '/account/adresses' ? 'selected-account' : ''} onClick={() => navigate('/account/adresses')}><FontAwesomeIcon icon={faAddressCard} />&nbsp;&nbsp;Adressen</button>
                <button className="account__sidebar--link" id={path === '/account/settings' ? 'selected-account' : ''} onClick={() => navigate('/account/settings')}><FontAwesomeIcon icon={faGear} />&nbsp;&nbsp;Settings</button>
            </div>
        </aside>
    );
}

export default AccountSidebar;
