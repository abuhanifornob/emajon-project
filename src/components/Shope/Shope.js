import React, { useEffect, useState } from 'react';
import { addToDb, getStoredData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shope.css'

const Shope = () => {
    const [products,setProducts]=useState([]);
    const[cart,setCart]=useState([]);
    useEffect(()=>{
       fetch('products.json')
       .then(res=>res.json())
       .then(data=>setProducts(data))

    },[])

   useEffect(()=>{
      const storedData=getStoredData();
      const savedData=[];
      for(const id in storedData){
        const findStoredData=products.find(product=> product.id===id);
        
        if(findStoredData){
           const quantity=storedData[id];
            findStoredData.quantity=quantity;
           savedData.push(findStoredData);
        }
      }
      setCart(savedData);
   },[products])
     
    const handAddToCart=(selectedProduct)=>{
        let newCart=[];
        const exsit=cart.find(product=> product.id===selectedProduct.id);
        if(!exsit){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct]
        }
        else{
            const rest =cart.filter(product=> product.id!==selectedProduct.id);
            exsit.quantity=exsit.quantity+1;
            newCart=[...rest,exsit]

        }

         
        setCart(newCart)
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
              
               {
                products.map(product=><Product 
                    product={product}
                     key={product.id}
                     handAddToCart={handAddToCart}
                     
                     ></Product>)
               }
               
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>    
            </div>
        </div>
    );
};

export default Shope;