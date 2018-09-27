import React, { Component } from 'react';
import Card from "./card"
import Button from "./button"

class MatchCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      i: 0,
      button: ''    
  };
  }

  cardDone = {
    "name": "No users left",
    "cardOne": "",
    "cardTwo": "",
    "cardThree": "",
  }

  buttonClick = (button) => {
    this.setState({button:button});
    const choice = this.state.button
    const i = this.state.i;
    const id = i.id;
    //update the current user's "match"
    //TODO: how to get id of "user One "
    updateMatchStatus(choice, id);
    i < this.state.users.length ? 
    this.setState({i: i+1}) : 
    this.setState({users: cardDone})
  }

  getUsers = (event) => {
    //TODO: need to use GET to get all users under a specific event
    // the current URL is probably not correct
    $.ajax({
      method: "GET",
      url: `/api/userprofile/${event}`
    }).done(function (data) {
      this.setState({users: data})
    })
  }

  updateMatchStatus = (choice, id) => {
    //this uses the "create match" API route, but not sure how that works
    //choice is match/pass based on button value, id is the id of the user that is being swiped ON
    $.ajax({
      method: "post",
      url: `/api/match`
    }).done(function (data) {
      console.log(data)
    })
  }

  render() {
    this.getUsers();
    return (
      <div>
      <Card
      name={this.state.users[this.state.i].name}
      cardOne={this.state.users[this.state.i].cards[0]}
      cardTwo={this.state.users[this.state.i].cards[1]}
      cardThree={this.state.users[this.state.i].cards[2]} />
      <Button 
      buttonClicked={this.buttonClick} />
      </div>
    );
  }
}

export default MatchCard;
