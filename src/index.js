import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contador from "./components/Contador.jsx"
import DibujosComplejosArray from './components/DibujosComplejosArray.jsx';
import DibujosComplejosRender from './components/DibujosComplejosRender.jsx';
import PadreDeporte from './components/PadreDeporte.jsx';
import PadreNumero from './components/SumaPractica/PadreNumero.jsx';
import Comics from './components/ComicsEjercicio/Comics.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contador inicio = "5"/>
    <DibujosComplejosArray />
    <DibujosComplejosRender/>
    <PadreDeporte></PadreDeporte>
    <PadreNumero></PadreNumero>
    <Comics></Comics>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
