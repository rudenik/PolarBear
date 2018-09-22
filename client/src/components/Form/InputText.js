import React from "react";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { Row, Col } from "../Grid";


export const InputText = (props) => {
return(
    <div className="input-field">
        <Row>
        <Col size="s1">
        <MaterialIcon icon={props.matIcon} color="#2667FF"/>
        </Col>
        <Col size="s9">
        <input id={props.inputID} type="text" className="validate" />
        <label>{props.fieldName}</label>
        </Col>
        </Row>
    </div>
)
}
