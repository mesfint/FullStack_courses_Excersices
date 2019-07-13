import React from "react";
import "./App.css";

const course = {
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
      id: 1
    },
    {
      name: "Using props to pass data",
      exercises: 7,
      id: 2
    },
    {
      name: "State of a component",
      exercises: 14,
      id: 3
    }
  ]
};

const App = () => {
  return (
    <div className="App">
      <Course item={course.parts} />
    </div>
  );
};

const Course = ({ item }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {item.map(i => (
          <li key={i.id}>
            {i.name} {i.exercises}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
