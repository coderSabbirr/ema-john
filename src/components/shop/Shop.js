import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const[products,setProducts] =useState([]);
    const [cart,setCart] =useState([]);

    useEffect(() =>{
     fetch('./products.JSON')
     .then(res => res.json())
     .then(data => setProducts(data))
    },[])
    const handalAddCart =(product) => {
        const newCart =[...cart ,product]
        setCart(newCart)
        console.log(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-countainer">
                <h3>Products:{products.length}</h3>
                {
                    products.map(product => <Product 
                        key={product.key}
                        product={product}
                        handalAddCart={handalAddCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-countainer">
             <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;