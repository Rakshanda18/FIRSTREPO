// import React from 'react';
// import './FishStore.css';
// import tomatoImg from '../assets/tomato.png';
// import onionImg from '../assets/onion.jpg';
// import potatoImg from '../assets/potato.png';  // Corrected image path
// import vegiebg from '../assets/vegies.jpg';

// const VeggiesStore = () => {
//   const handleSortChange = (event) => {
//     alert('Selected: ' + event.target.value);
// };

//   return (
//     <div>
//       {/* Header with background image */}
//       <div className="header" style={{ backgroundImage: `url(${vegiebg})` }}>
//         <h1>VEGIES</h1>
//         <div className="underline"></div>
//       </div>

//       {/* Main Section */}
//       <div className="container">
//         {/* Sidebar */}
//         <div className="sidebar">
//           <div className="breadcrumbs">
//             <a href="/home">Home</a> / <a href="/store">Store</a> / <span>Flowers</span>
//           </div>
//           <h2> Filters</h2>
//           <div className="filter-section">
//             <div className="filter-title">Price</div>
//             <div className="filter-options">
//               <button className="link-button" onClick={() => alert('Filter: Under ₹70')}>Under ₹70 (2)</button>
//               <button className="link-button" onClick={() => alert('Filter: ₹131 & Above')}>₹131 & Above (1)</button>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="main-content">
//           <div className="top-bar">
//             <select id="sortBy" onChange={handleSortChange}>
//               <option>Sort By</option>
//               <option>Price, Low to High</option>
//               <option>Price, High to Low</option>
//             </select>
//           </div>

//           <div className="product-grid">
//             {/* Lotus */}
//             <div className="card">
//               <img src={tomatoImg} alt="tomato" />
//               <div className="card-body">
//                 <strong>Tomato</strong>
//                 <span>₹40</span>
//               </div>
//             </div>

//             {/* Tulip */}
//             <div className="card">
//               <div className="discount-badge">-8.82%</div>
//               <img src={potatoImg} alt="potato" />
//               <div className="card-body">
//                 <strong>Potato</strong>
//                 <span>
//                   <span className="original-price">₹35</span> ₹30
//                 </span>
//               </div>
//             </div>

//             {/* Mogra */}
//             <div className="card">
//               <div className="discount-badge">-0.62%</div>
//               <img src={onionImg} alt="onion" />
//               <div className="quick-view">Quick View</div>
//               <div className="card-body">
//                 <strong>Onion</strong>
//                 <span>
//                   <span className="original-price">₹50</span> ₹48
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VeggiesStore;

import React from 'react';
import './FishStore.css';
import tomatoImg from '../assets/tomato.png';
import onionImg from '../assets/onion.jpg';
import potatoImg from '../assets/potato.png';
import vegiebg from '../assets/vegies.jpg';
import { useCart } from '../CartContext'; // Import the CartContext to access addToCart function

const VeggiesStore = () => {
  const { addToCart } = useCart();  // Get the addToCart function from context

  const handleSortChange = (event) => {
    alert('Selected: ' + event.target.value);
  };

  // Handle Add to Cart functionality
  const handleAddToCart = (product) => {
    addToCart(product);  // Add the selected product to the cart
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      {/* Header with background image */}
      <div className="header" style={{ backgroundImage: `url(${vegiebg})` }}>
        <h1>VEGIES</h1>
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
            {/* Tomato */}
            <div className="card">
              <img src={tomatoImg} alt="tomato" />
              <div className="card-body">
                <strong>Tomato</strong>
                <span>₹40</span>
                <button onClick={() => handleAddToCart({ name: 'Tomato', price: 40, image: tomatoImg })}>Add to Cart</button> {/* Add to Cart button */}
              </div>
            </div>

            {/* Potato */}
            <div className="card">
              <div className="discount-badge">-8.82%</div>
              <img src={potatoImg} alt="potato" />
              <div className="card-body">
                <strong>Potato</strong>
                <span>
                  <span className="original-price">₹35</span> ₹30
                </span>
                <button onClick={() => handleAddToCart({ name: 'Potato', price: 30, image: potatoImg })}>Add to Cart</button> {/* Add to Cart button */}
              </div>
            </div>

            {/* Onion */}
            <div className="card">
              <div className="discount-badge">-0.62%</div>
              <img src={onionImg} alt="onion" />
              <div className="quick-view">Quick View</div>
              <div className="card-body">
                <strong>Onion</strong>
                <span>
                  <span className="original-price">₹50</span> ₹48
                </span>
                <button onClick={() => handleAddToCart({ name: 'Onion', price: 48, image: onionImg })}>Add to Cart</button> {/* Add to Cart button */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeggiesStore;
