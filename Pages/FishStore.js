import React from 'react';
import './FishStore.css';
import pomfretImg from '../assets/pomfret.png';
import soleImg from '../assets/sole.png';
import catlaImg from '../assets/catla.png';  // Corrected image path
import fishbg from '../assets/fish.jpg';

const FishStore = () => {
  const handleSortChange = (event) => {
    alert('Selected: ' + event.target.value);
};

  return (
    <div>
      {/* Header with background image */}
      <div className="header" style={{ backgroundImage: `url(${fishbg})` }}>
        <h1>FISH</h1>
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
              <img src={pomfretImg} alt="Pomfret" />
              <div className="card-body">
                <strong>Pomfret</strong>
                <span>₹600</span>
              </div>
            </div>

            {/* Tulip */}
            <div className="card">
              <div className="discount-badge">-8.82%</div>
              <img src={soleImg} alt="Sole" />
              <div className="card-body">
                <strong>Sole</strong>
                <span>
                  <span className="original-price">₹400</span> ₹385
                </span>
              </div>
            </div>

            {/* Mogra */}
            <div className="card">
              <div className="discount-badge">-0.62%</div>
              <img src={catlaImg} alt="Catla" />
              <div className="quick-view">Quick View</div>
              <div className="card-body">
                <strong>Catla</strong>
                <span>
                  <span className="original-price">₹290</span> ₹280
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishStore;
