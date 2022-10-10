import React from 'react';
import { getSummiton } from '../../utilities/objectSummition';
import './Cart.css';

const Cart = ({cart}) => {
   let totalPrice=0;
   let totalShippingCharge=0;
   let totalQuantity=0;
   for(const product of cart){
       totalPrice +=(product.price)*product.quantity;
       totalShippingCharge +=product.shipping;
       totalQuantity +=product.quantity;

   }
   const tax=parseFloat((totalPrice*0.10).toFixed(2));
   const grantTotal=totalPrice+totalShippingCharge+tax;


    return (
        <div className='cart'>
             <p className='order-summary'>Order Summary</p>
             <div className='cart-info'>
             <p>Selected Items : {totalQuantity}</p>
             <p>Total Price : ${totalPrice}</p>
             <p>Total Shipping Charge : ${totalShippingCharge}</p>
             <p>Tax : ${tax}</p>
             <h3>Grant Total : ${grantTotal}</h3>
             </div>
            
            
        </div>
    );
};

export default Cart;