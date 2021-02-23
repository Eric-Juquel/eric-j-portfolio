import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  icon: {
    cursor: "pointer",
  },
  anchor: {
    outline: "none",
    textDecoration: "none",
  },
});

const SocialNetworks = () => {
  const history = useHistory();

  const classes = useStyles();

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item>
        <a
          // target="popup"
          href="https://www.linkedin.com/in/eric-juquel-4397b719a/"
        >
          <LinkedInIcon
            fontSize="large"
            className={classes.icon}
            // onClick={() => {
            //   history.push("/linkedin");
            // }}
          />
        </a>
      </Grid>
      <Grid item>
        <a
          // target="popup"
          href="https://github.com/Eric-Juquel?tab=repositories"
        >
          <GitHubIcon
            fontSize="large"
            className={classes.icon}
            // onClick={() => {
            //   history.push("/github");
            // }}
          />
        </a>
      </Grid>
    </Grid>
  );
};

export default SocialNetworks;
