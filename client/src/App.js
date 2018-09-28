import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Chat from "./pages/Chat";
import SignUp from "./pages/SignUp";
import Event from "./pages/Event";
import Landing from "./pages/Landing";
import MatchCard from "./pages/MatchCard";
import YourAccount from "./pages/YourAccount";
import UserMatches from "./pages/UserMatches";
import { Layout } from "./components/ChatComponents/Layout";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/layout" component={Layout} />{" "}
            {/****************************** to delete, only temporary  */}
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/event" component={Event} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/youraccount" component={YourAccount} />
            <Route exact path="/match" component={MatchCard} />
            <Route exact path="/usermatches" component={UserMatches} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
