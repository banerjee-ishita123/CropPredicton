// src/Pages/Prediction.jsx
import React, { useState } from "react";
import "./Prediction.css"; // Optional

const Prediction = () => {
  const [formData, setFormData] = useState({
    Nitrogen: "",
    Phosporus: "",
    Potassium: "",
    Temperature: "",
    Humidity: "",
    pH: "",
    Rainfall: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(`Prediction: ${result.prediction}`);
  };

  return (
    <div className="prediction-page">
      <h1>Crop Recommendation System</h1>
      <form onSubmit={handleSubmit} className="form-container">
        {["Nitrogen", "Phosporus", "Potassium", "Temperature", "Humidity", "pH", "Rainfall"].map((field) => (
          <div key={field} className="form-group">
            <label>{field}:</label>
            <input
              type="number"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              step="0.1"
              required
            />
          </div>
        ))}
        <button type="submit">Predict Crop</button>
      </form>
    </div>
  );
};

export default Prediction;
