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
    let card;
    this.state.userMatches[0] ?
    //TODO: add conditional rendering of border colour
    card =
      <div>
        {this.state.userMatches.map(match => (
        <UserCard 
          name={match.name}  
          job={match.job} 
          photo={match.photoUrl} 
          colour={match.type === 'employer' ? "row center-align valign-wrapper user__card__employer" :
          "row center-align valign-wrapper user__card__employee"}
        />
        ))}
      </div> :
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