import React, { useState } from "react";
import Filter  from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import "./App.css";

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: "Mesfin Tegegne ",number: '045-123456' },
    { name: "Timiro Ali ",number: '046-234567' },
    { name: "Nathan Mesfin ",number: '044-123000' },
    { name: "Hidaya Baba ",number: '049-096456' }
  
  ]);


  //The newName state is meant
  //for controlling the form input element.
  const [newName, setNewName] = useState(" ");
  const [newNumber, setNewNumber] = useState('0000');
  const [search, setSearch] = useState(" ");
  //Submit name
    //HandleFilter
    const handleFilter = (e)=>{ setSearch(e.target.value)}

    //Handle Input name
    const handleInputName = (e)=>{setNewName(e.target.value)}
    //Handle Input Number
    const handleInputNumber = (e) =>{setNewNumber(e.target.value)}

  const handleSubmit = event => {
    event.preventDefault();

    const existing = persons.find(
      x => x.name.toUpperCase().trim() === newName.toUpperCase().trim()
    );

    if (!existing) {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewNumber('');
    } else {
      alert(`${newName} is already added to phonebook`);
    }

    setNewName(" ");
  };
  
  return (


    <div className="App">
    
      <h1 className="phonebook">Phonebook</h1>

        <Filter handleFilter={handleFilter} search={search} />
        <h3>Add new contact</h3>
        <PersonForm handleInputName={handleInputName} handleInputNumber={handleInputNumber} handleSubmit={handleSubmit} newName={newName} newNumber={newNumber}/>
        <h2>Numbers</h2>

         <Persons persons = {persons} search={search} /> 
      
      
    </div>
  );
};

export default App;
