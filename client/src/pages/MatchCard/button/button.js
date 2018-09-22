import React, { Component } from 'react';
import "./button.css";

class Button extends Component {
    render () {
        return (
            <div className="row center-align">
                <div class= 'col s6'>
            <a class="waves-effect btn-large match__button-pc match__pass">Pass</a>
            </div>
            <div class='col s6'>
            <a class="waves-effect btn-large match__button-pc match__connect">Connect</a>
            </div>
            </div>
        )
    }
}

export default Button;