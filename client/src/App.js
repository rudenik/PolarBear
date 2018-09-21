import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Chat from "./pages/Chat";
import { Container, Row, Col } from "./components/Grid";
import SignUp from "./pages/SignUp";


class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      
      
      
      <Router>
      
      <Switch>
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/signup" component={SignUp} />
            
      </Switch>
          
      </Router> 
      </div>
    );
  }
}

export default App;
