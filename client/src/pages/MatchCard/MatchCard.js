import React, { Component } from 'react';
import Card from "./card"
import Button from "./button"
import API from "../../utils/API";

class MatchCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      card1: '',
      card2: '',
      card3: '',
      i: 0,
      button: ''    
  };
  }
  componentDidMount() {
    API.getUserProfile(1)
      .then(
        (result) => {
          this.setState({
            firstName: result.data.firstName,
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  cardDone = {
    "name": "No users left",
    "cardOne": "",
    "cardTwo": "",
    "cardThree": "",
  }

  buttonClick = (button) => {
    this.setState({button:button});
    console.log(this);
    const choice = this.state.button
    const i = this.state.i
    //update the current user's "match"
    //TODO: how to get id of "user One "
    // updateMatchStatus(choice, id);
    // i < this.state.users.length ? 
    this.setState({i: i+1}) 
    // : this.setState({users: this.cardDone})
  }

  // updateMatchStatus = (choice, id) => {
  //   //this uses the "create match" API route, but not sure how that works
  //   //choice is match/pass based on button value, id is the id of the user that is being swiped ON
  //   $.ajax({
  //     method: "post",
  //     url: `/api/match`
  //   }).done(function (data) {
  //     console.log(data)
  //   })
  // }

  render() {
    return (
      <div>
      <Card
      name={this.state.firstName}
      cardOne={this.state.firstName}
      cardTwo='hey'
      cardThree='hey'
      />
      <Button 
      buttonClicked={this.buttonClick} />
      </div>
    );
  }
}

export default MatchCard;
