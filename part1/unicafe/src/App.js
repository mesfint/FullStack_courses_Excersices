import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./App.css";

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

  const totalHandleClick = () => {
    let g = setGood({ good });
    let n = setNeutral({ neutral });
    let b = setBad({ bad });
    setResult({ result: g + n + b });
  };
  // const averageHandleClick = () =>{
  //   let g =  setGood({good:good});
  //     let n = setNeutral({neutral:neutral});
  //     let b = setBad({bad:bad});
  //   let sum = setResult({result: g + n + b});

  // }

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
      good:<span className="g">{good}</span> neutral:
      <span className="n">{neutral}</span> bad:<span className="b"> {bad}</span>
      <span className="n">result:{good + neutral + bad}</span>
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
};

export default App;
