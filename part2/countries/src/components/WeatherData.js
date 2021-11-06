import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";

const { Meta } = Card;

export const WeatherData = ({ city }) => {
  const [weather, setWeather] = useState({
    temp: "",
    description: "",
    icon: "",
    wind: "",
  });
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}&units=m`
      )
      .then((res) => {
        setWeather({
          temp: res.data.current.temperature,
          description: res.data.current.weather_descriptions[0],
          icon: res.data.current.weather_icons[0],
          wind: res.data.current.wind_speed,
        });
        console.log("weather", res.data);
      });
  }, [city]);
  return (
    <>
      <div>
        Weather in: <span style={{ fontSize: "1.1rem" }}>{city}</span>
      </div>
      <p>
        Temprature:{" "}
        <span style={{ fontSize: "1.1rem" }}>{weather.temp} &deg;</span>
      </p>

      <Card
        style={{
          width: 180,
          height: 220,
          background: "#e7e6e1",
        }}
        cover={
          <img
            src={weather.icon}
            alt="weather images"
            style={{ marginBottom: "-40px" }}
          />
        }
      >
        <Meta
          style={{ textAlign: "center" }}
          title={weather.description}
          description={weather.wind + " mph "}
        />
      </Card>
    </>
  );
};
