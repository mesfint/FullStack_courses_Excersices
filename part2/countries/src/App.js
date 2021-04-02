import React, { useState, useEffect } from 'react';
import GlobalStyles from './Layout/globalStyles';
import styled from 'styled-components';
import { PageHeader, Divider } from 'antd';
import { Countries } from './components/Countries';
import { Search } from './components/Search';
import axios from 'axios';
import './App.css';
//npx json-server --port 3001 --watch db.json

const Container = styled.div({
  height: 'auto',
  display: 'flex',
  width: '50%',
  margin: '0 460px',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'left',
});

const App = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  //const [query, setQuery] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const result = await axios.get('https://restcountries.eu/rest/v2/all');

      setCountries(result.data);
      setIsLoading(false);
      console.log(result.data);
    };
    fetchCountries();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const countryDisplay = countries.filter((country) => {
    return country.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <GlobalStyles />
      <PageHeader style={{ width: '58%', margin: '0 auto' }}>
        <Divider orientation="left" plain>
          <h1>Find Countries</h1>
        </Divider>
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      </PageHeader>
      <Container>
        <Countries
          countryDisplay={countryDisplay}
          isLoading={isLoading}
          setSearchTerm={setSearchTerm}
        />
      </Container>
    </>
  );
};

export default App;
