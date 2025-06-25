import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I've never tasted produce this fresh before! Knowing it comes straight from local farmers makes all the difference.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Doe",
      role: "Weekly Shopper",
      stars: 5
    },
    {
      id: 2,
      text: "As a farmer, I appreciate the transparency and fairness of this marketplace. It's a great way to support fellow farmers and reach new customers.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Lisa Smith",
      role: "Local Farmer",
      stars: 5
    },
    {
      id: 3,
      text: "This platform helped me connect with buyers faster than ever. A true game changer for small farmers.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Ravi Kumar",
      role: "Organic Farmer",
      stars: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <h2>TESTIMONIALS</h2>
      <div className="underline"></div>
      
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="testimonial-card"
          >
            <p>{testimonial.text}</p>
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="testimonial-image" 
            />
            <div className="testimonial-name">{testimonial.name}</div>
            <div className="testimonial-role">{testimonial.role}</div>
            <div className="stars">
              {'★'.repeat(testimonial.stars)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;