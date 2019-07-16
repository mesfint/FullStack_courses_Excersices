import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";


    //Filter Form
   const  Filter = ({handleFilter, search}) => {
      return (
  
          <div className="search">
          Search By Name:
            <input
              className="searchInput"
              type="text"
              value={search}
              onChange={handleFilter}
            />
            </div>
      )
  }

  //Person input form

 const PersonForm = ({handleInputName,handleInputNumber,handleSubmit,newName,newNumber}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
        name:
        <input
          className="inputName"
          type="text"
          value={newName}
          onChange={handleInputName}
        />
        <br />
        number:
        <input
          className="inputNumber"
          type="text"
          value={newNumber}
          onChange={handleInputNumber}
        />
        <br />
        <button type="submit" className="add">
          Add
        </button>
      </form>


        </div>
    )
}
  //List of Persons
  const Persons = ({persons,search}) =>{

    //console.log(persons);
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
//console.log(personArray);

    return(
        <div className="list">
        {personArray}
      </div>

    )

  
}
  // App component

const App = () => {
  //The newName state is meant
  //for controlling the form input element.
  const [newName, setNewName] = useState(" ");
  const [newNumber, setNewNumber] = useState('00');
  const [search, setSearch] = useState(" ");
  const [persons, setPersons] = useState([]);
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
    setNewNumber('');
  };

  //Fetch Person data using axios library
  const hook = () =>{
    console.log('effect');

    axios.get('http://localhost:3001/persons')
         .then(response =>{
          console.log('resolved');

          setPersons(response.data);
           //console.log(persons);
         })

  }
  useEffect(hook,[])

  
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
