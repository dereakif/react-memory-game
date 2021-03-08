import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
class Nav extends Component {
  state = {};
  render() {
    const { home, play } = this.props;
    return (
      <div className="navbar">
        <Link className="navbar-links" to="/">
          {home}
        </Link>
        <Link className="navbar-links" to="/game">
          {play}
        </Link>
      </div>
    );
  }
}

export default Nav;
