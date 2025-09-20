import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./details.css";

export default function Details({ weatherData }) {

    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1561634666-669fe33c3d0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    console.log("Details component received weatherData:", weatherData);

    if (!weatherData) {
        return <div>No weather data to display. Please search for a city.</div>;
    }

    return (
        <div className='det'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={weatherData.humidity > 80 ? RAIN_URL : weatherData.temperature > 15 ? HOT_URL : COLD_URL}
                    title="weather image"
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