import React from "react";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const SocialNetworks = () => {
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item >
        <LinkedInIcon fontSize="large"/>
      </Grid>
      <Grid item >
        <GitHubIcon fontSize="large"/>
      </Grid>
    </Grid>
  );
};

export default SocialNetworks;
