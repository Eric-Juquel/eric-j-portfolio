import React, { useState } from "react";
import "../../../App.scss";

import { makeStyles } from "@material-ui/core/styles";
import { translate } from "../../../translations/translate";
import { useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LightTooltip from "../../ui/LightTooltip";

import CarouselModal from "../../CarouselModal";
import FrogSVG from "./FrogSvg";
import { Image } from "@material-ui/icons";

const useStyles = makeStyles(
  (theme) => ({
    box: {
      minHeight: "5rem",
      padding: "3rem",
      "@media (max-width:600px)": {
        padding: "1rem 0.3rem",
      },
    },
    woody: {
      width: "15rem",
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

  // CAROUSEL SETTINGS
  const matches = useMediaQuery("(max-width:600px)");
  const [openModal, setOpenModal] = useState(false);
  const [mediaWidth, setMediaWidth] = useState("");
  const [images, setImages] = useState([
    {
      id: 1,
      url: "",
      title: "Title",
      subtitle: "subtitle",
      alt: "",
    },
  ]);

  return (
    <Grid container>
      <Grid container justifyContent="center">
        <LightTooltip
          title={`${translate(lang, "linkTo")} www.frog.co`}
          aria-label={`${translate(lang, "linkTo")} www.frog.co`}
        >
          <Link href="https://www.frog.co/fr-fr/" target="blank">
            <img src="/images/frogdesign_logo.jpeg" height="100px" />
            <FrogSVG className={classes.woody} />
          </Link>
        </LightTooltip>
      </Grid>
    </Grid>
  );
};

export default Frog;
