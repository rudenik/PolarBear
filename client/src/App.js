import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./pages/Chat";
import { Container, Row, Col } from "./components/Grid";
import SignUp from "./pages/SignUp";
import axios from 'axios';


class App extends Component {
  render() {
    return (
      <Router>
          <Container>
            <Row>
            <Col size="s12">
              <SignUp/>
                
                
                
              
              </Col>
          <Switch>
            <Route exact path="/chat" component={Chat} />
          </Switch>
          </Row>
          </Container>
      </Router>
    );
  }
}

export default App;
