import React from 'react';
import './ContactSection.css'; // Create this CSS file (code provided below)

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-title">CONTACT US</div>
      <div className="underline"></div>

      <section className="contact-section">
        <div className="contact-info">
          <div className="info-block">
            <h4>Email</h4>
            <p><span className="icon">✉️</span>rakshandathakare18@gmail.com</p>
            <h4>Contact Info</h4>
            <p><span className="icon">📞</span>999-7777-000</p>
          </div>
          <div className="info-block">
            <h4>Address</h4>
            <p>Manhattan, New York, NY, United States</p>
            <p><span className="icon">⏰</span>Mon-Fri - 08:00–19:00</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone" required />
          </div>
          <input type="email" placeholder="Email address" required />
          <textarea placeholder="Message" required></textarea>
          <button className="contact-button" type="submit">CONTACT US</button>
        </form>

        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4618074959193!2d-74.00601508459865!3d40.7127759793306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMTIuMCJX!5e0!3m2!1sen!2sus!4v1644404794640!5m2!1sen!2sus" 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;