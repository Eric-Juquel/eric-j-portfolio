import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Languages from './components/Languages'
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import SocialNetworks from "./components/SocialNetworks";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Career from "./components/Career";
import Contact from "./components/Contact";

import { Container } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { purple, teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: teal[200],
    },
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="languageBtn">
            <Languages />
          </div>
          <div className="side-menu">
            <Logo />
            <Navigation />
            <SocialNetworks />
          </div>
          <Container>
            <Switch>
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/achievements" component={Achievements} />
              <Route exact path="/career" component={Career} />
              <Route exact path="/contact" component={Contact} />
              {/* <Route
              path="/github"
              component={() => {
                window.open(
                  "https://github.com/Eric-Juquel?tab=repositories",
                  "popup"
                );
                return null;
              }}
            />
            <Route
              path="/linkedin"
              component={() => {
                window.open(
                  "https://www.linkedin.com/in/eric-juquel-4397b719a/",
                  "popup"
                );
                return null;
              }}
            /> */}
            </Switch>
          </Container>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
