import { useState } from "react";
import "./App.css";
import Weather from "./weather";
import Details from "./details";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherDataUpdate = (data) => {
    console.log("App.jsx received weather data:", data);
    setWeatherData(data);
  };

  return (
    <div className="app-container">
      <div className="WeatherS">
        <Weather onWeatherDataUpdate={handleWeatherDataUpdate} />
      </div>
      <div className="DetailsS">
        <Details weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;