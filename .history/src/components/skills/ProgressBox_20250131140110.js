import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { translate } from "../../translations/translate";
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
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  useEffect(() => {
    setProgress1(100);
    setProgress2(90);
    setProgress3(70);
  }, []);

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography justify="center" variant="h4" align="center" gutterBottom>
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
            React 19
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress1}
            classes={{
              colorPrimary: classes.colorWarning,
              barColorPrimary: classes.barColorWarning,
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            NodeJs
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress2}
            color="secondary"
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Express - Fastify
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress2}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            CSS (Sass, Flexbox, Grid)
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress1}
            color="secondary"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProgressBox;
