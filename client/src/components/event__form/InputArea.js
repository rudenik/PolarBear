import React, { Component } from "react";

// class InputArea extends Component {


// }

export const InputArea = (props) => {
    return(
    <div className="input-field">
          <textarea id={props.textAreaID} className="materialize-textarea"></textarea>
          <label for={props.textAreaID}>{props.label}</label>
        </div>
    )
}

