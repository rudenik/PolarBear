import React, { Component } from 'react';
import './YourAccount.css';
import API from '../../utils/API';
import {connect} from "react-redux";

class YourAccount extends Component {

 //To access the current user from global state reference like this
  //this.props.curUser 


    
  render() {
    return (
        <div className="youraccount__yourAccount youraccount__whiteBackground youracount__wrapper">
            <h2 className="youraccount__polarBlue youraccount__align-center youraccount__h2">Your Account</h2>
            <div className="youraccount__accountBox youraccount__orangeBackground">
                <div className="youraccount__yourAccount youraccount__whiteBackground">
                    <div className="youraccount__flexRow">
                        <img src = "http://www.placepuppy.net/1p/100/100" alt = "user headshot" className="youraccount__headShot"/ >
                        <div className="youraccount__flexCol youraccount__nameInfo">
                            <h3 className="youraccount__name youraccount__align-center youraccount__blackText youraccount__h3">Lorem Ipsum</h3>
                            <h4 className="youraccount__currentTitle youraccount__align-center youraccount__blackText">Web Developer</h4>
                        </div>
                    </div>

{/* //TODO: add axios calls to update each field */}
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
                                <textarea id="skillsOne" class="materialize-textarea" data-length="140" maxlength="140"></textarea>
                                <label for="skillsOne">Card One</label>
                            </div>
                            <div className="input-field">
                                <textarea id="skillsTwo" class="materialize-textarea" data-length="140" maxlength="140"></textarea>
                                <label for="skillsTwo">Card Two</label>
                            </div>
                            <div className="input-field">
                                <textarea id="skillsThree" class="materialize-textarea" data-length="140" maxlength="140"></textarea>
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
