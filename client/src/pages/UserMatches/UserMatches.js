import React, { Component } from 'react';
import UserCard from "./UserCard.js"

class UserMatches extends Component {
  render() {
    return (
      <div>
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    );
  }
}

export default UserMatches;