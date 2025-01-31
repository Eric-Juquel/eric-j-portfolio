import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { translate } from "../../translations/translate";
import { useSelector } from "react-redux";
import { Grid, Paper, Typography, Chip } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    container2: {
      height: "8rem",
    },
    paper: {
      padding: "1.5rem",
    },
    chip: {
      fontSize: 18,
      fontWeight: 300,
      "@media (max-width:1453px)": {
        fontSize: 18,
      },
      "@media (max-width:440px)": {
        fontSize: 15,
      },
    },
    chip1: {
      color: theme.palette.text.primary,
      borderColor: theme.palette.secondary.main,
    },
    chip2: {
      color: theme.palette.text.primary,
      borderColor: theme.palette.primary.main,
    },
    chip3: {
      color: theme.palette.text.primary,
      borderColor: theme.palette.info.main,
    },
    chip4: {
      color: theme.palette.text.primary,
      borderColor: theme.palette.warning.main,
    },
    chip5: {
      color: theme.palette.text.primary,
      borderColor: theme.palette.error.main,
    },
  }),
  { index: 1 }
);

const ChipBox = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography
        justify="center"
        variant="h4"
        color="primary"
        align="center"
        gutterBottom
      >
        {translate(lang, "library")}
      </Typography>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        className={classes.container2}
      >
        <Grid container justify="space-evenly">
          <Grid item>
            <Chip
              label="Material-UI"
              variant="outlined"
              className={`${classes.chip} ${classes.chip1}`}
            />
          </Grid>
          <Grid item>
            <Chip
              label="Redux - Zustand"
              variant="outlined"
              className={`${classes.chip} ${classes.chip4}`}
            />
          </Grid>
          <Grid item>
            <Chip
              label="React Query"
              variant="outlined"
              className={`${classes.chip} ${classes.chip1}`}
            />
          </Grid>
        </Grid>
        <Grid container justify="space-evenly">
          <Grid item>
            <Chip
              label="React-Hook-Form"
              variant="outlined"
              className={`${classes.chip} ${classes.chip2}`}
            />
          </Grid>
          <Grid item>
            <Chip
              label="Vitest - Cypress"
              variant="outlined"
              className={`${classes.chip} ${classes.chip2}`}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ChipBox;
