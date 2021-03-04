import React from "react";
import "../App.scss";
import { makeStyles } from "@material-ui/core/styles";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";
import { Grid, Typography, Paper } from "@material-ui/core";
import ProfessionalWork from "./ProfessionalWork";
import PersonnalWork from "./PersonnalWork";

const useStyles = makeStyles(
  (theme) => ({
    paper: {
      marginBottom: "4rem",
    },
    title: {
      position: "relative",
      top: -25,
      marginRight: "5rem",
      backgroundImage:
        "linear-gradient(to bottom,rgba(28, 36, 48, 0) 0%,rgba(28, 36, 48, 0) 49%, rgb(28, 36, 48) 58%)",
      padding: "0 0.5rem",
    },
  }),
  { index: 1 }
);

const Achievements = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <div className="container">
      <Grid container direction="column" justify="space-evenly">
        <Grid item>
          <div className="block">
            <Typography variant="h1" component="h1">
              {translate(lang, "achievements")}
            </Typography>
          </div>
        </Grid>

        <Paper variant="outlined" className={classes.paper}>
          <Grid container justify="flex-end">
            <Typography
              variant="h4"
              component="h2"
              color="secondary"
              className={`${classes.title} `}
            >
              {translate(lang, "professionals")}
            </Typography>
          </Grid>
          <ProfessionalWork />
        </Paper>

        <Paper variant="outlined" className={classes.paper}>
          <Grid container justify="flex-end">
            <Typography
              variant="h4"
              component="h2"
              color="secondary"
              className={`${classes.title} `}
            >
              {translate(lang, "training")}
            </Typography>
            <PersonnalWork />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default Achievements;
