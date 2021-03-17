import React from 'react';
import ReactDOM from 'react-dom';
/*1.5: course information step5*/
const App = () => {
  const total = 0;

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};
const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
      <p>{props.course.parts[0].name}</p>
      <p>{props.course.parts[1].name}</p>
      <p>{props.course.parts[2].name}</p>
    </div>
  );
};
const Total = (props) => {
  return (
    <div>
      <p>
        {'Total: ' +
          (props.course.parts[0].exercises +
            props.course.parts[1].exercises +
            props.course.parts[2].exercises)}
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

export default App;
