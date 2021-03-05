import React, { useState} from "react";
import classes from "./BurgerNavigation.module.scss";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialNetworks from "./SocialNetworks";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    container: {
      height: "100vh",
    },
  }),
  { index: 1 }
);

const Burger = () => {
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
          justify="space-between"
          alignItems="center"
          className={styles.container}
        >
          <Logo setIsChecked={setIsChecked} />
          <Navigation setIsChecked={setIsChecked} />
          <SocialNetworks />
        </Grid>
      </div>
    </div>
  );
};

export default Burger;
