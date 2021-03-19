import React from 'react';

const Course = ({ item }) => {
  //console.log("item", item);
  const sum = item.parts.reduce((a, b) => a + b.exercises, 0);

  const itemList = item.parts.map((part) => (
    <li key={part.id}>
      {part.name} {part.exercises}
    </li>
  ));

  return (
    <div>
      <h3 className="courseName">{item.name}</h3>
      <ul>{itemList}</ul>
      <h3 className="total">total {sum} exercises</h3>
    </div>
  );
};

export default Course;
