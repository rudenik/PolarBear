import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Container, Row, Col } from "../../components/Grid";
import "./Chat.css";
class Chat extends Component {
  render() {
    return (
      <Container customClass="containerStyle">
        <Container customClass="userTitle">
          <Row>
            <div className="col s12 m12 l12 userContainer">
              <img
                src="http://www.placepuppy.net/1p/200/200"
                alt=""
                className="headShot"
              />
              <div>
                {this.props.name}
                {this.props.title}
              </div>
            </div>
          </Row>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  //get state from global .js aka reducer file
  return {
    photo: state.userPhoto,
    name: state.userName,
    title: state.userTitle
  };
};

export default connect(mapStateToProps)(Chat);
