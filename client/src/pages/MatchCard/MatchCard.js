import React, { Component } from 'react';
import Header from "./header"
import Card from "./card"
import Button from "./button"

class MatchCard extends Component {
  render() {
    return (
      <div>
      <Header />
      <Card />
      <Button />
      </div>
    );
  }
}

export default MatchCard;