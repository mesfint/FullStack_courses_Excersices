import React from 'react';

export const Country = ({ country, handleCountryShow }) => {
  return (
    <div>
      {country.name}
      <br /> Capital: {country.capital} <br /> Population: {country.population}
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
    </div>
  );
};
