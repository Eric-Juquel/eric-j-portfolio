import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";
import { Grid, Paper, Typography, LinearProgress } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    container1: {
      height: "19rem",
    },
    paper: {
      padding: "1.5rem",
    },
    colorInfo: {
      backgroundColor: theme.palette.info.dark,
    },
    barColorInfo: {
      backgroundColor: theme.palette.info.main,
    },
    colorError: {
      backgroundColor: theme.palette.error.dark,
    },
    barColorError: {
      backgroundColor: theme.palette.error.main,
    },
    colorWarning: {
      backgroundColor: theme.palette.warning.dark,
    },
    barColorWarning: {
      backgroundColor: theme.palette.warning.main,
    },
  }),
  { index: 1 }
);

const ProgressBox = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <Paper className={classes.paper}>
      <Typography
        justify="center"
        variant="h4"
        color="primary"
        align="center"
        gutterBottom
      >
        {translate(lang, "languageFramework")}
      </Typography>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        className={classes.container1}
      >
        <Grid item>
          <Typography variant="h5" gutterBottom>
            HTML - CSS (Sass, Flexbox, Grid)
          </Typography>
          <LinearProgress variant="determinate" value={90} color="secondary" />
        </Grid>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            JavaScript
          </Typography>
          <LinearProgress variant="determinate" value={70} />
        </Grid>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            ReactJs (Hooks - Redux)
          </Typography>
          <LinearProgress
            variant="determinate"
            value={70}
            classes={{
              colorPrimary: classes.colorInfo,
              barColorPrimary: classes.barColorInfo,
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            NodeJs
          </Typography>
          <LinearProgress
            variant="determinate"
            value={50}
            classes={{
              colorPrimary: classes.colorWarning,
              barColorPrimary: classes.barColorWarning,
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Express
          </Typography>
          <LinearProgress
            variant="determinate"
            value={60}
            classes={{
              colorPrimary: classes.colorError,
              barColorPrimary: classes.barColorError,
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProgressBox;
