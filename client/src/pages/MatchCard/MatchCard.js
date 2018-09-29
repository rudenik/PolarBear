import React, { Component } from 'react';
import Card from "./card"
import Button from "./button"
import API from "../../utils/API";
import { connect } from 'react-redux';

class MatchCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      currentUser:1,
      i: 0,
      button: ''
  };
  }
  componentDidMount() {
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
    console.log(button)
    this.setState({
      button: button})
    this.setMatch(button);  
    const i = this.state.i
    this.setState({i: i+1}) 
  }

  setMatch(buttonVal) {
    const MatchData = {
      "useroneid":this.state.currentUser,
      "usertwoid":this.state.users[this.state.i].id,
      "status": buttonVal,
      "actionuser":this.state.currentUser
    };
    API.createMatch(MatchData)
    .then(
      (result) => {
        console.log(result)
      }
    )
  }
  render() {
    // console.log(this.props.curUser)
    let card;
    let buttons;
    let noUsers;
    if (this.state.i < this.state.users.length) {
      card =       
      <Card
      cardOne={this.state.users[this.state.i] ? this.state.users[this.state.i].card1 : ''}
      cardTwo={this.state.users[this.state.i] ? this.state.users[this.state.i].card2 : ''}
      cardThree={this.state.users[this.state.i] ? this.state.users[this.state.i].card3 : ''}
      />
      buttons = 
      <Button 
      buttonClicked={this.buttonClick} />
    } else {
      noUsers = <h1>Sorry, there are no users left!</h1>
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
const mapStateToProps = (state) => {
  return {
      curUser: state
  }
}

export default connect(mapStateToProps)(MatchCard);
