import React from 'react';
import logo from './logo.svg';
import './App.css';
import PicComp from './PicComp'
import ButtonComp from './ButtonComp'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <PicComp />
      <ButtonComp />
    </div>
  );
}

export default App;
