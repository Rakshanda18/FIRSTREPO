import React from 'react';
import './MilkProductsStore.css';
import paneerImg from '../assets/paneer.png';
import milkImg from '../assets/milk2.png';
import gheeImg from '../assets/ghee.png';  // Corrected image path
import milkbg from '../assets/milk.jpg';

const MilkProductsStore = () => {
  const handleSortChange = (event) => {
    alert('Selected: ' + event.target.value);
};

  return (
    <div>
      {/* Header with background image */}
      <div className="header" style={{ backgroundImage: `url(${milkbg})` }}>
        <h1>DAIRY</h1>
        <div className="underline"></div>
      </div>

      {/* Main Section */}
      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="breadcrumbs">
            <a href="/home">Home</a> / <a href="/store">Store</a> / <span>Flowers</span>
          </div>
          <h2> Filters</h2>
          <div className="filter-section">
            <div className="filter-title">Price</div>
            <div className="filter-options">
              <button className="link-button" onClick={() => alert('Filter: Under ₹70')}>Under ₹70 (2)</button>
              <button className="link-button" onClick={() => alert('Filter: ₹131 & Above')}>₹131 & Above (1)</button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="top-bar">
            <select id="sortBy" onChange={handleSortChange}>
              <option>Sort By</option>
              <option>Price, Low to High</option>
              <option>Price, High to Low</option>
            </select>
          </div>

          <div className="product-grid">
            {/* Lotus */}
            <div className="card">
              <img src={paneerImg} alt="paneer" />
              <div className="card-body">
                <strong>Paneer</strong>
                <span>₹150</span>
              </div>
            </div>

            {/* Tulip */}
            <div className="card">
              <div className="discount-badge">-8.82%</div>
              <img src={milkImg} alt="milk" />
              <div className="card-body">
                <strong>Milk</strong>
                <span>
                  <span className="original-price">₹50</span> ₹48
                </span>
              </div>
            </div>

            {/* Mogra */}
            <div className="card">
              <div className="discount-badge">-0.62%</div>
              <img src={gheeImg} alt="ghee" />
              <div className="quick-view">Quick View</div>
              <div className="card-body">
                <strong>Ghee</strong>
                <span>
                  <span className="original-price">₹500</span> ₹499
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilkProductsStore;
