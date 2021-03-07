import React, { useState } from "react";
import classes from "./BurgerNavigation.module.scss";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialNetworks from "./SocialNetworks";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    container: {
      height: "100vh",
    },
  }),
  { index: 1 }
);

const Burger = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const styles = useStyles();

  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={classes.container}>
      <input
        id="navi"
        type="checkbox"
        className={classes.checkbox}
        checked={isChecked}
        readOnly
      />
      <label htmlFor="navi" className={classes.btn} onClick={checkHandler}>
        <span className={classes.icon}>&nbsp;</span>
      </label>
      <div className={classes.background}></div>
      <div className={classes.burgerNavigation}>
        <Grid
          container
          direction="column"
          justify={!matches ? "space-between" : "center"}
          alignItems="center"
          className={styles.container}
          spacing={2}
        >
          <Grid item >
            <Logo setIsChecked={setIsChecked} />
          </Grid>
          <Grid item >
            <Navigation setIsChecked={setIsChecked} />
          </Grid>
          <Grid item >
            <SocialNetworks />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Burger;
