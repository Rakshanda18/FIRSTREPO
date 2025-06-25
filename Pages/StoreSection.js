
// import React from 'react';
// import './StoreSection.css'; // Yahan apne CSS file ko sahi se link karein

// const categories = [
//   { name: 'VEGIES', imgSrc: require('../assets/vegies.jpg'), productCount: 2 },
//   { name: 'FLOWERS', imgSrc: require('../assets/rose.jpg'), productCount: 2 },
//   { name: 'FERTILIZERS AND PESTICIDES', imgSrc: require('../assets/dung.jpg'), productCount: 2 },
//   { name: 'GRAINS', imgSrc: require('../assets/jwari.jpg'), productCount: 2 },
//   { name: 'SEEDS', imgSrc: require('../assets/seeds.jpg'), productCount: 2 },
//   { name: 'FRUITS', imgSrc: require('../assets/fruits.jpg'), productCount: 3 },
// ];

// const StoreSection = () => {
//   return (
//     <div className="store-section">
//       <h2>Main Categories</h2>
//       <div className="underline"></div>

//       <div className="category-container">
//         {categories.map((category, index) => (
//           <div className="category-card" key={index}>
//             <span className="shop-now">SHOP NOW</span>
//             <span className="product-count">{category.productCount} Products</span>
//             <img src={category.imgSrc} alt={category.name} />
//             <div className="info">{category.name}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StoreSection;
import React from 'react';
import './StoreSection.css';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'VEGIES', imgSrc: require('../assets/vegies.jpg'), productCount: 2, path: '/veggies-store' },
  { name: 'FLOWERS', imgSrc: require('../assets/rose.jpg'), productCount: 2, path: '/flower-store' },  // Updated
  { name: 'GRAINS', imgSrc: require('../assets/jwari.jpg'), productCount: 2, path: '/grains-store' },  // Updated
  { name: 'FRUITS', imgSrc: require('../assets/fruits.jpg'), productCount: 3, path: '/fruits-store' },  // Updated
  { name: 'MILK PRODUCTS', imgSrc: require('../assets/milk.jpg'), productCount: 3, path: '/milk-products-store' }, // New category
  { name: 'FISH', imgSrc: require('../assets/fish.jpg'), productCount: 3, path: '/fish-store' }  // New category
];

const StoreSection = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    if (category.path) {
      navigate(category.path);
    }
  };

  return (
    <section className="store-section">
      <h2>Main Categories</h2>
      <div className="underline"></div>

      <div className="category-container">
        {categories.map((category, index) => (
          <div
            className="category-card"
            key={index}
            onClick={() => handleClick(category)}
            style={{ cursor: category.path ? 'pointer' : 'default' }}
          >
            <div className="category-buttons">
              <button className="shop-now-btn">SHOP NOW</button>
              <button className="product-count-btn">{category.productCount} Products</button>
            </div>
            <img src={category.imgSrc} alt={category.name} />
            <div className="info">{category.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoreSection;
