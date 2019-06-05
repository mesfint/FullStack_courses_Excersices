import React from 'react';
import ReactDOM from 'react-dom';
{
  /*This code is part1<1.0--1.1>/step1*/
}

const App = () => {
  const total = 0;
  const exercises1 = 7;
  const exercises2 = 10;
  const exercises3 = 14;
  return (
    <>
      <Header course={'Half Stack application development'} />
      <Content part1={'Fundamentals of React'} />
      <Content part2={'Using Props to pass data'} />
      <Content part3={'State of Component'} />
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

const Content = props => {
  return (
    <div>
      <p>{props.part1}</p>
      <p>{props.part2}</p>
      <p>{props.part3}</p>
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
