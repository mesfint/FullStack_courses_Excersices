import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/Layout/globalStyles';

import { Persons } from './components/Persons';
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import axios from 'axios';
/* import './App.css'; */

const Container = styled.section`
  padding: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

const App = () => {
  //The newName state is meant
  //for controlling the form input element.
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [persons, setPersons] = useState([]);

  //HandleFilter
  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  //Handle Input name
  const handleInputName = (e) => {
    setNewName(e.target.value);
  };
  //Handle Input Number
  const handleInputNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const existing = persons.find(
      (x) => x.name.toUpperCase().trim() === newName.toUpperCase().trim()
    );

    if (!existing) {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewNumber('');
    } else {
      alert(`${newName} is already added to phonebook`);
    }

    setNewName(' ');
    setNewNumber('');
  };

  useEffect(() => {
    axios
    .get('http://localhost:3003/persons')
    .then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Phonebook</Title>

        <Filter handleFilter={handleFilter} search={search} />
        <h3>Add new contact</h3>
        <PersonForm
          handleInputName={handleInputName}
          handleInputNumber={handleInputNumber}
          handleSubmit={handleSubmit}
          newName={newName}
          newNumber={newNumber}
        />

        <Persons persons={persons} search={search} />
      </Container>
    </>
  );
};

export default App;
