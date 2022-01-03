import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className='header-area'>
            <img src={logo} alt="hello" />
            <nav>
                <a href="/shop">ShopOrder</a>
                <a href="/review">ReviewManage</a>
                <a href="/manage">Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;