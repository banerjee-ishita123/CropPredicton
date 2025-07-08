// src/components/Feature/Feature.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>🌾 Smart Farming Dashboard</h1>
      <p>Your one-stop hub for weather, prediction, and pricing.</p>

      <div className="nav-buttons">
        <Link to="/weather">
          <button>Weather Forecast</button>
        </Link>
        <Link to="/prediction">
          <button>Crop Prediction</button>
        </Link>
        <Link to="/price">
          <button>Market Price</button>
        </Link>
        <Link to="/chatbot">
          <button>AI Chatbot</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
