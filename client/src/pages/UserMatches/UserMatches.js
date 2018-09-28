import React, { Component } from 'react';
import UserCard from "./UserCard.js";
import { connect } from 'react-redux';
import API from "../../utils/API";


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
  componentDidMount(){
    API.getUserMatches(this.state.user)
    .then(function(result){
      console.log(result);
      this.setState({
        userMatches: result.data
      });
    })
  }

  render() {
    return (
      <div>
        {this.state.userMatches.map(match => (
          <UserCard
        name = {match.name}
        job = {match.job}
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