import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import SocialNetworks from "./components/SocialNetworks";
import Compétences from "./components/Compétences"

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="side-menu">
          <Logo />
          <Navigation />
          <SocialNetworks />
        </div>
        <div className="content">
          <Route exact path="/compétences" component={Compétences} />
        </div>
      </div>
    </Router>
  );
};

export default App;
