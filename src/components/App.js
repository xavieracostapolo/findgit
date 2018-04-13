import React, { Component } from 'react';
//import logo from './global/images/logo.svg';
import './global/css/App.css';

//Components
import Inicio from './global/Inicio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Inicio />
      </div>
    );
  }
}

export default App;
