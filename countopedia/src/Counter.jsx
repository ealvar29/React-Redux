import React from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefense = this.handleDefense.bind(this);
    this.state = {
      count: 0,
    };
  }
  handleAttack() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }
  handleDefense() {
    this.setState((previousState) => {
      return {
        count: previousState.count - 1,
      };
    });
  }

  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score: {this.state.count}</h1>
        <p>You win at +10 points and lose at -10 points.</p>
        <button onClick={this.handleAttack} style={{ width: "200px" }}>
          +1
        </button>
        <button onClick={this.handleDefense} style={{ width: "200px" }}>
          -1
        </button>
      </div>
    );
  }
}
