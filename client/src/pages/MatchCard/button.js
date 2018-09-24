import React, { Component } from 'react';
import "./card.css";

class Button extends Component {
    render () {
        return (
            <div className="row center-align">
                <div className= 'col s6'>
            <a className="waves-effect btn-large match__button-pc match__pass">Pass</a>
            </div>
            <div className='col s6'>
            <a className="waves-effect btn-large match__button-pc match__connect">Connect</a>
            </div>
            </div>
        )
    }
}

export default Button;