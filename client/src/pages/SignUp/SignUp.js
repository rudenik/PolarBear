import React, { Component } from 'react';
import { InputText, InputArea } from "../../components/Form";
import { Row, Col, Container } from "../../components/Grid";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import "./SignUp.css";

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
//handle input change
// Form submit
// add the submit button <div className="Button" type="Submit">Submit</div> looks like shit. What does materialize have for buttons

    render(){
        return (
            <div>
            <InputText fieldName="Name" inputID="name" matIcon="person" onChange={this.handleInputChange}/>
            <InputText fieldName="Picture (URL)" inputId="photoUrl" matIcon="photo" onChange={this.handleInputChange}/>
            <InputText fieldName="Employment Status" inputId="emStatus" matIcon="work" onChange={this.handleInputChange}/>
            <InputText fieldName="Event Code (optional)" inputId="eventCode" matIcon="event" onChange={this.handleInputChange}/>
            <Row>
            <Col size="s9">
            <p>Add up to 140 character to show 3 ‘highlights’</p>
            </Col>
            </Row>
            <InputArea textAreaID="Card1" label="Card One" onChange={this.handleInputChange}/>
            <InputArea textAreaID="Card2" label="Card Two" onChange={this.handleInputChange}/>
            <InputArea textAreaID="Card3" label="Card Three" onChange={this.handleInputChange}/>
            
            </div>
        )
    }
}

export default SignUp;


//<MaterialIcon icon="person" />