import React, { Component } from "react";
import { connect } from "react-redux";

const { VERIFY_USER } = require("../../../store/actions");

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      error: ""
    };
  }
  setUser = ({ user, isUser }) => {
    console.log(user, isUser);
    if (isUser) {
      this.setError("User name taken");
    } else {
      this.setError("");
      this.props.setUser(user);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { socket } = this.props; //gets socket info
    const { nickname } = this.state; //gets nickname typed in
    socket.emit(VERIFY_USER, nickname, this.setUser); //pass the callback to SocketManager including the nickname
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ nickname: e.target.value });
  };

  setError = error => {
    this.setState({ error });
  };
  render() {
    const { nickname, error } = this.state;
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login-form">
          <label htmlFor="nickname">
            <h2>Got a nickname?</h2>
          </label>
          <input
            ref={input => (this.textInput = input)}
            type="text"
            id="nickname"
            value={nickname}
            onChange={this.handleChange}
            placeholder={"MYCOOLUSERNAME"}
          />
          <div className="error">{error ? error : null}</div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    curUser: state
  }
}
export default connect(mapStateToProps)(LoginForm)