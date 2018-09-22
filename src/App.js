import React, { Component } from 'react';
import Navbar from './components/Navbar'
import GridContainer from './components/GridContainer.jsx'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <GridContainer />
      </div>
    );
  }
}

export default App;
