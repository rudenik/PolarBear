import React, { Component } from 'react'
import "./Landing.css"

class Landing extends Component {

    state = {
        name:"Polar Bear",
        tag:"Your Networking Icebreaker",
        buttonSignup:"",
        buttonLogin:""
    };

 render() {
   return (
     <div className="Landing">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age = {this.state.persons[2].age} />
     </div>
   );
 }
}