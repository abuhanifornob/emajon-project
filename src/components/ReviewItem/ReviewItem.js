import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'; 
import "./ReviewItem.css"

const ReviewItem = ({product,handelRemoveItem}) => {
    const {id,name,img,price,quantity}=product;
    console.log(product);
    return (
        <div className='container'>
            <div className='review-product-img'>
                <img src={img} alt="" />
            </div>
            <div className='review-product-details-contaner'>
                <div className='product-details'>
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='product-button'>
                    <button onClick={()=>handelRemoveItem(id)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;