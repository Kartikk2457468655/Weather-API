import "./App.css";
import Weather from "./weather";
import Details from "./details";

function App() {
    return (
        <div>
            <div className="WeatherS"><Weather /></div>
            <br />
            <div className="DetailsS"><Details /></div>
        </div>
    )
}

export default App;