
// import React, { useState } from 'react';
// import './NewsSection.css';

// // Import images - make sure paths are correct
// import News1 from '../assets/News1.png';
// import News2 from '../assets/News2.png';
// import News3 from '../assets/News3.png';

// const NewsSection = () => {
//   const [expandedIndices, setExpandedIndices] = useState([]);

//   const newsItems = [
//     {
//       id: 1,
//       image: News1,
//       title: "India may not lose much in agriculture due to Trump's tariffs: Economist Ashok Gulati",
//       date: '6/5/2025',
//       text: "India's agricultural exports might not suffer significantly from the new tariffs imposed by the US, according to agricultural economist Ashok Gulati. He suggests that smart negotiation during bilateral trade talks could enable..."
//     },
//     {
//       id: 2,
//       image: News2,
//       title: '60% wheat area sown under climate-resilient varieties: Govt in Rajya Sabha',
//       date: '4/3/2025',
//       text: "More than 60 per cent of wheat area planted during the rabi season is under climate-resilient varieties, according to the government. The Indian Council of Agricultural Research has developed 114 varieties suited for varying weather..."
//     },
//     {
//       id: 3,
//       image: News3,
//       title: 'Onion and soyabean farmers demand measures to boost exports',
//       date: '4/3/2025',
//       text: "As prices of onions and soyabean continue to fall in the Indian market, industry and farmers' associations have increased pressure on the government to extend more support by reducing export duty on onions and offering incentives for export of soybean meal..."
//     }
//   ];

//   const toggleExpanded = (id) => {
//     setExpandedIndices((prev) =>
//       prev.includes(id)
//         ? prev.filter((i) => i !== id)
//         : [...prev, id]
//     );
//   };

//   return (
//     <section className="news-section">
//       <h2 className="section-title">NEWS</h2>
//       <div className="news-container">
//         {newsItems.map((item) => (
//           <div className="news-card" key={item.id}>
//             <div className="news-image-container">
//               <img 
//                 src={item.image} 
//                 alt={item.title} 
//                 className="news-image"
//                 onError={(e) => {
//                   e.target.onerror = null; 
//                   e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
//                 }}
//               />
//             </div>
//             <div className="news-content">
//               <h3 className="news-title">{item.title}</h3>
//               <p className="news-date">{item.date}</p>
//               <p className={`news-text ${expandedIndices.includes(item.id) ? 'expanded' : ''}`}>
//                 {item.text}
//               </p>
//               <button 
//                 className="toggle-btn" 
//                 onClick={() => toggleExpanded(item.id)}
//               >
//                 {expandedIndices.includes(item.id) ? 'READ LESS' : 'READ MORE'}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default NewsSection;





// import React, { useState, useEffect } from 'react';
// import './NewsSection.css';

// const NewsSection = () => {
//   const [articles, setArticles] = useState([]);
//   const [expandedIndices, setExpandedIndices] = useState([]);

//   // Fetch news from the API
//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//          `https://newsapi.org/v2/everything?q=agriculture+farming+crops&language=en&pageSize=6&sortBy=publishedAt&apiKey=7636a5aa84bb48a1a6669738e2b1bdc8`
//         );
//         const data = await response.json();
//         setArticles(data.articles || []);
//       } catch (error) {
//         console.error('Failed to fetch news:', error);
//       }
//     };

//     fetchNews();
//   }, []);

//   // Toggle read more/less for each news item
//   const toggleExpanded = (index) => {
//     setExpandedIndices((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index)
//         : [...prev, index]
//     );
//   };

//   return (
//     <section className="news-section">
//       <h2 className="section-title">NEWS</h2>
//       <div className="news-container">
//         {articles.length === 0 ? (
//           <p>Loading news...</p>
//         ) : (
//           articles.map((article, index) => (
//             <div className="news-card" key={index}>
//               <div className="news-image-container">
//                 <img
//                   src={article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image'}
//                   alt={article.title}
//                   className="news-image"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
//                   }}
//                 />
//               </div>
//               <div className="news-content">
//                 <h3 className="news-title">{article.title}</h3>
//                 <p className="news-date">{new Date(article.publishedAt).toLocaleDateString()}</p>
//                 <p className={`news-text ${expandedIndices.includes(index) ? 'expanded' : ''}`}>
//                   {article.description || article.content || 'No description available.'}
//                 </p>
//                 <button className="toggle-btn" onClick={() => toggleExpanded(index)}>
//                   {expandedIndices.includes(index) ? 'READ LESS' : 'READ MORE'}
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// };

// export default NewsSection;



import React, { useState, useEffect } from 'react';
import './NewsSection.css';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [expandedIndices, setExpandedIndices] = useState([]);

  // Fetch news from the API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=agriculture+farming+crops&language=en&pageSize=6&sortBy=publishedAt&apiKey=7636a5aa84bb48a1a6669738e2b1bdc8`
        );
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    };

    fetchNews();
  }, []);

  // Toggle read more/less for each news item
  const toggleExpanded = (index) => {
    setExpandedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="news-section">
      <h2 className="section-title">NEWS</h2>
      <div className="news-container">
        {articles.length === 0 ? (
          <p>Loading news...</p>
        ) : (
          articles.map((article, index) => (
            <div className="news-card" key={index}>
              <div className="news-image-container">
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image'}
                  alt={article.title}
                  className="news-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
              </div>
              <div className="news-content">
                <h3 className="news-title">{article.title}</h3>
                <p className="news-date">{new Date(article.publishedAt).toLocaleDateString()}</p>
                <p className={`news-text ${expandedIndices.includes(index) ? 'expanded' : ''}`}>
                  {article.description || article.content || 'No description available.'}
                </p>
                <button className="toggle-btn" onClick={() => toggleExpanded(index)}>
                  {expandedIndices.includes(index) ? 'READ LESS' : 'READ MORE'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default NewsSection;
