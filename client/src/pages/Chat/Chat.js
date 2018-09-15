import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Chat extends Component {

  render() {
    return (
      <div class="container">
        <div>{props.showuser}</div>
        
            {/* <span class="flow-text">
              This div is 12-columns wide on all screen sizes
            </span> */}
        
      </div>
    );
  }

}

const mapStateToProps = state => {//get state from global .js aka reducer file
  return {
    ctr: state.showuser
  };
};

export default connect(mapStateToProps)(Chat);
