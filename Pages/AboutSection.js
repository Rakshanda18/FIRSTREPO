import React from 'react';
import './AboutSection.css';
import aboutImage from '../assets/sheep.jpg'; // Adjust path as needed

const AboutSection = () => {  // Changed to PascalCase
  return (
    <section className="about-section" style={{ backgroundImage: `url(${aboutImage})` }}>
      <div className="overlay-left">
        <h1>About Us</h1>
        <div className="underline"></div>
        <p>
          We specialize in providing farm-fresh vegetables and fruits directly from farmers to buyers at the current market price. Our platform ensures that products are as fresh as possible while supporting local farmers. Farmers can also buy products they need through our marketplace.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;  // Changed to PascalCase
