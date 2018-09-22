import React, { Component } from 'react';
import { InputText, InputArea } from "../../components/Form";
import { Row, Col, Container } from "../../components/Grid";
import "./SignUp.css";
import axios from 'axios';

class SignUp extends Component {

    state ={
        name:"",
        photoUrl: "",
        emStatus: "",
        eventCode: "",
        Card1: "",
        Card2: "",
        Card3: ""

    }
    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };
    handleSignUpButton = event => {
        event.preventDefault();
        
        upsertAuthor({
            UserId: 1,
            EventId: 1
          });
          
          function upsertAuthor(authorData) {
            axios.post("/api/users", authorData)
            .then((res) => {
              console.log(res)
            }).catch((error) => {
              console.log(error)
            })
          }
        

        console.log("Sign up button pressed");
        //return/send info off. 
        this.setState({
            name:"",
            photoUrl: "",
            emStatus: "",
            eventCode: "",
            Card1: "",
            Card2: "",
            Card3: ""
        })
    }

// give the button an appropriate className.

    render(){
        return (
            <div>
            <Container>
            <InputText fieldName="Name" inputID="name" matIcon="person" onChange={this.handleInputChange}/>
            <InputText fieldName="Picture (URL)" inputId="photoUrl" matIcon="photo" onChange={this.handleInputChange}/>
            <InputText fieldName="Employment Status" inputId="emStatus" matIcon="work" onChange={this.handleInputChange}/>
            <InputText fieldName="Event Code (optional)" inputId="eventCode" matIcon="event" onChange={this.handleInputChange}/>
            </Container>
            <Row>
            <Col size="s10 offset-s1">
            <p>Add up to 140 character to show 3 ‘highlights’</p>
            </Col>
            </Row>
            <Container>
            <Row>
            <Col size="s9 offset-s1">
            <InputArea textAreaID="Card1" label="Card One" onChange={this.handleInputChange}/>
            </Col>
            </Row>
            <Row>
            <Col size="s9 offset-s1">
            <InputArea textAreaID="Card2" label="Card Two" onChange={this.handleInputChange}/>
            </Col>
            </Row>
            <Row>
            <Col size="s9 offset-s1">
            <InputArea textAreaID="Card3" label="Card Three" onChange={this.handleInputChange}/>
            </Col>
            </Row>
            
            <Row>
            <Col size="s4 offset-s7">
            <button type="button" className="waves-effect waves-light btn" onClick={this.handleSignUpButton}>Sign Up</button> 
            </Col>
            </Row>
            </Container>
            </div>
        )
    }
}

export default SignUp;


