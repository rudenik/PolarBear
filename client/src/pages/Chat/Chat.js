import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Container, Row, Col } from "../../components/Grid";

class Chat extends Component {
  render() {
    return (
      <Container>
        <Col size="s12 m12">
          <div>Test</div>
        </Col>
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
