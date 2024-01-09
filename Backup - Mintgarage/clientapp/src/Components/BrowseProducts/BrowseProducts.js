// BrowseProducts.js
import React from 'react';

const BrowseProducts = () => {
  // Example data for product categories
  const productCategories = ['Storage Solutions', 'Workbenches', 'Lighting', 'Flooring', 'Decor'];

  return (
    <section className="browse-products-section">
      <h2>Browse Products</h2>

      {/* Product Categories */}
      <div className="product-categories">
        {productCategories.map((category, index) => (
          <div key={index} className="category-item">
            {category}
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>

      {/* Explore All Products CTA */}
      <button className="explore-button">Explore All Products</button>
    </section>
  );
}

export default BrowseProducts;
