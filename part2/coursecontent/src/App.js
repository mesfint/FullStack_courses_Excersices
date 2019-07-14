import React from "react";
import "./App.css";

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
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
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2
      }
    ]
  }
];

const App = () => {
  //console.log(courses);
  const elements = courses.map(item => <Course key={item.id} item={item} />);
  return (
    <div className="App">
      <h1>Web development curriclum</h1>
      {elements}
    </div>
  );
};

const Course = ({ item }) => {
  //console.log("item", item);
  const sum = item.parts.reduce((a, b) => a + b.exercises, 0);

  const itemList = item.parts.map(i => (
    <li key={i.id}>
      {i.name} {i.exercises}
    </li>
  ));

  return (
    <div>
      <h3 className="courseName">{item.name}</h3>
      <ul>{itemList}</ul>
      <h3 className="total">total of {sum} exercises</h3>
    </div>
  );
};

export default App;
