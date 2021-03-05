import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialNetworks from "./SocialNetworks";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
   container: {
     height:"100vh"
   },
   burgerNavigation: {
    position:"relative",
    zIndex:"1500",
    width:"100%",
    height:"100%",
    padding:"3rem",
    
  }
  }),
  { index: 1 }
);

const BurgerNavigation = () => {
  const classes = useStyles()
  return (
    <div className={classes.burgerNavigation}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        className={classes.container}
      >
        <Logo />
        <Navigation />
        <SocialNetworks />
      </Grid>
    </div>
  );
};

export default BurgerNavigation;
