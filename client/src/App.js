import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Chat from "./pages/Chat";
import SignUp from "./pages/SignUp";
import Event from "./pages/Event";
import Landing from "./pages/Landing";
<<<<<<< HEAD
import YourAccount from "./pages/YourAccount";

=======
import MatchCard from "./pages/MatchCard"
import YourAccount from "./pages/YourAccount"
import UserMatches from "./pages/UserMatches";
>>>>>>> aeb88281d547cb0e2e025f98951effcb26497786



class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Router>
      <Switch>
      <Route exact path="/" component={Landing} />  
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/event" component={Event} /> 
      <Route exact path="/signup" component={SignUp} />
<<<<<<< HEAD
      <Route exact path="/YourAccount" component={YourAccount} />
=======
      <Route exact path="/youraccount" component={YourAccount} />
      <Route exact path="/match" component={MatchCard} />
      <Route exact path="/usermatches" component={UserMatches} />
>>>>>>> aeb88281d547cb0e2e025f98951effcb26497786
      </Switch>
      </Router> 
      </div>
    );
  }
}

export default App;
