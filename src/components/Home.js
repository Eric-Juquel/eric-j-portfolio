import React from "react";
import "../App.scss";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button2 from "./Button2";
import About from "./About";
import Achievements from "./Achievements";
import Career from "./Career";
import Contact from "./Contact";
import Skills from "./Skills";

const useStyles = makeStyles({
  subtitle: {
    fontWeight: "100",
    color: "rgba(255, 255, 255, 0.6)",
  },
});

const Home = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <>
      <div className="container">
        <div className="block">
          <div className="title">
            <div className="myName">
              <div className="myName__main myName__main--first">E</div>
              <div className="myName__firstName">ric</div>
              <div className="myName__main myName__main--last">J</div>
              <div className="myName__lastName">uquel</div>
            </div>
            <p>{translate(lang, "title")}</p>
          </div>
          <Typography variant="h5" className={classes.subtitle}>
            {translate(lang, "subtitle")}
          </Typography>
          <div style={{ display: "flex", marginTop: "3rem" }}>
            {/* <Button /> */}
            <Button2 text={translate(lang, "contactMe")}/>
          </div>
        </div>
      </div>

      <Skills />

      <Achievements />

      <Career />

      <About />

      <Contact />
    </>
  );
};

export default Home;
