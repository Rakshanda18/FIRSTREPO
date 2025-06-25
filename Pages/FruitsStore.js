import React from 'react';
import './FruitsStore.css';
import bananaImg from '../assets/banana.png';  // Correct image import
import guavaImg from '../assets/Guava.png';    // Correct image import
import pomegranateImg from '../assets/pome.png'; // Correct image import
import fruitsBg from '../assets/fruits.jpg';   // Correct background image import

const FruitStore = () => {
  const handleSortChange = (event) => {
    alert('Selected: ' + event.target.value);
  };

  return (
    <div>
      {/* Header with background image */}
      <div className="header" style={{ backgroundImage: `url(${fruitsBg})` }}>
        <h1>FRUITS</h1>
        <div className="underline"></div>
      </div>

      {/* Main Section */}
      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="breadcrumbs">
            <a href="/home">Home</a> / <a href="/store">Store</a> / <span>Fruits</span>
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
            {/* Banana */}
            <div className="card">
              <img src={bananaImg} alt="Banana" />
              <div className="card-body">
                <strong>Banana</strong>
                <span>₹50</span>
              </div>
            </div>

            {/* Guava */}
            <div className="card">
              <div className="discount-badge">-8.82%</div>
              <img src={guavaImg} alt="Guava" />
              <div className="card-body">
                <strong>Guava</strong>
                <span>
                  <span className="original-price">₹68</span> ₹62
                </span>
              </div>
            </div>

            {/* Pomegranate */}
            <div className="card">
              <div className="discount-badge">-0.62%</div>
              <img src={pomegranateImg} alt="Pomegranate" />
              <div className="quick-view">Quick View</div>
              <div className="card-body">
                <strong>Pomegranate</strong>
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

export default FruitStore;
