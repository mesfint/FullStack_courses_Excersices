import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import App from './App';




const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <App  />
  </StrictMode>,
  rootElement
);


/* const notes = [
  {
    id: 1,
    content: 'HTML is Easy',
    date: new Date().toLocaleString(),
    important: false,
  },
  {
    id: 2,
    content: 'Browser can execute only JS',
    date: new Date().toLocaleString(),
    important: true,
  },
  {
    id: 3,
    content: 'GET ans POST are the most important methods of HTTP protocol',
    date: new Date().toLocaleString(),
    important: false,
  },
];
 */