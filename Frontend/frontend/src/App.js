import React, { useState } from "react";
import "./App.css";

function App() {
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(`Prediction: ${result.prediction}`);
  };

  return (
    <div className="app-container">
      <h1 className="title">Crop Recommendation System</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {["Nitrogen", "Phosporus", "Potassium", "Temperature", "Humidity", "pH", "Rainfall"].map((field) => (
            <div className="form-group" key={field}>
              <label>
                {field}:
                <input
                  type="number"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  step="0.1"
                  required
                />
              </label>
            </div>
          ))}

          <button type="submit">Predict Crop</button>
        </form>
      </div>
    </div>
  );
}

export default App;
