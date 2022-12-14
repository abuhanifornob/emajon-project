import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Product.css';

const Product = ({product,handAddToCart}) => {
    // const {product,handAddToCart}=props;
    const {name,price,ratings,seller,img}=product;
  
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price:${price}</p>
            
            <p><small>Manufacturer : {seller}</small></p>
            <p><small>Rating : {ratings} start</small></p>
            </div>
            
            <button onClick={()=>handAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                 <FontAwesomeIcon icon={faShoppingCart} className="cart-icon"></FontAwesomeIcon>

                </button>
        </div>
    );
};

export default Product;