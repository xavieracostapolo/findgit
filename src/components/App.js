import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './global/css/App.css';

//Components
import Inicio from './global/Inicio';
import Buscar from './global/Buscar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Container">
          <Route exact path="/" component={Inicio} />
          <Route path="/buscar" component={Buscar} />
        </div>
      </Router>
    );
  }
}

export default App;
