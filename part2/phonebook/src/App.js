import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Mesfin Tegegne ",number: '045-123456' },
    { name: "Timiro Ali ",number: '046-234567' },
    { name: "Nathan Mesfin ",number: '044-123000' },
    { name: "Hidaya Baba ",number: '049-096456' }
  
  ]);


  //The newName state is meant
  //for controlling the form input element.
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState('0000');
  const [search, setSearch] = useState(' ');
  //Submit name

  const handleSubmit = event => {
    event.preventDefault();

    const existing = persons.find(
      x => x.name.toUpperCase().trim() === newName.toUpperCase().trim()
    );

    if (!existing) {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewNumber();
    } else {
      alert(`${newName} is already added to phonebook`);
    }

    setNewName(" ");
  };
  //filter person from the list of persons based on the value={search}
  
  const filteredPerson = persons.filter((person) =>{
    //indexOf->searching the index of string/character
      return person.name.toLowerCase().indexOf(search) !== -1;
    }
  );
  const personArray = filteredPerson.map((i, index) => (
    <li key={index}>
      {i.name}{' | '} {i.number}
    </li>
  ));

  return (
    <div className="App">
      <h1 className="phonebook">Phonebook</h1>
      <div className="search">
      Search By Name:
        <input
          className="searchInput"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        </div>
        <h3>Add new contact</h3>
        <br />
      <form onSubmit={handleSubmit}>
        name:
        <input
          className="inputName"
          type="text"
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <br />
        number:
        <input
          className="inputNumber"
          type="text"
          value={newNumber}
          onChange={e => setNewNumber(e.target.value)}
        />
        <br />
        <button type="submit" className="add">
          Add
        </button>
      </form>
      <div className="list">
        <h2>Numbers</h2>
        {personArray}
      </div>
    </div>
  );
};

export default App;
