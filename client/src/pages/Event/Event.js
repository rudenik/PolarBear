import React, { Component } from 'react'
import "./Event.css"

class Landing extends Component {

    state = {
        name: "",
        eventCode: "",
        jobSeeker:""
    };

     render() {
   return (
     <div className="Event">
        <Person />
        <div className="JobSeeker">
        <p>I am a:</p>
        </div>
     </div>
   );
 }

}