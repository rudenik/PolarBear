import React, { Component } from 'react';
import UserCard from "./UserCard.js";
import { connect } from 'react-redux';
import API from "../../utils/API";

class UserMatches extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      userMatches: []
  };
  }
  // getUserMatches = (id) => {
  //   $.ajax({
  //     method: "GET",
  //     url: `/api/match/${id}`
  //   }).done(function (data) {
  //     this.setState({userMatches: data})
  //   })
  // }
  render() {
    let card;
    this.state.userMatches[0] ?
    card =
    <div>
      {this.state.matchProfiles.map(user => (
        <UserCard
        key = {user.id}
        name={user.name}
        image={user.photoUrl}
        colour={user.isEmployee === false  ? "row center-align valign-wrapper user__card__employer" :
          "row center-align valign-wrapper user__card__employee"}

        />
      ))}
    </div>
:
    card =
      <div>
        <UserCard
          name={"name"}
          job={"job"}
          photo={"http://www.placepuppy.net/1p/100/100"}
          //changing class from employer/employee changes from orange to blue
          colour={"row center-align valign-wrapper user__card__employer"}
        />
        <UserCard
          name={"name2"}
          job={"job2"}
          photo={"http://www.placepuppy.net/1p/100/100"}
          //changing class from employer/employee changes from orange to blue
          colour={"row center-align valign-wrapper user__card__employee"}
        />
      </div>

    return (
      <div>
        {card}
      </div>
    );
  }
}
  const mapStateToProps = (state) => {
    return {
      curUser: state
    }
}


export default connect(mapStateToProps)(UserMatches);