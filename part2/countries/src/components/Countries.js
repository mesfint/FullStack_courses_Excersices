import React from 'react';
import { Country } from './Country';

export const Countries = ({ countries, isLoading }) => {
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      {countries.map((country, i) => (
        <Country key={country.i} country={country} />
      ))}
    </div>
  );
};
