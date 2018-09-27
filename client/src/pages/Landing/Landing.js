import React, { Component } from 'react';
import API from "../../utils/API";
import { Row } from '../../components/Grid';
import GoogleLogin from 'react-google-login';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import "./Landing.css";

const responseGoogle = (response) => {
    console.log(response);
  }
const success = (response) => {
    console.log(response.googleId);
    // axios.get("/api/userprofile/"+ response.googleId).then(function (queryResp){
    //     console.log(queryResp);

    // })
    API.getUserProfile(response.googleId).then(function(queryResp){
        console.log(queryResp);
        if(!queryResp.data){
            console.log("user not present");
        }else{
            console.log(queryResp);
        }
    });
    }

class Landing extends Component {

    render () {

       const style = {
         margin: "0",
         fontWeight: "1100"
       }
        return (
    <div className="landing">
        <img className="landing__bear" src="bear.png"/>
        <h1 style={style} className="landing__name">Polar Bear</h1>
        <div className="landing__subscript">Your Networking Icebreaker</div>
         <div>
         <GoogleLogin
      clientId="761752582634-s5vmm4g3eckq4m07h8hi6r3evn37t4lb.apps.googleusercontent.com"
      onSuccess={success}
      onFailure={responseGoogle}
            >
            <FontAwesomeIcon icon={faGoogle}/>
            <span> Login/Sign Up With Google</span>
            </GoogleLogin>
            <Row/>
         </div>
    </div>
        )
    }
}

export default Landing;