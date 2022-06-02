import React, { useState, useEffect} from 'react';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import AccountSidebar from '../components/AccountSidebar';
import Settings from '../components/Settings';
import Wishlist from '../components/Wishlist';

const Account = () => {
    const { pathname } = useLocation()
    const [ currentPath, setCurrentPath ] = useState('')

    useEffect(() => {
        setCurrentPath(pathname)
    }, [pathname])
    
    return (
        <section id="account-page">
            <div className="container">
                <div className="collection__row account__row">
                    <AccountSidebar path={currentPath} />
                    <Routes>
                        <Route path='/wishlist' element={<Wishlist />} />
                        <Route path='/orders' element={<Wishlist />} />
                        <Route path='/adresses' element={<Wishlist />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </section>
    );
}

export default Account;
