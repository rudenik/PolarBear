import React, { Component } from 'react';
import './aProfile.css';
import API from '../../utils/API';
import {connect} from "react-redux";

class aProfile extends Component {  
  render() {
    return (
        <div className="aProfile__aProfile aProfile__whiteBackground youracount__wrapper">
            <h2 className="aProfile__polarBlue aProfile__align-center aProfile__h2">Your Account</h2>
            <div className="aProfile__accountBox aProfile__orangeBackground">
                <div className="aProfile__aProfile aProfile__whiteBackground">
                    <div className="aProfile__flexRow">
                        <img src = "http://www.placepuppy.net/1p/100/100" alt = "user headshot" className="aProfile__headShot"/ >
                        <div className="aProfile__flexCol aProfile__nameInfo">
                            <h3 className="aProfile__name aProfile__align-center aProfile__blackText aProfile__h3">Lorem Ipsum</h3>
                            <h4 className="aProfile__currentTitle aProfile__align-center aProfile__blackText">Web Developer</h4>
                        </div>
                    </div>

{/* //TODO: add axios calls to update each field */}
                <div className="aProfile__flexCol aProfile__userInfo">
                        <form action="#" className="aProfile__flexCol">
                            <label for="jobStatus" className="visuallyhidden">Job Status</label>

                            <select name="jobStatus" id="jobStatus" >
                                <option value = "jobSeeker"
                                className="aProfile__align-center"> Looking
                                for a Job </option>
                                <option value="aProfile__hiringManager">I'm a Hiring Manager</option>
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

export default connect(mapStateToProps)(aProfile);
