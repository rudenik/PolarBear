import React, { Component } from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import "./Landing.css";

const responseGoogle = (response) => {
    console.log(response);
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
             <a className="waves-effect btn-large landing__button">Sign Up</a>           
         </div>
         <div>
         <GoogleLogin
      clientId="761752582634-s5vmm4g3eckq4m07h8hi6r3evn37t4lb.apps.googleusercontent.com"
      
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
            >
            <FontAwesomeIcon icon={faGoogle}/>
            <span> Login With Google</span>
            </GoogleLogin>

    
         </div>
         <div>
            <a className="waves-effect btn-large landing__button">Log In</a>
        </div>
        
    </div>
        )
    }
}

export default Landing;