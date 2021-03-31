import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Country = ({ country }) => {
  const [show, setShow] = useState(true);
  const [weather, setWeather] = useState({
    temp: '',
    description: '',
    icon: '',
    wind: '',
  });

  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${API_KEY}&units=metric`
      )
      .then((res) => {
        setWeather({
          temp: Math.round(res.data.main.temp),
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
          wind: res.data.wind.speed,
        });
        console.log('weather', res.data);
      });
  }, [country.capital]);

  const handleShow = () => {
    setShow(!show);
  };

  if (show) {
    return (
      <div>
        {country.name} : <button onClick={handleShow}> Hide </button>
        <br /> Capital: {country.capital} <br /> Population:{' '}
        {country.population}
        <h2>Languages</h2>
        <ul>
          {country.languages.map((lang) => (
            <li key={lang.iso639_2}>{lang.name}</li>
          ))}
        </ul>
        <img
          src={country.flag}
          alt={country.name + 'flag'}
          style={{ width: '160px', height: '160px' }}
        />
        <h2>Weather in {country.capital}</h2>
        <h3>temprature: {weather.temp} &deg;Celcius</h3>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`}
          alt="weather images"
        ></img>
        <h4>{weather.description}</h4>
        <h3>wind : {weather.wind} mph</h3>
      </div>
    );
  } else {
    return <button onClick={handleShow}>Show</button>;
  }
};
