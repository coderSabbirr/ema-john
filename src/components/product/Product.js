import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const {name,img,seller,price,stock} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h4  className="product-name">{name}</h4>
            <p><small>{seller}</small></p>
            <p>Price:${price}</p>
            <p><small>Only {stock} left in stock-order soon</small></p>
            <button className="btn-regular" onClick={() => props.handalAddCart(props.product)}>{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;