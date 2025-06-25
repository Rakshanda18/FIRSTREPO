// // src/components/HeroSection.js
// import React from "react";

// export default function HeroSection() {
//   return (
//     <section style={styles.hero}>
//       <div style={styles.overlay}></div>
//       <div style={styles.content}>
//         <h2 style={styles.heading}>Fresh from the<br />Farm</h2>
//         <div style={styles.underline}></div>
//         <p style={styles.subtext}>Connecting Farmers and Buyers Directly</p>
//         <button style={styles.button}>READ MORE</button>
//       </div>
//     </section>
//   );
// }

// const styles = {
//   hero: {
//     position: "relative",
//     background: `url('https://wallpaperaccess.com/full/803470.jpg') center/cover no-repeat`,
//     height: "90vh",
//     display: "flex",
//     alignItems: "center",
//     color: "white"
//   },
//   overlay: {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.4)",
//     zIndex: 1
//   },
//   content: {
//     position: "relative",
//     zIndex: 2,
//     marginLeft: "60px",
//     maxWidth: "600px"
//   },
//   heading: {
//     fontSize: "48px",
//     fontFamily: "'Playfair Display', serif",
//     marginBottom: "10px",
//     lineHeight: "1.2"
//   },
//   underline: {
//     width: "50px",
//     height: "5px",
//     backgroundColor: "#ff5e00",
//     margin: "10px 0 20px"
//   },
//   subtext: {
//     fontSize: "18px",
//     fontWeight: 500,
//     marginBottom: "30px"
//   },
//   button: {
//     padding: "12px 24px",
//     fontSize: "16px",
//     fontWeight: "bold",
//     backgroundColor: "transparent",
//     color: "white",
//     border: "2px solid #ff5e00",
//     cursor: "pointer"
//   }
// };
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>
          Fresh from the Farm
        </h2>
        {/* <div className="underline"></div> */}
        <p>Connecting Farmers and Buyers Directly</p>
        <button>READ MORE</button>
      </div>
    </section>
  );
};

export default HeroSection;
