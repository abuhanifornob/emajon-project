import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
      <ul className='header'>
        <img src={logo} alt="" />
        <div>
            <a href="/Order">Order</a>
            <a href="/OrderReview">Order Review</a>
            <a href="/ManageInventory">Manage Inventory</a>
            <a href="/Login">Login</a>
        </div>
      </ul>
    );
};

export default Header;