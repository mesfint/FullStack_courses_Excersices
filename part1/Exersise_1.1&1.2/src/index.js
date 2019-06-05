import React from 'react';
import ReactDOM from 'react-dom';
{
  {
    /*1.4: course information step4*/
  }
}

const App = () => {
  const total = 0;

  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};
const Header = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
const Content = props => {
  return (
    <div>
      <p>{props.parts[0].name}</p>
      <p>{props.parts[1].name}</p>
      <p>{props.parts[2].name}</p>
    </div>
  );
};
const Total = props => {
  return (
    <div>
      <p>
        {'Total: ' +
          (props.parts[0].exercises +
            props.parts[1].exercises +
            props.parts[2].exercises)}
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

export default App;
