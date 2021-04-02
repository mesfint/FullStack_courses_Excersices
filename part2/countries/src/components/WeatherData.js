import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';

const { Meta } = Card;

export const WeatherData = ({ city }) => {
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
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
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
  }, []);
  return (
    <>
      <div>
        Weather in: <span style={{ fontSize: '1.1rem' }}>{city}</span>
      </div>
      <p>
        Temprature:{' '}
        <span style={{ fontSize: '1.1rem' }}>{weather.temp} &deg;</span>Celcius
      </p>

      <Card
        style={{
          width: 180,
          height: 220,
          background: '#e7e6e1',
        }}
        cover={
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`}
            alt="weather images"
            style={{ marginBottom: '-40px' }}
          />
        }
      >
        <Meta
          style={{ textAlign: 'center' }}
          title={weather.description}
          description={weather.wind + ' mph '}
        />
      </Card>
    </>
  );
};
