import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./details.css";

export default function Details({ weatherData }) {
    const IMG_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    console.log("Details component received weatherData:", weatherData);

    if (!weatherData) {
        return <div>No weather data to display. Please search for a city.</div>;
    }

    return (
        <div className='det'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={IMG_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" fontWeight="bold">
                        {weatherData.city}
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'text.secondary' }} component="span" fontWeight="bold">
                        <div> Description: {weatherData.description} </div>
                        <div> Temperature: {weatherData.temperature}°C </div>
                        <div> Minimum Temperature: {weatherData.tempMin}°C </div>
                        <div> Maximum Temperature: {weatherData.tempMax}°C </div>
                        <div> Humidity: {weatherData.humidity} </div>
                        <div> Wind Speed: {weatherData.windSpeed} km/h </div>
                        <div> Wind Degree: {weatherData.windDeg} </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}