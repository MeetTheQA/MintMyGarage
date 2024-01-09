// Home.js
import React from 'react';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import FeaturedIdeas from '../FeaturedIdeas/FeaturedIdeas';
import BrowseProducts from '../BrowseProducts/BrowseProducts';
import BookServices from '../BookServices/BookServices';
import ContactInformation from '../ContactInformation/ContactInformation';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <FeaturedIdeas />
            <BrowseProducts />
            <BookServices />
            <ContactInformation />
            <Footer />
        </div>
    );
}

export default Home;
