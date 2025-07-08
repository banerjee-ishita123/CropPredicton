// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
 // adjust path if needed
import "./App.css";
import Prediction from "./Components/Prediction/Prediction";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1 className="title">Welcome to Smart Farming Dashboard</h1>

        <Link to="/predict">
          <button className="navigate-button">Go to Prediction Page</button>
        </Link>

        <Routes>
          <Route path="/predict" element={<Prediction />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
