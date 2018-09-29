import React, { Component } from 'react';
import API from "../../utils/API";
import { Row } from '../../components/Grid';
import GoogleLogin from 'react-google-login';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import "./Landing.css";

const responseGoogle = (response) => {
    console.log(response);
}
// const


class Landing extends Component {

    goToSignup = (respUser) => {
        console.log("goToSignup")
        this.props.history.push('/signup', respUser);
    }

    success = (response) => {
        console.log(response.googleId);
        // axios.get("/api/userprofile/"+ response.googleId).then(function (queryResp){
        //     console.log(queryResp);

        // })
        const that = this;
        API.getUserProfile(response.googleId).then(function (queryResp) {
            console.log(queryResp);
            if (!queryResp.data) {
                console.log("user not present");
                const curUser = {
                name: response.profileObj.name,
                photoUrl: response.profileObj.imageUrl,
                googleId: response.profileObj.googleId,
                email: response.profileObj.email,
                results: []
            }
                that.props.dispatch({
                    type: 'SET_USER',
                    curUser});
                that.goToSignup(response);
            } else {
                console.log(queryResp);
                const curUser = {
                    name: response.profileObj.name,
                    photoUrl: response.profileObj.imageUrl,
                    googleId: response.profileObj.googleId,
                    email: response.profileObj.email,
                    results: []
                }
                    that.props.dispatch({
                        type: 'SET_USER',
                        curUser});
                    that.goToSignup(response);
                that.props.history.push("/event");
            }
        });
    }




    render() {

        const style = {
            margin: "0",
            fontWeight: "1100"
        }
        return (
            <div className="landing">
                <img className="landing__bear" src="polarbear.png" alt="Logo" />
                <img src="./iceberg-2070977_1280.png" alt=""className="ice"/>
                <h1 style={style} className="landing__name">Polar Bear</h1>
                <div className="landing__subscript">Your Networking Icebreaker</div>

                <div>
                    <GoogleLogin
                        clientId="761752582634-s5vmm4g3eckq4m07h8hi6r3evn37t4lb.apps.googleusercontent.com"
                        onSuccess={this.success}
                        onFailure={responseGoogle}
                    >
                        <FontAwesomeIcon icon={faGoogle} />
                        <span> Login/Sign Up With Google</span>
                    </GoogleLogin>
                    <Row />
                </div>
            </div>
        )
    }
}


// Landing.propTypes = {
//     history: React.PropTypes.shape({
//       push: React.PropTypes.func.isRequired,
//     }),
//   };

export default connect()(Landing);