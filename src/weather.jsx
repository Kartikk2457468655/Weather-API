import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./weather.css";
import { useState } from 'react';

export default function Weather({ onWeatherDataUpdate }) {
    let [city, setCity] = useState('');
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "b730bf8c5dfe05d4e9593246a6e38efb"

    let handleSubmit = async (e) => {
        e.preventDefault();

        if (city.trim() === "") {
            alert("Please enter a place name.");
            return;
        }

        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("Place not found or API error.");
            }
            let data = await response.json();
            console.log("Raw API data:", data);
            let result = {
                city: data.name,
                temperature: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                windSpeed: data.wind.speed,
                windDeg: data.wind.deg,
            };
            console.log("Processed weather data:", result);
            onWeatherDataUpdate(result);
            setCity("");
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("Error: " + error.message);
            onWeatherDataUpdate(null);
        }
    }

    let handleChange = (e) => {
        setCity(e.target.value);
    }

    return (
        <div className="weather-container">
            <h1>🌤️ Weather Forecast</h1>
            <form onSubmit={handleSubmit} className="weather-form">
                <TextField 
                    id="city" 
                    label="Enter place name" 
                    variant="outlined" 
                    value={city} 
                    onChange={handleChange}
                    className="weather-input"
                    fullWidth
                />
                <br />
                <br />
                <Button 
                    variant="contained" 
                    type="submit"
                    className="weather-button"
                    fullWidth
                >
                    🔍 Get Weather
                </Button>
            </form>
        </div>
    )
}