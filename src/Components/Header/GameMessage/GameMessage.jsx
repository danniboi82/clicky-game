import React, { Component } from "react";
import "./GameMessage.css";

// NavMessage renders an li tag containing an message for the user

class GameMessage extends Component {
  state = {
    message: "",
    animating: false
  };

  componentWillReceiveProps({ score, topScore }) {
    let newState = { animating: true };
    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score === 0 && topScore > 0) {
      newState.message = "incorrect";
    } else {
      newState.message = "correct";
    }
    this.setState(newState, () =>
      setTimeout(() => this.setState({ animating: false }), 500)
    );
  }

  renderMessage = () => {
    switch (this.state.message) {
      case "correct":
        return (<div style={{color: '#9be8bb'}}>"Mmm... Correct~ Donuts!!"</div>);
      case "incorrect":
        return (<div style={{color: '#e86161'}}>"DOHHHH!!! WRONG!!"</div>);
      default:
        return "Click an image to begin!";
    }
  };

  render() {
    return (
      <li style={{listStyle: 'none', fontSize: '25px'}}>
        {this.renderMessage()}
      </li>
    );
  }
}

export default GameMessage;
