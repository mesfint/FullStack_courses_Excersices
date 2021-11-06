import React from "react";
import { Row, Col, Alert, Popover } from "antd";
import { WeatherData } from "./WeatherData";

export const Countries = ({ countryDisplay, isLoading, setSearchTerm }) => {
  const handleCountryShow = (name) => {
    setSearchTerm(name);
  };
  const content = (
    <div>
      <Alert message="A lot of result please specify" type="error" />;
    </div>
  );

  if (countryDisplay.length >= 10) {
    return null;
  } else if (countryDisplay.length < 10 && countryDisplay.length > 1) {
    return countryDisplay.map((country) => (
      <p key={country.name}>
        <span>
          {country.name}{" "}
          <button onClick={() => handleCountryShow(country.name)}>show </button>
        </span>
      </p>
    ));
  } else {
    return countryDisplay.map((country) => (
      <div key={country.name}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6} order={4}>
            <WeatherData city={country.capital} />
          </Col>
          <Col span={6} order={3}>
            <div style={{ width: "20px", height: "20px" }}>
              <img
                src={country.flag}
                alt={country.name + "flag"}
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          </Col>
          <Col span={6} order={2}>
            <div style={{ fontSize: "1.3rem" }}>Languages</div>
            <div style={{ fontSize: "1rem" }}>
              <ul>
                {country.languages.map((lang) => (
                  <li key={lang.iso639_2}>{lang.name}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col span={6} order={1}>
            <div style={{ fontSize: "2rem" }}>{country.name}</div>
            <div style={{ fontSize: "1rem" }}>
              <p> Capital city: {country.capital}</p>
              <div style={{ fontSize: "1rem" }}>
                <p>Population: {country.population.toLocaleString()}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    ));
  }
};
