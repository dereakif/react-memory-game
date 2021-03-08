import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Result.scss";
import EndLogo from "./../../assets/char.png";

class Result extends Component {
  render() {
    const { userName, score } = this.props.location;
    console.warn(this.props);
    return (
      <div className="result">
        <img src={EndLogo} alt="yugioh-char"></img>
        <p className="complete">Game Complete!</p>
        <p className="end-game">
          Thanks for playing, {userName ? userName : "Anon"}
        </p>
        <p className="end-game">Your Score: {score}</p>
      </div>
    );
  }
}

export default withRouter(Result);
