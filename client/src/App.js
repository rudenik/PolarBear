import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./pages/Chat";
import { Container, Row, Col } from "./components/Grid";
import SignUp from "./pages/SignUp";


class App extends Component {
  render() {
    return (
      <Router>
          
          <Switch>
          <Route exact path="/signup" component={SignUp} />
            <Route exact path="/chat" component={Chat} />
          </Switch>
  
     
      </Router>
    );
  }
}

export default App;
