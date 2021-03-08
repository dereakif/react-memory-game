import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeLogo from "./../../assets/yugioh-hair.png";

import "./Home.scss";
class Home extends Component {
  state = {
    name: "",
  };

  render() {
    return (
      <div className="home-container">
        <img src={HomeLogo} alt="yugioh-char-img"></img>
        <input
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              this.props.history.push({
                pathname: "/game",
                name: this.state.name,
              });
            }
          }}
          onChange={(e) => this.setState({ name: e.target.value })}
          placeholder="Enter your name"
        ></input>
        <Link
          className="start-link"
          to={{ pathname: "/game", name: this.state.name }}
        >
          Start the Game!
        </Link>
      </div>
    );
  }
}

export default withRouter(Home);
