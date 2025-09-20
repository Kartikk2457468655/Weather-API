import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./details.css"


export default function Details() {

    const IMG_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    let det = {
        city: "Delhi",  
        temperature: 20,
            tempMin: 10,
            tempMax: 30,
            description: "cold weather",
            humidity: 40,
            windSpeed: 10,
            windDeg: 10,
    }

  return (
   
    <div className='det'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140}}
        image={IMG_URL}
        title="green iguana"
      />
       
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" fontWeight="bold">
          {det.city}
        </Typography>
        <Typography variant="h5" sx={{ color: 'text.secondary' }} componenet="span" fontWeight="bold">
            <div> Description: {det.description} </div>
            <div> Temperature: {det.temperature}°C </div>
            <div> Minimum Temperature: {det.tempMin}°C </div>
            <div> Maximum Temperature: {det.tempMax}°C </div>
            <div> Humidity: {det.humidity} </div>
            <div> Wind Speed: {det.windSpeed} km/h </div>
            <div> Wind Degree: {det.windDeg} </div>
        </Typography>
      </CardContent>
    </Card>
     </div>
  

  );
}