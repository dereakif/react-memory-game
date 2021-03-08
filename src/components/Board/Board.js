import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Card from "./../Card/Card";

import Logo from "./../../assets/logo1.png";
import card1 from "./../../assets/1.jpg";
import card2 from "./../../assets/2.jpg";
import card3 from "./../../assets/3.jpg";
import card4 from "./../../assets/4.jpg";
import card5 from "./../../assets/5.jpg";
import card6 from "./../../assets/6.jpg";
import card7 from "./../../assets/7.jpg";
import card8 from "./../../assets/8.jpg";
import card9 from "./../../assets/9.jpg";
import card10 from "./../../assets/10.jpg";

import "./Board.scss";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { name: "card1", id: 1, img: card1, open: false, isMatched: false },
        { name: "card2", id: 2, img: card2, open: false, isMatched: false },
        { name: "card3", id: 3, img: card3, open: false, isMatched: false },
        { name: "card4", id: 4, img: card4, open: false, isMatched: false },
        { name: "card5", id: 5, img: card5, open: false, isMatched: false },
        { name: "card6", id: 6, img: card6, open: false, isMatched: false },
        { name: "card7", id: 7, img: card7, open: false, isMatched: false },
        { name: "card8", id: 8, img: card8, open: false, isMatched: false },
        { name: "card9", id: 9, img: card9, open: false, isMatched: false },
        { name: "card10", id: 10, img: card10, open: false, isMatched: false },
        { name: "card1", id: 11, img: card1, open: false, isMatched: false },
        { name: "card2", id: 12, img: card2, open: false, isMatched: false },
        { name: "card3", id: 13, img: card3, open: false, isMatched: false },
        { name: "card4", id: 14, img: card4, open: false, isMatched: false },
        { name: "card5", id: 15, img: card5, open: false, isMatched: false },
        { name: "card6", id: 16, img: card6, open: false, isMatched: false },
        { name: "card7", id: 17, img: card7, open: false, isMatched: false },
        { name: "card8", id: 18, img: card8, open: false, isMatched: false },
        { name: "card9", id: 19, img: card9, open: false, isMatched: false },
        { name: "card10", id: 20, img: card10, open: false, isMatched: false },
      ],
      shuffledCards: [],
      matchedCards: [],
      flippedCards: [],
      score: 20,
    };
  }
  componentDidMount() {
    this.setState({
      shuffledCards: this.state.cards.sort(() => Math.random() - 0.5),
    });
  }

  check() {
    let shuffledCards = this.state.shuffledCards;
    let matchedCards = this.state.matchedCards;
    if (this.state.flippedCards[0] && this.state.flippedCards[1]) {
      if (this.state.flippedCards[0].name === this.state.flippedCards[1].name) {
        shuffledCards.find(
          (item) => item.id === this.state.flippedCards[0].id
        ).isMatched = true;
        shuffledCards.find(
          (item) => item.id === this.state.flippedCards[1].id
        ).isMatched = true;
        matchedCards.push(
          this.state.flippedCards[0].id,
          this.state.flippedCards[1].id
        );
      } else {
        shuffledCards.find(
          (item) => item.id === this.state.flippedCards[0].id
        ).open = false;
        shuffledCards.find(
          (item) => item.id === this.state.flippedCards[1].id
        ).open = false;
        this.setState({ score: this.state.score - 1 });
      }
    }
    this.setState({
      flippedCards: [],
      matchedCards: matchedCards,
    });
  }
  onClickHandler = (card, i) => {
    if (this.state.flippedCards.length === 2) {
      setTimeout(() => {
        this.check();
      }, 800);
    } else {
      let flippedCards = this.state.flippedCards;
      let shuffledCards = this.state.shuffledCards;
      shuffledCards[i].open = true;
      flippedCards.push(card);
      this.setState({
        flippedCards,
        shuffledCards,
      });
      if (this.state.flippedCards.length === 2) {
        setTimeout(() => {
          this.check();
        }, 800);
      }
    }
  };
  render() {
    if (this.state.matchedCards.length === 20 || this.state.score === 0) {
      const newTo = {
        pathname: "",
        userName: this.props.location.name,
        score: this.state.score,
      };
      this.state.matchedCards.length === 20
        ? (newTo.pathname = "/result")
        : (newTo.pathname = "/result");
      return <Redirect to={newTo} />;
    }
    return (
      <div className="container">
        <img className="logo" src={Logo} alt="logo"></img>
        <h1>Yu-Gi-Oh! Memory Game</h1>
        <p className="game-info">
          Goodluck,{" "}
          {this.props.location.name ? this.props.location.name : "Anon"}!
        </p>
        <p className="game-info">Your score: {this.state.score} </p>
        <div className="card-container">
          {this.state.shuffledCards.map((item, index) => (
            <Card
              key={index}
              onClickHandler={() => this.onClickHandler(item, index)}
              card={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Board);
