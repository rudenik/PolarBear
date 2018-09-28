import React, { Component } from 'react';
import "./card.css";

class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonVal:''
      };
      }
      
    buttonClick = (e) => {
        const buttonVal = e.target.dataset.value;
        console.log(buttonVal);
        this.setState({buttonVal:buttonVal});
        this.props.buttonClicked(buttonVal);
    }
    render () {
        return (
            <div className="row center-align">
                <div className= 'col s6'>
            <button className="btn-large match__button-pc match__pass" data-value='Decline' onClick={ this.buttonClick }>Pass</button>
            </div>
            <div className='col s6'>
            <button className="btn-large match__button-pc match__connect" data-value='Match' onClick={ this.buttonClick }>Connect</button>
            </div>
            </div>
        )
    }
}

export default Button;