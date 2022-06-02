import React, { useEffect, useState } from 'react';
import Sneaker from './Sneaker';
import { onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase'
import { UserAuth } from '../AuthContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const [userWishlist, setUserWishlist] = useState([])
    const [savedSneakers, setSavedSneakers] = useState([])
    const { user } = UserAuth()

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setUserWishlist(doc.data()?.savedSneakers)
        })
    }, [user?.email])

    useEffect(() => {
        setSavedSneakers(userWishlist)
    }, [userWishlist])

    return (
        <>
        <div className="wishlist">
            <h1 className="account__title">Wishlist</h1>
            <div className="account__divider"></div>
            <div className="sneakers sneakers__wishlist">
                {
                    userWishlist?.map(sneaker => (
                        <div className="sneaker__product sneaker__wishlist">
                            <Link to={`/sneakers/${sneaker.url}`}>
                                <figure className="sneaker__img--wrapper">
                                    <img src={sneaker.img} alt="" className="sneaker__img" />
                                </figure>
                            </Link>
                            <Link to={`/sneakers/${sneaker.url}`}><h3 className="sneaker__brand">{sneaker.brand}</h3></Link>
                            <Link to={`/sneakers/${sneaker.url}`}><h2 className="sneaker__title">{sneaker.title}</h2></Link>
                            {
                                sneaker.salePrice ?
                                <Link to={`/sneakers/${sneaker.url}`}><h3 className="sneaker__price">€{sneaker.salePrice} <span className="regular__price">€{sneaker.price}</span></h3></Link>
                                :
                                <Link to={`/sneakers/${sneaker.url}`}><h3 className="sneaker__price">€{sneaker.price}</h3></Link>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    );
}

export default Wishlist;
