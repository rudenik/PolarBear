import React, { Component } from 'react';
import { InputText, InputArea } from "../../components/Form";
import { Row, Col, Container } from "../../components/Grid";
import { connect } from 'react-redux';
import "./SignUp.css";
import API from "../../utils/API";




class SignUp extends Component {

    state ={
        name:this.props.curUser.name,
        photoUrl: this.props.curUser.photoUrl,
        emStatus: "",
        eventCode: "",
        email: this.props.curUser.email,
        card1: "",
        card2: "",
        card3: "",
        id: this.props.curUser.googleId

    }
    componentDidMount = () => {
        this.setState({
            name: this.props.curUser.name,
            photoUrl: this.props.curUser.photoUrl
        })
        // console.log(this.state);
    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSignUpButton = event => {
        event.preventDefault();

        console.log(this.state);
        console.log("Sign up button pressed");
        console.log(this.state.card1);
        API.addUserProfile(this.state);

        //return/send info off. 
        this.setState({
            name:"",
            photoUrl: "",
            emStatus: "",
            eventCode: "",
            card1: "",
            card2: "",
            card3: ""
        })
    }

    render(){
        return (
            <div>
            <Container>
            <Row>
            <Col size="s1">
            <i className="prefix material-icons" style={{color:"#2667FF" , padding:"20px"}}>person</i>
            </Col>
            <Col size="s9">
            
            <input type="text" name="name" onChange={this.handleInputChange} defaultValue={this.state.name} value={this.state.name}/>
            <label style={{ color: "#2667FF" }}>Name</label>
            </Col>
            </Row>


            <Row>
            <Col size="s1">
            <i className="prefix material-icons" style={{color:"#2667FF" , padding:"20px"}}>photo</i>
            </Col>
            <Col size="s9">
            <input type="text" name="photoUrl" onChange={this.handleInputChange} defaultValue={this.state.photoUrl} value={this.state.photoUrl} />
            <label style={{ color: "#2667FF" }}>Picture (URL)</label>
            </Col>
            </Row>

            <Row>
            <Col size="s1">
            <i className="prefix material-icons" style={{color:"#2667FF" , padding:"20px"}}>work</i>
            </Col>
            <Col size="s9">
            <input type="text" name="emStatus" onChange={this.handleInputChange} value={this.state.emStatus} />
            <label style={{ color: "#2667FF" }}>Employement Status (true/false)</label> 
            </Col>
            </Row>

            <Row>
            <Col size="s1">
            <i className="prefix material-icons" style={{color:"#2667FF" , padding:"20px"}}>event</i>
            </Col>
            <Col size="s9">
            <input type="text" name="eventCode"  onChange={this.handleInputChange} value={this.state.eventCode}/>
            <label style={{ color: "#2667FF" }}>Event ID(Optional)</label>
            </Col>
            </Row>

            
            </Container>
            <Row>
            <Col size="s10 offset-s2">
            <p>Add up to 140 character to show 3 ‘highlights’</p>
            </Col>
            </Row>
            <Container>
            <Row>
            <Col size="input-field s9">
            <textarea name="card1" className="materialize-textarea" data-length="140" onChange={this.handleInputChange} required></textarea>
            <label style={{ color: "#2667FF" }}>Card One</label>
            
            </Col>
            </Row>
            <Row>
            <Col size="input-field s9">
            <textarea name="card2" className="materialize-textarea" data-length="140" onChange={this.handleInputChange} required></textarea>
            <label style={{ color: "#2667FF" }}>Card Two</label>
            </Col>
            </Row>
            <Row>
            <Col size="input-field s9">
            <textarea name="card3" className="materialize-textarea" data-length="140" onChange={this.handleInputChange}  required></textarea>
            <label style={{ color: "#2667FF" }}>Card Three</label>
            
            </Col>
            </Row>
            
            <Row>
            <Col size="s4 offset-s7">
            <button style={{ backgroundColor: "#2667FF" }} type="button" className="waves-effect waves-light btn" onClick={this.handleSignUpButton}>Sign Up</button> 
            </Col>
            </Row>
            </Container>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        curUser: state
    }
}

export default connect(mapStateToProps)(SignUp);


{/* <input fieldName="Picture (URL)"  name="photoUrl" inputId="photoUrl" matIcon="photo" onChange={this.handleInputChange} defaultValue={this.state.photoUrl}/>
            <input fieldName="Employment Status" name="emStatus" inputId="emStatus" matIcon="work" onChange={this.handleInputChange}/>
            <input fieldName="Event Code (optional)" name="eventCode" inputId="eventCode" matIcon="event" onChange={this.handleInputChange}/> */}
            {/* <InputArea textAreaID="Card3" label="Card Three" onChange={this.handleInputChange}/> */}
            //<InputArea textAreaID="Card1" label="Card One" onChange={this.handleInputChange}/> 

                        {/* <InputArea textAreaID="Card2" label="Card Two" onChange={this.handleInputChange}/> */}
