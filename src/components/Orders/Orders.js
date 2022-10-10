import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products,initialData}=useLoaderData();   //return { products, initialData };
    const [carts,setCarts]=useState(initialData);

    const handelRemoveItem=(id)=>{
           const actualProduct=carts.filter(product=> product.id !==id);
           setCarts(actualProduct);
           removeFromDb(id);
    }
 

    return (
        <div className='shop-container'>
            <div className="review-product-container">
              
               {
                carts.map(product=> <ReviewItem
                 key={product.id}
                 product={product}
                 handelRemoveItem={handelRemoveItem}
                ></ReviewItem>)
               }
               
            </div>
            <div className="cart-container">
                <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Orders;