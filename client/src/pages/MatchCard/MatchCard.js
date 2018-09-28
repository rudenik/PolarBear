import React, { Component } from 'react';
import Card from "./card"
import Button from "./button"
import API from "../../utils/API";

class MatchCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      currentUser:'',
      i: 0,
      button: ''
  };
  }
  componentDidMount() {
//TODO: first parameter will actually be id of logged in user
    API.getEventMatches(1,1)
      .then(
        (result) => {
          this.setState({
            users: result.data
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  buttonClick = (button) => {
    this.setState({button:button});
    console.log(this);
    const choice = this.state.button
    const i = this.state.i
    //TODO:update the current user's "match"
    // API.createMatch: function (MatchData)
    this.setState({i: i+1}) 
  }

//   MatchData: {
//     "useroneid": "1234", 
//     "usertwoid": "24434", 
//     "status": "Match", or "Decline"
//     "actionuser": "1234"
//  }

  render() {
    let card;
    let buttons;
    let noUsers;
    if (this.state.i < this.state.users.length) {
      card =       
      <Card
      cardOne={this.state.users[this.state.i] ? this.state.users[this.state.i].card1 : ''}
      cardTwo={this.state.users[this.state.i] ? this.state.users[this.state.i].card2 : ''}
      cardThree={this.state.users[this.state.i0] ? this.state.users[this.state.i].card3 : ''}
      />
      buttons = 
      <Button 
      buttonClicked={this.buttonClick} />
    } else {
      noUsers = <p>Sorry, there are no users left!</p>
    }
    return (
      <div> 
        {card} 
        {buttons}
        {noUsers}
      </div>
    );
  }
}

export default MatchCard;
