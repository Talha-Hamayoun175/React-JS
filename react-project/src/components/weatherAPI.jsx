import React, { useState } from "react";
import "./weatherAPI.css";

function WeatherApp() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        const apiKey = "";
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},PK&appid=${apiKey}&units=metric`;

        console.log("API URL: " + url);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            setWeather(data);
            setError(null);
        } catch (err) {
            setWeather(null);
            setError(err.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            fetchWeather();
        }
    };

    return (
        <div className="weather-app">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Get Weather</button>
            </form>

            {error && <p className="error">{error}</p>}

            {weather && (
                <div className="weather-info">
                    <h2>{weather.city.name}, {weather.city.country}</h2>
                    <p>Temperature: {weather.list[0].main.temp}°C</p>
                    <p>Condition: {weather.list[0].weather[0].description}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}.png`}
                        alt={weather.list[0].weather[0].description}
                    />
                </div>
            )}
        </div>
    );
}

export default WeatherApp;
