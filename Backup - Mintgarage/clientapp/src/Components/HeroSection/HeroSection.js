// HeroSection.js
import React from 'react';
import Slider from 'react-slick'; // Assuming you are using react-slick for carousel
import { useAppContext } from './Contexts\AppContext.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSection.css';

const HeroSection = () => {
    const { basename } = useAppContext();
    // Example images for the carousel
    const carouselImages = [
        'path/to/image1.jpg',
        'path/to/image2.jpg',
        'path/to/image3.jpg',
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className="hero-section">
            <Slider {...settings}>
                {carouselImages.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Garage Renovation ${index + 1}`} />
                    </div>
                ))}
            </Slider>

            <div className="hero-content">
            <p>HeroSection Component - Basename: {basename}</p>
                {/* Headline */}
                <h1>Transform Your Garage with Our Expert Services</h1>

                {/* CTA Buttons */}
                <div className="cta-buttons">
                    <button>Browse Renovation Ideas</button>
                    <button>Explore Products</button>
                    <button>Book Services</button>
                    <button>Schedule Consultation</button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
