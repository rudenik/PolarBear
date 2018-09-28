import React, { Component } from 'react';
import UserCard from "./UserCard.js";
import { connect } from 'react-redux';


class UserMatches extends Component {
  //To access the current user from global state reference like this
    //this.props.curUser


  constructor(props){
    super(props);
    this.state = {
      user: '',
      userMatches: []
  };
  }
<<<<<<< HEAD

=======
>>>>>>> trika-dev
  // getUserMatches = (id) => {
  //   $.ajax({
  //     method: "GET",
  //     url: `/api/match/${id}`
  //   }).done(function (data) {
  //     this.setState({userMatches: data})
  //   })
  // }
<<<<<<< HEAD

=======
>>>>>>> trika-dev
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
const mapStateToProps = (state) => {
  return {
      curUser: state
  }
}


export default connect(mapStateToProps)(UserMatches);