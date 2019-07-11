import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./App.css";

const Statistic = ({ text, value, className }) => {
  if (text === "positive") {
    return (
      <div>
        {text}
        <span className={className}>{value} %</span>
      </div>
    );
  } else {
    return (
      <div>
        {text}
        <span className={className}>{value}</span>
      </div>
    );
  }
};
const Statistics = props => {
  return (
    <div>
      <table className="table">
        <tr>
          <td>Good</td>
          <td>
            <Statistic className="g" value={props.good} />
          </td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>
            <Statistic className="b" value={props.bad} />
          </td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>
            <Statistic className="n" value={props.neutral} />
          </td>
        </tr>
        <tr>
          <td>Total</td>
          <td>
            <Statistic className="n" value={props.total} />
          </td>
        </tr>
        <tr>
          <td>Average</td>
          <td>
            <Statistic className="b" value={props.average} />
          </td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>
            <Statistic className="b" value={props.positive} />%
          </td>
        </tr>
      </table>
    </div>
  );
};

const App = () => {
  //save clicks of each button
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //const [result, setResult] = useState(0);

  const goodHandleClick = () => {
    return setGood(good + 1);
  };
  const neutralHandleClick = () => {
    return setNeutral(neutral + 1);
  };
  const badHandleClick = () => {
    return setBad(bad + 1);
  };

  const calcAverage = () => {
    const calc = parseFloat(
      (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)
    );
    return calc;
  };
  const total = () => {
    const calc = parseFloat((good / (good + neutral + bad)) * 100);
    return calc;
  };

  const Button = ({ onClick, text }) => (
    <button className={text} onClick={onClick}>
      {text}
    </button>
  );

  return (
    <div className="App">
      <h2>Give FeedBack!</h2>
      <Button onClick={goodHandleClick} text="good" />
      <Button onClick={badHandleClick} text="bad" />
      <Button onClick={neutralHandleClick} text="neutral" />

      <hr />
      <h2>Statistics</h2>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        average={calcAverage()}
        positive={total()}
        total={good + neutral + bad}
      />
    </div>
  );
};

export default App;
