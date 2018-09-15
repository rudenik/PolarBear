import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";


class Chat extends Component {
    render(){

        return(
            <div>{this.props.counter}</div>
        )
    }
}


export default connect(state=>state)(Chat);