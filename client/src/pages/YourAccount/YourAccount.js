import React, { Component } from 'react';
import './YourAccount.css';
import API from '../../utils/API';
import {connect} from "react-redux";

class YourAccount extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            firstName: "",
            lastName:"",
            photo: "",
            // jobTitle: "",
            jobStatus: 'employer',
            card1: "",
            card2: "",
            card3:""
        }
    }
    handleChange = event => {

    }
    componentDidMount() {
        API.getUserProfile(this.props.curUser.googleId)
            .then(
                (result) => {
                    console.log(this.props.curUser);
                    this.setState({
                        name: this.props.curUser.name,
                        photo: this.props.curUser.photoUrl,
                        // jobTitle: result.jobTitle,
                        // jobStatus: res,
                        card1: this.props.curUser.card1,
                        card2: this.props.curUser.card2,
                        card3: this.props.curUser.card3
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


 //To access the current user from global state reference like this
  //this.props.curUser



  render() {

 const {jobStatus}=this.state;

    return (
        <div className="youraccount__yourAccount youraccount__whiteBackground youracount__wrapper">
            <h2 className="youraccount__polarBlue youraccount__align-center youraccount__h2">Your Account</h2>

            <div className={jobStatus === 'employer' ? "youraccount__blueBackground youraccount__accountBox" : "youraccount__orangeBackground youraccount__accountBox"} >


                <div className="youraccount__yourAccount youraccount__whiteBackground">
                    <div className="youraccount__flexRow">
                        <img src = {this.state.photo} alt = "user headshot" className="youracc__headShot"/ >
                        <div className="youraccount__flexCol youraccount__nameInfo">
                            <h3 className="youraccount__name youraccount__align-center youraccount__blackText youraccount__h3">{this.state.name}</h3>
                            <h4 className="youraccount__currentTitle youraccount__align-center youraccount__blackText">{this.state.jobTitle || "Job Title"}</h4>
                        </div>
                    </div>

                <div className="youraccount__flexCol youraccount__userInfo">

                            <div className="youraccount__align-center">{this.props.jobStatus || 'Looking for a job'}</div>
                            <div className="input-field">
                                <p>{this.state.card1}</p>
                            </div>
                            <div className="input-field">
                                <p>{this.state.card2}</p>
                            </div>
                            <div className="input-field">
                                <p>{this.state.card3}</p>
                            </div>

                    </div>
                    </div>
                <button className="youraccount__align-center youraccount__blueButton">Modify</button>
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
