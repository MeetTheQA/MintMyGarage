// BookServices.js
import React from 'react';

const BookServices = () => {
    return (
        <section className="book-services-section">
            <h2>Book Renovation Services</h2>

            {/* Introduction */}
            <p>Professional Renovation Services at Your Fingertips</p>

            {/* Steps to Book Services */}
            <div className="booking-steps">
                <div className="step">
                    <h3>1. Browse Services</h3>
                    <p>Explore our range of renovation services.</p>
                </div>
                <div className="step">
                    <h3>2. Select a Service</h3>
                    <p>Choose the renovation service that suits your needs.</p>
                </div>
                <div className="step">
                    <h3>3. Choose a Date and Time</h3>
                    <p>Select a convenient date and time for the service.</p>
                </div>
            </div>

            {/* Booking CTA Button */}
            <button className="booking-button">Book Renovation Services Now</button>
        </section>
    );
}

export default BookServices;
