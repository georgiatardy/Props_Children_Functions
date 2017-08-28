import React, { Component } from 'react';
import '../styles/App.css';

import Baselayout from '../components/Baselayout.js';
import Parentcomponent from '../components/Parentcomponent.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Baselayout>
        <Parentcomponent />
        </Baselayout>
      </div>
    );
  }
}

export default App;
