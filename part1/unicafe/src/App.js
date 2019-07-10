import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./App.css";

const Statistics = ({ bad, good, neutral }) => {
  if (good == 0 && bad == 0 && neutral == 0) {
    return "No Feedback given!";
  } else {
    return (
      <div>
        good:<span className="g">{good}</span> neutral:
        <span className="n">{neutral}</span> bad:
        <span className="b"> {bad}</span>{" "}
        <span className="n">result: {good + neutral + bad}</span>
        <span className="n">
          <br />
          avarege:
          {typeof parseFloat(
            (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)
          ) === NaN
            ? 0
            : (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}
        </span>
        <br />
        <span className="g">
          Positive:{parseFloat((good / (good + neutral + bad)) * 100)}%
        </span>
      </div>
    );
  }
};

const App = () => {
  //save clicks of each button
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [result, setResult] = useState(0);

  const goodHandleClick = () => {
    return setGood(good + 1);
  };
  const neutralHandleClick = () => {
    return setNeutral(neutral + 1);
  };
  const badHandleClick = () => {
    return setBad(bad + 1);
  };

  return (
    <div className="App">
      <h2>Give FeedBack!</h2>
      <button className="good" onClick={goodHandleClick}>
        Good{" "}
      </button>
      <button className="neutral" onClick={neutralHandleClick}>
        Neutral{" "}
      </button>
      <button className="bad" onClick={badHandleClick}>
        {" "}
        Bad
      </button>
      <hr />
      <h2>Statistics</h2>
      {}
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
