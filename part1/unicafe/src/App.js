import React, { useState } from 'react';

import './App.css';

const Statistic = ({ text, value, className }) => {
  if (text === 'positive') {
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
        {value}
      </div>
    );
  }
};
const Statistics = ({ good, bad, neutral, total, average, positive }) => {
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>Good</td>
            <td>
              <Statistic className="g" value={good} />
            </td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>
              <Statistic className="b" value={bad} />
            </td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>
              <Statistic className="n" value={neutral} />
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <td>
              <Statistic className="n" value={total} />
            </td>
          </tr>
          <tr>
            <td>Average</td>
            <td>
              <Statistic className="b" value={average} />
            </td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>
              <Statistic className="b" value={positive} />%
            </td>
          </tr>
        </tbody>
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

  const goodFeedBackHandleClick = () => {
    return setGood(good + 1);
  };
  const neutralFeedBackHandleClick = () => {
    return setNeutral(neutral + 1);
  };
  const badFeedBackHandleClick = () => {
    return setBad(bad + 1);
  };

  const calcAverage = (a, b, c) => {
    const sum = Number(a * 1 + b * -1 + c * 0);
    let ave = sum / (a + b + c);

    return ave.toFixed(2);
  };

  const positive = () => {
    const calc = parseFloat((good / (good + neutral + bad)) * 100);
    return calc.toFixed(2);
  };

  const Button = ({ onClick, text }) => (
    <button className={text} onClick={onClick}>
      {text}
    </button>
  );

  return (
    <>
      <div className="App">
        <h2>Give FeedBack!</h2>
        <Button onClick={goodFeedBackHandleClick} text="good" />
        <Button onClick={badFeedBackHandleClick} text="bad" />
        <Button onClick={neutralFeedBackHandleClick} text="neutral" />

        <hr />
        <h2>Statistics</h2>
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          average={calcAverage(good, bad, neutral)}
          positive={positive()}
          total={good + neutral + bad}
        />
      </div>
    </>
  );
};

export default App;
