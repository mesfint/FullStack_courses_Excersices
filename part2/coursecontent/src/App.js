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
    },
    {
      name: "Redux",
      exercises: 11,
      id: 4
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
  const itelList = item.map(i => (
    <li key={i.id}>
      {i.name} {i.exercises}
    </li>
  ));
  const sum = item.map(i => i.exercises).reduce((a, b) => a + b);
  return (
    <div>
      <h1 className="title">{course.name}</h1>
      <ul>{itelList}</ul>
      <h3 className="total">total of {sum} exercises</h3>
    </div>
  );
};

export default App;
