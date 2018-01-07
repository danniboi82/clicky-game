import React, { Component } from 'react';
import './App.css';
import Navbar from '../Components/Navbar/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Components/Header/Header';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navbar />
          <Header />
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
