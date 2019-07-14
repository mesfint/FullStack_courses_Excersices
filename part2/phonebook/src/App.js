import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Mesfin Tegegne" }]);

  //The newName state is meant
  //for controlling the form input element.
  const [newName, setNewName] = useState("");
  //Submit name

  const handleSubmit = event => {
    event.preventDefault();

    setNewName(event.target.value);
    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input
            type="text"
            value={newName}
            onChange={e => setNewName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>

      {persons.map(i => (
        <p key={i.name}>{i.name}</p>
      ))}
    </div>
  );
};

export default App;
