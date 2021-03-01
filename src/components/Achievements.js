import React from "react";
import "../App.scss";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";
import { Grid, Typography, Paper, Divider } from "@material-ui/core";
import SvgWoodyTechnologyPinkLogo from "./WoodyTechnologyPinkLogo";

const useStyles = makeStyles(
  (theme) => ({
    paper: {
      marginBottom: "4rem",
    },
    title: {
      position: "relative",
      top: -25,

      backgroundImage:
        "linear-gradient(to bottom,rgba(28, 36, 48, 0) 0%,rgba(28, 36, 48, 0) 49%, rgb(28, 36, 48) 58%)",
      padding: "0 0.5rem",
    },
    pro: {
      marginRight: "5rem",
    },
    train: {
      marginLeft: "5rem",
    },
    box: {
        width:"50%",
        padding:"1.5rem"
    },
    woody: {
      width: "15rem",
      padding: "1.5rem",
    },
    textPrimary:{
      color:theme.palette.primary.main
    }
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
              className={`${classes.title} ${classes.pro}`}
            >
              {translate(lang, "professionals")}
            </Typography>
          </Grid>
          <Grid container justify="center">
            <SvgWoodyTechnologyPinkLogo className={classes.woody} />
          </Grid>
          <Grid container direction="column" wrap="nowrap">
            <Grid container md={12} justify="space-around" alignItems="center">
              <Grid item className={classes.box}>
                <ReactPlayer
                  url="https://vimeo.com/481159581"
                  controls
                  light
                  width="25rem"
                  height="15rem"
                />
              </Grid>

              <Grid item className={classes.box}>
                <Typography variant="body1"> {translate(lang, "coverage")} <span className={classes.textPrimary}>{translate(lang, "elections")}</span>  {translate(lang, "achieve")}</Typography>
              </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />

            <Grid container md={12} justify="space-evenly" alignItems="center">
              <Grid item>Description</Grid>
              <Grid item> Screenshot</Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper variant="outlined">
          <Grid container justify="flex-start">
            <Typography
              variant="h4"
              component="h2"
              color="secondary"
              className={`${classes.title} ${classes.train}`}
            >
              {translate(lang, "training")}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default Achievements;
