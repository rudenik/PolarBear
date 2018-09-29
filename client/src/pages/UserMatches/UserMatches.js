import React, { Component } from 'react';
import UserCard from "./UserCard.js";
import { connect } from 'react-redux';
import API from "../../utils/API";

class UserMatches extends Component {
  constructor(props){
    super(props);
    this.state = {
    user: this.props.curUser,
    userMatches:'',
    matchProfiles:[]
    };
  }

  componentDidMount() {
    API.getUserMatches( this.state.user.id )
    .then(
      (result) => {
        this.setState({
          userMatches: result.data
        });
        //for each of the user matches:
        result.data.map( (ele) => {
          console.log(ele)
          const userId = ele.user_one_id
          //getting profiles of all the matches
          API.getUserProfile(userId)
          .then(
            (result) => {
              console.log(result)
              const data = result.data;
              const matchProfiles = this.state.matchProfiles;
              this.setState({
                matchProfiles: [...matchProfiles, data]
              });

              // console.log(data.name, data.isEmployee, data.photoUrl);

            }
          )
        })
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
   }

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