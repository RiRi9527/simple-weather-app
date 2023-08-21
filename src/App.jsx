import React, { useState } from "react";
import Search from "./components/search/Search";
import Weather from "./components/weather/Weather";
import "./App.css";

const App = () => {
  const [city, setCity] = useState(null);
  const [show, setShow] = useState(false);

  const getCity = (city) => {
    setCity(city);
  };

  const getShow = (show) => {
    setShow(show);
  };

  return (
    <div className="weather-container">
      <Search getCity={getCity} getShow={getShow} />
      <Weather city={city} show={show} />
    </div>
  );
};

export default App;
