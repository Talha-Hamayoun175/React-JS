import React from "react";
import WeatherApp from "./weatherAPI";

function Weather() {
    return (
        <div className="container-fluid p-0 mt-5">
            <h2>Weather</h2>
            <p>Search Weather!</p>
            < WeatherApp />
        </div>
    );
}

export default Weather;
