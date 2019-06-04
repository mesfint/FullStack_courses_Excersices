import React from 'react';
import ReactDOM from 'react-dom';
{
  /*This code is part1-1.2/step1*/
}

const App = () => {
  const total = 0;
  const exercises1 = 7;
  const exercises2 = 10;
  const exercises3 = 14;
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const part2 = 'Using props to pass data';
  const part3 = 'State of a component';
  return (
    <>
      <Header course={course} />
      <Part1 part1={part1} />
      <Part2 part2={part2} />
      <Part3 part3={part3} />
      <Total
        total={'total exercises: ' + (exercises1 + exercises2 + exercises3)}
      />
    </>
  );
};
const Header = props => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part1 = props => {
  return (
    <div>
      <p>{props.part1}</p>
      <p>{props.exercises1}</p>
    </div>
  );
};
const Part2 = props => {
  return (
    <div>
      <p>{props.part2}</p>
      <p>{props.exercises2}</p>
    </div>
  );
};
const Part3 = props => {
  return (
    <div>
      <p>{props.part3}</p>
      <p>{props.exercises3}</p>
    </div>
  );
};

const Total = props => {
  return (
    <div>
      <p>{props.exercises1}</p>
      <p>{props.exercises2}</p>
      <p>{props.exercises3}</p>
      <p>{props.total}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

export default App;
