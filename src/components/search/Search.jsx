import React, { useState } from "react";
import { OPEN_WEATHER_API_URL, API_KEY } from "../../api/api";

const Search = ({ getCity, getShow }) => {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    async function fetchData() {
      try {
        const response = await fetch(
          `${OPEN_WEATHER_API_URL}q=${search}&limit=5&appid=${API_KEY}`
        );
        const jsonData = await response.json();
        setCities(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    if ((e.key = "Enter")) {
      fetchData();
    }
    setSearch("");
    getShow(false);
  };

  const handleClick = (city) => {
    const newCity = cities.filter((c) => c.lat == city.lat);
    setCities(newCity);
    getCity(city);
    getShow(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search City"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {cities.map((city) => (
          <li key={city.lat} onClick={() => handleClick(city)}>
            {city.name},{city.state ? `${city.state},` : null}
            {city.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
