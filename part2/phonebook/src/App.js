import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Mesfin Tegegne " }]);

  //The newName state is meant
  //for controlling the form input element.
  const [newName, setNewName] = useState("");
  //Submit name

  const handleSubmit = event => {
    event.preventDefault();

    const existing = persons.find(
      x => x.name.toUpperCase().trim() === newName.toUpperCase().trim()
    );

    if (!existing) {
      setPersons(persons.concat({ name: newName }));
    } else {
      alert(`${newName} is already added to phonebook`);
    }

    setNewName(" ");
  };
  const personArray = persons.map((i, index) => <li key={index}>{i.name}</li>);

  return (
    <div className="App">
      <h1 className="phonebook">Phonebook</h1>

      <form onSubmit={handleSubmit}>
        name:
        <input
          className="inputName"
          type="text"
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <br />
        <button type="submit" className="add">
          Add
        </button>
      </form>
      <div className="list">{personArray}</div>
    </div>
  );
};

export default App;
