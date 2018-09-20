import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Container, Row, Col } from "../../components/Grid";

class Chat extends Component {
  render() {
    return (
      <Container>
        <div>{this.props.ctr}</div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  //get state from global .js aka reducer file
  return {
    ctr: state.showuser
  };
};

export default connect(mapStateToProps)(Chat);

export const AuthContext= React.createContext(false);//global state
<AuthContext.Provider vale={true or whatever}></AuthContext.Provider>
<AuthContext.Consumer></AuthContext.Consumer>