import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

const App = () => {
  //save clicks of each button
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const goodHandleClick = () => {
  return setGood(good + 1);
}
const neutralHandleClick = () => {
  return setNeutral(neutral + 1);
}
const badHandleClick = () => {
  return setBad(bad + 1);
}

  return (
    <div className="App">
    <h2>Give FeedBack!</h2>
     
    <button className="good"  onClick={goodHandleClick}>Good </button>
    
    <button className="neutral"  onClick={neutralHandleClick}>Neutral </button>
   
    <button className="bad"  onClick={badHandleClick}> Bad</button>
     <hr />
     
     good:<span className="g">{good}</span>{' '}
     neutral:<span className='n'>{neutral}</span>{ ' '}
     bad:<span className='b'> {bad}</span>
      
      
    </div>
  );
}

export default App;
