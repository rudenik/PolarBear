import React, { Component } from "react";
import "./InputText.css";
// class InputArea extends Component {


// }

export const InputArea = (props) => {
    return(
    <div className="input-field">
          <textarea id={props.textAreaID} className="materialize-textarea" data-length="140"></textarea>
          <label>{props.label}</label>
        </div>
    )
}

