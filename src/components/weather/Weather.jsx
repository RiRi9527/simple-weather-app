import React, { useEffect, useState } from "react";
import { API_KEY, OPEN_WEATHER_WEATHER_URL } from "../../api/api";

const Weather = ({ city, show }) => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (city) {
      async function fetchData() {
        try {
          const response = await fetch(
            `${OPEN_WEATHER_WEATHER_URL}lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}`
          );
          const jsonData = await response.json();
          setWeather(jsonData);
          console.log(jsonData);
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      }
      fetchData();
    }
  }, [city]);

  return (
    <div>
      {" "}
      {show && weather && (
        <div>
          <h1>Weather in {city.name}</h1>
          <h2>{weather.weather[0].main}</h2>
          <p>Temperature: {weather.main.temp} K</p>
          <p>Feels like: {weather.main.feels_like} K</p>
          <p>Weather Description: {weather.weather[0].description}</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
