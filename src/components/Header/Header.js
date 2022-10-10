import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
      <ul className='header'>
        <img src={logo} alt="" />
        <div>
            <Link to="/">Order</Link>
            <Link to="orders">Order Review</Link>
            <Link to="inventory">Manage Inventory</Link>
            <Link to="/Login">Login</Link>
        </div>
      </ul>
    );
};

export default Header;