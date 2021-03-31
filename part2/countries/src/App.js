import React, { useState, useEffect } from 'react';
import { Countries } from './components/Countries';
import { Search } from './components/Search';
/* import { WeatherData } from './components/WeatherData';
 */
import axios from 'axios';

import './App.css';
//npx json-server --port 3001 --watch db.json

const App = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const result = await axios.get(
        `https://restcountries.eu/rest/v2/name/${query}`
      );

      setCountries(result.data);
      setIsLoading(false);
      console.log(result.data);
    };
    fetchCountries();
  }, [query]);

  //console.log('countries', countries.length);
  return (
    <>
      {countries.length >= 10 ? (
        <h2>Too many matches, specify another filter</h2>
      ) : (
        <div>
          <Countries countries={countries} isLoading={isLoading} />
          {/* <WeatherData countries={countries} setCountries={setCountries} /> */}
        </div>
      )}
      <Search getQuery={(q) => setQuery(q)} />
    </>
  );
};

export default App;
