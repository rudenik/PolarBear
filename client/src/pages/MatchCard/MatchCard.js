import React, { Component } from 'react';
import Card from "./card"
import Button from "./button"
import example from "./example.json";

class MatchCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      example,
      i: 0,
      button: ''    
  };
  }
  buttonClick = (button) => {
    this.setState({button:button})
    const i = this.state.i;
    i < this.state.example.length ? this.setState({i: i+1}) : this.setState({i: 0})
  }

  render() {
    return (
      <div>
      <Card 
      name={this.state.example[this.state.i].name}
      cardOne={this.state.example[this.state.i].cards[0]}
      cardTwo={this.state.example[this.state.i].cards[1]}
      cardThree={this.state.example[this.state.i].cards[2]} />
      <Button 
      buttonClicked={this.buttonClick} />
      </div>
    );
  }
}

export default MatchCard;