import React, { Component } from 'react';
import UserCard from "./UserCard.js"

class UserMatches extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      userMatches: []  
  };
  }
  getUserMatches = (id) => {
    $.ajax({
      method: "GET",
      url: `/api/match/${id}`
    }).done(function (data) {
      this.setState({userMatches: data})
    })
  }
  render() {
    return (
      //need to do a "for each" to loop through all user matches and create a user card per match
      <div>
        {this.state.userMatches.map(match => (
          <UserCard
        name = {this.state.userMatches[0].name}
        job = {this.state.userMatches[0].job}
        />
        ))}

      </div>
    );
  }
}

export default UserMatches;