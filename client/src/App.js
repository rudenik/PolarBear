import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Router, Switch } from "react-router-dom";
import Chat from "./pages/Chat";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/chat" componen={Chat} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
