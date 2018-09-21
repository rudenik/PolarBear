import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Container, Row, Col } from "../../components/Grid";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "./Chat.css";
class Chat extends Component {
  render() {
    return (
      <Container customClass="containerStyle">
        <Container customClass="userTitle">
          <div className="col s12 m12 l12 userContainer">
            <img
              src="http://www.placepuppy.net/1p/200/200"
              alt=""
              className="headShot"
            />
            <div className="userInfo">
              <span>{this.props.name}</span>
              <span>{this.props.title}</span>
            </div>
            <div>
              <MaterialIcon icon="account_circle" color="black" />
              <MaterialIcon icon="chat" color="black" />
            </div>
          </div>
        </Container>
      <div className="chatArea">
      <p>blahblah</p>
      </div>
        <div class="type_msg">
          <div class="input_msg_write">
            <input type="text" class="write_msg" placeholder="Type a message" />
            {/* <button class="msg_send_btn" type="button">
              <i class="fa fa-paper-plane-o" aria-hidden="true" />
            </button> */}
          </div>
        </div>
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
