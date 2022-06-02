import React, { useState, useEffect } from 'react';
import FAQ from '../components/FAQ';
import ProductSize from '../components/ProductSize';
import ProductThumbnail from '../components/ProductThumbnail';
import { useParams } from 'react-router-dom';
import Buy from '../components/Buy';
import Recommended from '../components/Recommended';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { UserAuth } from '../AuthContext';
import { doc, arrayUnion, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const ProductPage = ({ products, id }) => {
    const { url } = useParams()
    const product = products.find(elem => elem.url === url)
    const [mainImg, setMainImg] = useState(product.images[0])
    const [size, setSize] = useState(39)
    const [saved, setSaved] = useState(false)
    const [userWishlist, setUserWishlist] = useState([])

    const { user } = UserAuth()

    useEffect(() => {
        setMainImg(product.images[0])
    }, [product])

    const ref = doc(db, 'users', `${user?.email}`)

    const saveSneaker = async () => {
        if (user?.email) {
            setSaved(true)
            await updateDoc(ref, {
                savedSneakers: arrayUnion({
                    id: product.id,
                    brand: product.brand,
                    title: product.title,
                    img: product.images[0],
                    price: product.price,
                    salePrice: product.salePrice,
                    url: product.url
                })
            })
        } else {
            alert('Maak een account aan om een product op te slaan')
        }
    }

    const deleteSneaker = async (passedId) => {
        try {
            const result = userWishlist.filter(item => item.id !== passedId)
            await updateDoc(ref, {
                savedSneakers: result
            })
            setSaved(false)
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setUserWishlist(doc.data()?.savedSneakers)
        })
    }, [user?.email])

    useEffect(() => {
        console.log(userWishlist)
        for (let i = 0; i < userWishlist.length; ++i) {
            if (userWishlist[i].id === product.id) {
                return setSaved(true)
            } else {
                setSaved(false)
            }
        }
    }, [userWishlist, product])

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="product__wrapper">
                        <div className="product__imgs--wrapper">
                            <figure className="product__img--main">
                                <img src={mainImg} alt="" className="product__img" />
                            </figure>
                            <div className="product__thumbnails">
                                {
                                    product.images.map((img, index) => <ProductThumbnail setMainImg={setMainImg} image={img} selected={img === mainImg}/>)
                                }
                            </div>
                        </div>
                        <div className="product__description">
                            <h4 className="product__sub-title">SNEAKER COMPANY</h4>
                            <h1 className="product__title">{product.title}</h1>
                            <h3 className="product__category">Category: {product.category}</h3>
                            <p className="product__para">
                                {product.description}
                            </p>
                            
                                {
                                    saved ?
                                    <div className="product__save" onClick={() => deleteSneaker(product.id)}><FontAwesomeIcon icon={faHeart} /><span>&nbsp;Verwijderen uit account</span></div>
                                    :
                                    <div className="product__save" onClick={saveSneaker}><FontAwesomeIcon icon={farHeart} /><span>&nbsp;Opslaan in account</span></div>
                                }
                                
                            
                            <div className="product__price--wrapper">
                                {
                                    product.salePrice ?
                                    <>
                                        <h1 className="product__price">€{product.salePrice}
                                            <span className="product__discount">-{Math.floor(100 - (product.salePrice / product.price) * 100)}%</span>
                                        </h1>
                                        <span className="regular__price">€{product.price}</span>
                                    </>
                                    :
                                    <>
                                        <h1 className="product__price">€{product.price}</h1>
                                    </>
                                }
                            </div>
                            <div className="product__size--wrapper">
                                {
                                    product.sizes.map((elem, index) => <ProductSize setSize={setSize} size={elem} selected={elem === size && true} />)
                                }
                            </div>
                            <Buy product={product} size={size}/>
                        </div>
                    </div>
                </div>
            </div>
            <Recommended products={products} currProduct={product} />
            <FAQ />
        </main>
    );
}

export default ProductPage;
