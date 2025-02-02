import React from "react";
import "../../../App.scss";

import { makeStyles } from "@material-ui/core/styles";
import { translate } from "../../../translations/translate";
import { useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LightTooltip from "../../ui/LightTooltip";

import FrogSVG from "./FrogSvg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    box: {
      minHeight: "5rem",
      padding: "3rem",
      "@media (max-width:600px)": {
        padding: "1rem 0.3rem",
      },
    },
    frog: {
      display: "flex",
      width: "25rem",
      gap: "1rem",
      padding: "1.5rem",
    },
    textPrimary: {
      color: theme.palette.primary.main,
    },
    textWarning: {
      color: theme.palette.warning.main,
    },
    card: {
      width: "25rem",
      height: "15rem",
    },
    media: {
      height: "16rem",
    },
    cardLicence: {
      width: "80%",
      height: "80%",
      padding: "1.5rem",
      marginBottom: "3.5rem",
      backgroundColor: theme.palette.text.secondary,
      "@media (max-width:600px)": {
        width: "97%",
        padding: "1rem 0.3rem",
      },
    },
    mediaLicence: {
      maxWidth: "35rem",
      height: "17rem",
      margin: "auto",
      "@media (max-width:600px)": {
        height: "10rem",
      },
    },
    textDark: {
      color: "#1c2430",
    },
  }),
  { index: 1 }
);

const Frog = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Grid container>
      <Grid container justifyContent="center">
        <LightTooltip
          title={`${translate(lang, "linkTo")} www.frog.co`}
          aria-label={`${translate(lang, "linkTo")} www.frog.co`}
        >
          <Link
            href="https://www.frog.co/fr-fr/"
            target="blank"
            className={classes.frog}
          >
            <img
              src="/images/frogdesign_logo.jpeg"
              height="100px"
              alt="grog icon"
            />
            <FrogSVG className={classes.woody} />
          </Link>
        </LightTooltip>
      </Grid>
      <Grid container direction="column" wrap="nowrap" alignItems="center">
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item className={classes.box} xs={12} lg={6}>
            <Typography variant="body1" align={matches ? "center" : "left"}>
              {translate(lang, "digitalFactory")}
            </Typography>
          </Grid>
          <Grid item className={classes.box} xs={12} lg={6}>
            <Grid container justifyContent="center">
              <img
                src="https://res.cloudinary.com/ericjuquel94/image/upload/v1738349005/fabrique-digitale.png"
                height="250px"
                alt="fabrique digitale ratp"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item className={classes.box} xs={12} lg={6}>
            <Grid container justifyContent="center">
              <img
                src="https://res.cloudinary.com/ericjuquel94/image/upload/v1738495242/stack-clean-archi_oamiqt.png"
                height="350px"
                alt="stack clean archi"
              />
            </Grid>
          </Grid>
          <Grid item className={classes.box} xs={12} lg={6}>
            <Typography variant="body1" align={matches ? "center" : "left"}>
              {translate(lang, "bootstrap")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Frog;
