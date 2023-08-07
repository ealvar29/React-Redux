import React from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefense = this.handleDefense.bind(this);
    this.handleRandomPlay = this.handleRandomPlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
      lastPlay: "",
      gameStatus: "",
    };
  }
  handleAttack() {
    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
        gameStatus: newCount >= 10 ? "You won" : "",
        lastPlay: newCount >= 10 ? "Attack" : "",
      };
    });
  }

  handleDefense() {
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
        gameStatus: newCount <= -10 ? "You lost" : "",
        lastPlay: newCount <= -10 ? "Defense" : "",
      };
    });
  }

  handleRandomPlay() {
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
      this.handleAttack();
    } else {
      this.handleDefense();
    }
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score: {this.state.count}</h1>
        <p>You win at +10 points and lose at -10 points.</p>
        <p>Last Play: {this.state.lastPlay}</p>
        <p>Game Status: {this.state.gameStatus}</p>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={attack}
            onClick={this.handleAttack}
          />
        </div>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={defend}
            onClick={this.handleDefense}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            onClick={this.handleRandomPlay}
            className="btn btn-secondary w-100 mt-2"
          >
            Random Play
          </button>
          <br />
          <button
            onClick={this.handleReset}
            className="btn btn-warning w-100 mt-2"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
