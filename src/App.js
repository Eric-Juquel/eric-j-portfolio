import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Burger from "./components/Burger";
import Languages from "./components/Languages";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import SocialNetworks from "./components/SocialNetworks";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Career from "./components/Career";
import Contact from "./components/Contact";

import { Container, useMediaQuery } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, teal, red, blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: orange[300],
    },
    secondary: {
      main: teal[300],
    },
    info: {
      main: blue[500],
      dark: "rgb(33, 150, 243,0.4)",
    },
    error: {
      main: red[500],
      dark: "rgba(211, 47, 47, 0.4)",
    },
    warning: {
      main: "rgb(229, 0, 113)",
      dark: "rgba(229, 0, 113,0.4)",
      light: "rgb(255, 64, 159);",
    },
    text: {
      primary: "rgba(255, 255, 255,0.87)",
      secondary: "rgba(255, 255, 255, 0.6)",
      disabled: "rgba(255, 255, 255,0.38)",
      hint: "#1c2430",
    },
    background: {
      paper: "#1c2430",
    },
  },

  typography: {
    h1: {
      fontFamily: `"Montserrat","Roboto","Helvetica"`,
      textTransform: "capitalize",
      fontSize: 70,
      marginBottom: 50,
      '@media (max-width:600px)': {
        fontSize: 50,
      },
      '@media (max-width:440px)': {
        fontSize: 40,
      },
    },
    h4: {
      fontFamily: `"Montserrat","Roboto","Helvetica"`,
      textTransform: "capitalize",
    },
    h5: {
      fontSize: 25,
      fontWeight: 400,
      letterSpacing: 1.5,
      '@media (max-width:600px)': {
        fontSize: 23,
      },
      '@media (max-width:440px)': {
        fontSize: 20,
      },
    },
    h6: {
      fontSize: 23,
      '@media (max-width:600px)': {
        fontSize: 20,
      },
      fontWeight: "100",
      color: "rgba(255, 255, 255, 0.6)",

    },

    body1: {
      fontSize: 20,
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: 18,
      },
    },
  },
});

const App = () => {
  const matches = useMediaQuery("(max-width:960px)");

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="languageBtn">
            <Languages />
          </div>
          <header className="side-menu">
            <Logo />
            <Navigation />
            <SocialNetworks />
          </header>
          {matches && <Burger />}
          <Container maxWidth={false} component="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/achievements" component={Achievements} />
              <Route exact path="/career" component={Career} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </Container>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
