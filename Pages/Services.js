// import React from 'react';
// import './Services.css';
// import vegImage from '../assets/veg.png';
// import toolsImage from '../assets/tools.png';
// import marketImage from '../assets/image.png';

// const Services = () => {
//   return (
//     <section className="services">
//       <h2>SERVICES</h2>
//       <div className="underline"></div>
//       <div className="service-container">
//         <div className="service-card">
//           <img src={vegImage} alt="Direct Sales" />
//           <h3>Direct Sales</h3>
//         </div>
//         <div className="service-card">
//           <img src={toolsImage} alt="Farmer Marketplace" />
//           <h3>Farmer Marketplace</h3>
//         </div>
//         <div className="service-card">
//           <img src={marketImage} alt="Current Market Pricing" />
//           <h3>Current Market Pricing</h3>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import vegImage from '../assets/veg.png';
import toolsImage from '../assets/tools.png';
import marketImage from '../assets/image.png';

const Services = () => {
  return (
    <section className="services">
      <h2>SERVICES</h2>
      <div className="underline"></div>
      <div className="service-container">

        <Link to="/store" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="service-card">
            <img src={vegImage} alt="Direct Sales" />
            <h3>Direct Sales</h3>
          </div>
        </Link>

        <div className="service-card">
          <img src={toolsImage} alt="Farmer Marketplace" />
          <h3>Farmer Marketplace</h3>
        </div>

        <Link to="/market-price" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="service-card">
            <img src={marketImage} alt="Current Market Pricing" />
            <h3>Current Market Pricing</h3>
          </div>
        </Link>

      </div>
    </section>
  );
};

export default Services;

