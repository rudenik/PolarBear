import React, { Component } from 'react';
import "./Landing.css";



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
            <a className="waves-effect btn-large landing__button">Log In</a>
        </div>

    </div>
        )
    }
}

export default Landing;