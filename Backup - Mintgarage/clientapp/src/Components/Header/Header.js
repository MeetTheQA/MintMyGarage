// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAppContext } from './Contexts\AppContext.js';

const Header = () => {
    const { basename } = useAppContext();
    
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Your Logo</Link>
                <p>Header Component - Basename: {basename}</p>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ideas">Browse Ideas</Link></li>
                    <li><Link to="/products">Browse Products</Link></li>
                    <li><Link to="/services">Book Services</Link></li>
                    <li><Link to="/consultation">Book Consultation</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
