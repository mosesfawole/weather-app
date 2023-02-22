import { useState } from "react";
import axios from "axios";
function App() {
  const API_KEY = process.env.OPEN_WEATHER_API_KEY;

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&lat={lat}&lon={lon}&appid=03928166b5c8b07cf2307025ac7c598c`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1> 60F</h1>
          </div>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>63F</p>
          </div>
          <div className="humidty">
            <p>20%</p>
          </div>
          <div className="wind">12 MPH</div>
        </div>
      </div>
    </div>
  );
}

export default App;
