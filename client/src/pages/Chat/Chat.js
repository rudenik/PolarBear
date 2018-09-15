import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Chat extends Component {
  render() {
    return (
      <div class="container">
        <div>{this.props.ctr}</div>
        <div class="row">
          <div class="col s12">
            <span class="flow-text">
              This div is 12-columns wide on all screen sizes
            </span>
          </div>
          <div class="col s6 offset-s6">
            <span class="flow-text">6-columns (offset-by-6)</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {//get state from global .js aka reducer file
  return {
    ctr: state.counter
  };
};

export default connect(mapStateToProps)(Chat);
