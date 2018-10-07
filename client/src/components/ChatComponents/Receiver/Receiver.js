import React, { Component } from "react";
import  "./Receiver.css";

class Receiver extends Component {
  constructor(props) {
    super(props);

    this.scrollDown = this.scrollDown.bind(this);
  }

  scrollDown() {
    const { container } = this.refs;
    container.scrollTop = container.scrollHeight;
  }

  componentDidMount() {
    this.scrollDown();
  }

  componentDidUpdate(prevProps, prevState) {
    this.scrollDown();
  }
  render() {
    const { messages, user, typingUsers } = this.props;
    return (
      <div ref="container" className="thread-container">
        <div className="thread">
        </div>
      </div>
    );
  }
}

export default Receiver;