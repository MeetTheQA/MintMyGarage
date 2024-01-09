// Footer.js
import React from 'react';
import { useAppContext } from './Contexts\AppContext.js';

const Footer = () => {
    const { basename } = useAppContext();
    return (
        <footer className="footer">
            {/* Navigation Links */}
            <div className="footer-links">
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
            </div>

            {/* Copyright Information */}
            <div className="copyright">
            <p>Footer Component - Basename: {basename}</p>
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>

            {/* Social Media Icons */}
            <div className="social-media-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
