import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/Layout/globalStyles';

import { Notification } from './components/Notification';
import { Persons } from './components/Persons';
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import contactServices from './services/persons';
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
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    contactServices.getAll().then((initialContact) => {
      setPersons(initialContact);
    });
  }, []);

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

  //Add new contact

  const addPerson = (event) => {
    event.preventDefault();
    const contactObject = {
      name: newName,
      number: newNumber,
    };
    const checkName = (person) =>
      person.name === contactObject.name &&
      person.number === contactObject.number;
    if (!persons.some(checkName)) {
      contactServices.createPersons(contactObject).then((contactObject) => {
        setPersons(persons.concat(contactObject));
        setMessage(`${contactObject.name} successfully added`);
        setTimeout(() => {
          setMessage(null);
        }, 1500);
        setNewName('');
        setNewNumber('');
      });
    } else {
      const existedPerson = persons.find(checkName);
      setTimeout(() => {
        setErrorMessage(null);
      }, 1500);
      if (
        setErrorMessage(
          `${existedPerson.name} is in the contact list please replace  it with new one`
        )
      ) {
        contactServices
          .updatePersons(existedPerson.id, contactObject)
          .then((editedPersonData) => {
            setPersons(
              persons.map((person) =>
                person.id !== existedPerson.id ? person : editedPersonData
              )
            );
            setMessage(
              `${contactObject.name} successfully updated with number ${contactObject.number}`
            );
          })
          .catch((error) => {
            setErrorMessage(
              `${contactObject.name}  was already deleted from server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 1500);
          });
      }
    }
  };

  const handleDelete = (id) => {
    const idToRemove = persons.filter((n) => n.id !== id);

    window.confirm(`Are you sure to delete ${idToRemove[0].name}`);
    contactServices
      .deletePersons(id)
      .then(() => {
        setPersons(persons.filter((n) => n.id !== id));
        /*  setErrorMessage(`${idToRemove[0].name}  removed Successfully`); */
        setMessage(
          `${idToRemove[0].name}  successfully  deleted from contact list`
        );
        setTimeout(() => {
          setMessage(null);
        }, 1500);
      })
      .catch((error) => {
        setErrorMessage(
          `${idToRemove[0].name} has already been removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 1500);
        setPersons(persons.filter((n) => n.id !== id));
      });
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Notification message={message} errorMessage={errorMessage} />
        <Title>Phonebook</Title>

        <Filter handleFilter={handleFilter} search={search} />
        <h3>Add new contact</h3>
        <PersonForm
          handleInputName={handleInputName}
          handleInputNumber={handleInputNumber}
          handleSubmit={addPerson}
          newName={newName}
          newNumber={newNumber}
        />

        <Persons
          persons={persons}
          search={search}
          handleDelete={handleDelete}
        />
      </Container>
    </>
  );
};

export default App;
