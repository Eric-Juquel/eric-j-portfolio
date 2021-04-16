import React from "react";
import "../App.scss";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Button2 from "./ui/Button2";
import Achievements from "./Achievements";
// import Career from "./Career";
import Contact from "./contact/Contact";
import Skills from "./Skills";

const useStyles = makeStyles(
  {
    subtitle: {
      fontWeight: "100",
      color: "rgba(255, 255, 255, 0.6)",
    },
  },
  { index: 1 }
);

const Home = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <>
      <section className="container" id="home">
        <Grid container direction="column">
          <Grid container alignItems="center" justify="flex-start" spacing={3}>
            <Grid item>
              <div className="myName">
                <div className="myName__main myName__main--first">E</div>
                <div className="myName__firstName">ric</div>
                <div className="myName__main myName__main--last">J</div>
                <div className="myName__lastName">uquel</div>
              </div>
            </Grid>
            <Grid item>
              <Typography variant="h4">{translate(lang, "title")}</Typography>
            </Grid>
          </Grid>
          <Typography variant="h6" className={classes.subtitle}>
            {translate(lang, "subtitle")}
          </Typography>
          <div style={{ display: "flex", marginTop: "3rem" }}>
            <Button2 text={translate(lang, "contactMe")} />
          </div>
        </Grid>
      </section>

      <Skills />

      <Achievements />

      {/* <Career /> */}

      <Contact />
    </>
  );
};

export default Home;
