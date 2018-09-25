import React, { Component } from 'react';
import "./card.css";


class Card extends Component {
    render (props) {
        return (
            <div className="row center-align valign-wrapper match__card">
            {this.props.cardOne}
            </div>
        )
        // TODO: add carousel
    }
}

export default Card;