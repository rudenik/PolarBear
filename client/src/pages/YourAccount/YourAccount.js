import React, { Component } from 'react';
import './YourAccount.css';
import API from '../../utils/API';
import {connect} from "react-redux";

class YourAccount extends Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            firstName: "",
            lastName:"",
            photo: "",
            // jobTitle: "",
            // jobStatus: "",
            card1: "",
            card2: "",
            card3:""
        }
    }
    handleChange = event => {

    }
    componentDidMount() {
        API.getUserProfile(1)
            // .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.data);
                    this.setState({
                        firstName: result.data.firstName,
                        lastName: result.data.lastName,
                        photo: result.data.photo,
                        // jobTitle: result.jobTitle,
                        // jobStatus: res,
                        card1: result.data.card1,
                        card2: result.data.card2,
                        card3: result.data.card3
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

=======

 //To access the current user from global state reference like this
  //this.props.curUser 


    
>>>>>>> 382a5ee26c1c38d4964dcb078d35de1999b5b750
  render() {
    return (
        <div className="youraccount__yourAccount youraccount__whiteBackground youracount__wrapper">
            <h2 className="youraccount__polarBlue youraccount__align-center youraccount__h2">Your Account</h2>
            <div className="youraccount__accountBox youraccount__orangeBackground">
                <div className="youraccount__yourAccount youraccount__whiteBackground">
                    <div className="youraccount__flexRow">
                        <img src = {this.state.photo} alt = "user headshot" className="youraccount__headShot"/ >
                        <div className="youraccount__flexCol youraccount__nameInfo">
                            <h3 className="youraccount__name youraccount__align-center youraccount__blackText youraccount__h3">{this.state.firstName} {this.state.lastName}</h3>
                            <h4 className="youraccount__currentTitle youraccount__align-center youraccount__blackText">{this.state.jobTitle}</h4>
                        </div>
                    </div>

{/* //TODO: add axios calls to update each field */}

{/* //TODO: if response includes card, make text box, add change button */}
                <div className="youraccount__flexCol youraccount__userInfo">
                        <form action="#" className="youraccount__flexCol">
                            <label for="jobStatus" className="visuallyhidden">Job Status</label>

                            <select name="jobStatus" id="jobStatus" >
                                <option value = "jobSeeker"
                                className="youraccount__align-center"> Looking
                                for a Job </option>
                                <option value="youraccount__hiringManager">I'm a Hiring Manager</option>
                            </select>
                            <div className="input-field">
                                <textarea id="skillsOne" class="materialize-textarea" data-length="140" maxLength="140">{this.state.card1}</textarea>
                                <label for="skillsOne">Card One</label>
                            </div>
                            <div className="input-field">
                                <textarea id="skillsTwo" class="materialize-textarea" data-length="140" maxLength="140">{this.state.card2}</textarea>
                                <label for="skillsTwo">Card Two</label>
                            </div>
                            <div className="input-field">
                                <textarea id="skillsThree" class="materialize-textarea" data-length="140" maxLength="140"></textarea>
                                <label for="skillsThree">Card Three</label>
                            </div>


                        </form>
                    </div>
                    </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      curUser: state
  }
}

export default connect(mapStateToProps)(YourAccount);
