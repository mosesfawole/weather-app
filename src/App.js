import { useState } from "react";
import axios from "axios";
function App() {
  const API_KEY = process.env.OPEN_WEATHER_API_KEY;

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lat={lat}&lon={lon}&appid=03928166b5c8b07cf2307025ac7c598c`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter location"
        />
      </div>
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
            <p className="bold">63F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidty">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
