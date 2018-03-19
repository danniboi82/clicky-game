import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Gameboard from '../Components/Gameboard/Gameboard';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Gameboard />
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
