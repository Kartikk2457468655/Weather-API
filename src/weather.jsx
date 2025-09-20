import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Weather(){
    let [city, setCity] = useState('');
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "b730bf8c5dfe05d4e9593246a6e38efb"

    let getWeather = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        let result = {
            temperature: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            windSpeed: data.wind.speed,
            windDeg: data.wind.deg,
        };
        console.log(result);
    };

    let handleChange = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        setCity(" ");
        getWeather();
    }

    return (
        <div>
        <h1>Search for weather</h1>
        <form>
        <TextField id="city" label="Enter city name" variant="outlined" value={city} onChange={handleChange} />
        <br />
        <br />
        <Button variant="contained" onClick={handleSubmit}>Get Weather</Button>
        </form>
        </div>
        
    )
}