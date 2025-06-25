import React from 'react';
import './GrainsStore.css';
import jwariImg from '../assets/jwari2.png';
import cornImg from '../assets/corn.png';
import bajraImg from '../assets/bajra.png';  // Corrected image path
import grainsBg from '../assets/grain.jpg';

const GrainsStore = () => {
  const handleSortChange = (event) => {
    alert('Selected: ' + event.target.value);
};

  return (
    <div>
      {/* Header with background image */}
      <div className="header" style={{ backgroundImage: `url(${grainsBg})` }}>
        <h1>GRAINS</h1>
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
              <img src={jwariImg} alt="Jwari" />
              <div className="card-body">
                <strong>Jwari</strong>
                <span>₹190</span>
              </div>
            </div>

            {/* Tulip */}
            <div className="card">
              <div className="discount-badge">-8.82%</div>
              <img src={cornImg} alt="Corn" />
              <div className="card-body">
                <strong>Corn</strong>
                <span>
                  <span className="original-price">₹120</span> ₹115
                </span>
              </div>
            </div>

            {/* Mogra */}
            <div className="card">
              <div className="discount-badge">-0.62%</div>
              <img src={bajraImg} alt="Bajra" />
              <div className="quick-view">Quick View</div>
              <div className="card-body">
                <strong>Bajra</strong>
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

export default GrainsStore;
