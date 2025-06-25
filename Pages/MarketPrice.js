import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MarketPrice() {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/market-prices');
        setMarketData(response.data.records || []);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch market price data.');
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📊 Market Price Data</h2>
      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && marketData.length === 0 && <p>No data found.</p>}
      {!loading && marketData.length > 0 && (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>Commodity</th>
              <th>Variety</th>
              <th>Market</th>
              <th>State</th>
              <th>Min Price</th>
              <th>Max Price</th>
              <th>Modal Price</th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((item, index) => (
              <tr key={index}>
                <td>{item.commodity || '-'}</td>
                <td>{item.variety || '-'}</td>
                <td>{item.market || '-'}</td>
                <td>{item.state || '-'}</td>
                <td>{item.min_price || '-'}</td>
                <td>{item.max_price || '-'}</td>
                <td>{item.modal_price || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MarketPrice;
