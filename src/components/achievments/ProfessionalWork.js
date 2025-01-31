import React from "react";

import Grid from "@material-ui/core/Grid";

import Woody from "./woody-technologies/Woody";
import { Divider, makeStyles } from "@material-ui/core";
import Frog from "./frog-capgemini/Frog";

const useStyles = makeStyles(
  (theme) => ({
    box: {
      width: "50%",
      minHeight: "5rem",
      padding: "3rem",
      margin: "auto",
    },
  }),
  { index: 1 }
);

const ProfessionalWork = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Frog />
      <Grid item className={classes.box}>
        <Divider variant="middle" />
      </Grid>
      <Woody />
    </Grid>
  );
};

export default ProfessionalWork;
