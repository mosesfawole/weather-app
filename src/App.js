import { useState } from "react";
import axios from "axios";
function App() {
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lat={lat}&lon={lon}&appid=${apiKey}`;

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);
      setLocation("");
      const response = await axios.get(url);

      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("City not found");
      setData("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter location"
        />
        <button type="submit" onClick={handleSearch}>
          search
        </button>
      </div>
      {loading && <p className="loading">Loading.....</p>}
      {error && <p className="error">{error}</p>}

      {data && (
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

          {data.name != undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°C</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="humidty">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}

                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.main ? (
                  <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                ) : null}

                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
