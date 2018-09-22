import React, { Component } from 'react';
import './YourAccount.css';

class YourAccount extends Component {
  render() {
    return (
        <div className="yourAccount whiteBackground wrapper">
            <h2 className="polarBlue align-center">Your Account</h2>
            <div className="accountBox orangeBackground">
                <div className="yourAccount whiteBackground">
                    <div className="flexRow">
                        <img src = "http://www.placepuppy.net/1p/100/100" alt = "user headshot" className="headShot"/ >
                        <div className="flexCol nameInfo">
                            <h3 className="name align-center">Lorem Ipsum</h3>
                            <h4 className="currentTitle align-center">Web Developer</h4>
                        </div>
                    </div>

                <div className="flexCol userInfo">
                        <form action="#" className="flexCol">
                            <label for="jobStatus" className="visuallyhidden">Job Status</label>

                            <select name="jobStatus" id="jobStatus" >
                                <option value = "jobSeeker"
                                className="align-center"> Looking
                                for a Job </option>
                                <option value="hiringManager">I'm a Hiring Manager</option>
                            </select>

                            <label for="skillsOne" className="visuallyhidden">First Tweet</label>
                            <input type="text" name="firstTweet" id="firstTweet" placeholder="First Tweet"/>

                            <label for="secondTweet" className="visuallyhidden">Second Tweet</label>
                            <input type="text" name="secondTweet" id="secondTweet" placeholder="Second Tweet"/>

                            <label for="thirdTweet" className="visuallyhidden">Third Tweet</label>
                            <input type="text" name="jobStatus" id="jobStatus" placeholder="Job Status"/>

                        </form>
                    </div>
                    </div>
            </div>
        </div>
    )
  }
}

export default YourAccount;
