import React from "react";
// import MaterialIcon, {colorPalette} from 'material-icons-react';
import { Row, Col } from "../Grid";
import "./InputText.css";


export const InputText = (props) => {
return(
    <div className="input-field">
        <Row>
        
        <Col size="s9">
        <i className="prefix material-icons" style={{color:"#2667FF" }}>{props.matIcon}</i>
        <input id={props.inputID} type="text" className="validate" />
        <label>{props.fieldName}</label>
        </Col>
        </Row>
    </div>
)
}

//<MaterialIcon icon={props.matIcon} color="#2667FF"/>