import React, { useState, useEffect } from 'react';
import FAQ from '../components/FAQ';
import ProductSize from '../components/ProductSize';
import ProductThumbnail from '../components/ProductThumbnail';
import { useParams } from 'react-router-dom';
import Buy from '../components/Buy';
import Recommended from '../components/Recommended';

const ProductPage = ({ products, id }) => {
    const { url } = useParams()
    const product = products.find(elem => elem.url === url)
    const [mainImg, setMainImg] = useState(product.images[0])
    const [size, setSize] = useState(39)

    useEffect(() => {
        setMainImg(product.images[0])
    }, [product])

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
