import React, { Component } from "react";
import Back from "./../../assets/0.jpg";
import "./Card.scss";
class Card extends Component {
  render() {
    const { card, onClickHandler } = this.props;
    return (
      <div className="card">
        {
          <img
            onClick={onClickHandler}
            className={card.open ? "card-open" : "card-closed"}
            src={card.open ? card.img : Back}
            alt={card.name}
          />
        }
      </div>
    );
  }
}

export default Card;
