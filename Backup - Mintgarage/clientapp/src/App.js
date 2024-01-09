// App.js
import React from 'react';
import { AppProvider } from './Contexts/AppContext.js';
import Home from 'srcComponents/Home.js';  // Updated import path
import Footer from 'src/Components/Footer.js';  // Updated import path
import Header from 'src/Components/Header.js';  // Updated import path
import HeroSection from 'src/Components/HeroSection.js';  // Updated import path

const App = () => {
  return (
    <AppProvider>
      <Home />
      <Header />
      <HeroSection />
      <Footer />
    </AppProvider>
  );
}

export default App;
