// ContactInformation.js
import React from 'react';

const ContactInformation = () => {
    return (
        <section className="contact-information-section">
            <h2>Contact Information</h2>

            {/* Contact Form */}
            <div className="contact-form">
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* Customer Support Details */}
            <div className="customer-support">
                <h3>Customer Support</h3>
                <p>Email: support@example.com</p>
                <p>Phone: +1 123-456-7890</p>
            </div>

            {/* Social Media Links */}
            <div className="social-media">
                <h3>Connect with Us</h3>
                <ul>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
        </section>
    );
}

export default ContactInformation;
