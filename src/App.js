import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Board from "./components/Board/Board";
import Result from "./components/Result/Result";
import Nav from "./components/Nav/Nav";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <Nav home="Home" play="Play Anonymous" />
      <div>
        <Switch>
          <Route path="/game">
            <Board />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
