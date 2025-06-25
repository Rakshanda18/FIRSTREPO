import React from 'react';
import './FlowerStore.css';
import lotusImg from '../assets/lotus.png';
import tulipImg from '../assets/tulip.png';
import mograImg from '../assets/mogra.png';  // Corrected image path
import flowersBg from '../assets/rose.jpg';

const FlowerStore = () => {
  const handleSortChange = (event) => {
    alert('Selected: ' + event.target.value);
  };

  return (
    <div>
      {/* Header with background image */}
      <div className="header" style={{ backgroundImage: `url(${flowersBg})` }}>
        <h1>FLOWERS</h1>
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
              <img src={lotusImg} alt="Lotus" />
              <div className="card-body">
                <strong>Lotus</strong>
                <span>₹80</span>
              </div>
            </div>

            {/* Tulip */}
            <div className="card">
              <div className="discount-badge">-8.82%</div>
              <img src={tulipImg} alt="Tulip" />
              <div className="card-body">
                <strong>Tulip</strong>
                <span>
                  <span className="original-price">₹68</span> ₹62
                </span>
              </div>
            </div>

            {/* Mogra */}
            <div className="card">
              <div className="discount-badge">-0.62%</div>
              <img src={mograImg} alt="Mogra" />
              <div className="quick-view">Quick View</div>
              <div className="card-body">
                <strong>Mogra</strong>
                <span>
                  <span className="original-price">₹160</span> ₹159
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerStore;
