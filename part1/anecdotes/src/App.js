import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css';

const App = props => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const handlePoints = () => {
    const copy = points.map((point, i) => (i === selected ? point + 1 : point));
    setPoints(copy);
  };

  return (
    <div className="App">
      <p className="quotes">{props.anecdotes[selected]}</p>
      <p className="threeVote">
        has <span className="voteValue">{points[selected]}</span> votes
      </p>
      <button className="voteButton"
       onClick={handlePoints}>vote</button>
      <button
      className="randomButton" 
        onClick={
          () => setSelected(() => Math.floor(Math.random() * anecdotes.length)) // or just Math.floor(Math.random() * anecdotes.length)
        }
      >
        next anecdotes
      </button>
      <h3>Anecdotes with most Vote</h3>
      {anecdotes[points.indexOf(Math.max.apply(Math, points))]}
      <div>{Math.max.apply(Math, points)}</div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
