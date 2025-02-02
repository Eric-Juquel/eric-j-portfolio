import React, { useState } from "react";
import "../../../App.scss";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import { translate } from "../../../translations/translate";
import { useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LightTooltip from "../../ui/LightTooltip";
import SvgWoodyTechnologyPinkLogo from "./WoodyTechnologyPinkLogo";
import CarouselModal from "../../CarouselModal";
import { getElectionsUs, licenseServeur } from "./carousel-data";

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

const Woody = () => {
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
          title={`${translate(lang, "linkTo")} woody-technologies.com`}
          aria-label={`${translate(lang, "linkTo")} woody-technologies.com`}
        >
          <Link href="https://woody-technologies.com/" target="blank">
            <SvgWoodyTechnologyPinkLogo className={classes.woody} />
          </Link>
        </LightTooltip>
      </Grid>
      <Grid container direction="column" wrap="nowrap" alignItems="center">
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item className={classes.box} xs={12} lg={6}>
            <Grid container justifyContent="center">
              <LightTooltip
                title={translate(lang, "video")}
                aria-label={translate(lang, "video")}
              >
                <ReactPlayer
                  url="https://vimeo.com/481159581"
                  controls
                  light
                  volume={0.3}
                  width="25rem"
                  height="15rem"
                />
              </LightTooltip>
            </Grid>
          </Grid>

          <Grid item className={classes.box} xs={12} lg={6}>
            <Typography variant="body1" align={matches ? "center" : "left"}>
              {translate(lang, "coverage")}
              <span className={classes.textPrimary}>
                <LightTooltip
                  title={translate(lang, "complete")}
                  aria-label={translate(lang, "complete")}
                >
                  <Link href="https://lnkd.in/dqvUutT">
                    {translate(lang, "elections")}
                  </Link>
                </LightTooltip>
              </span>
              {translate(lang, "achieve")}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item className={classes.box} xs={12} lg={6}>
            <Typography variant="body1" align={matches ? "center" : "left"}>
              <span className={classes.textPrimary}>
                {translate(lang, "interface")}
              </span>
              {translate(lang, "include")}
            </Typography>
          </Grid>
          <Grid item className={classes.box} xs={12} lg={6}>
            <Grid container justifyContent="center">
              <Card className={classes.card}>
                <CardActionArea>
                  <LightTooltip
                    title={translate(lang, "slider")}
                    aria-label={translate(lang, "slider")}
                  >
                    <CardMedia
                      component="img"
                      className={classes.media}
                      image="https://res.cloudinary.com/ericjuquel94/image/upload/v1638351914/portfolio/woody/Presidentielle_yqd9qb.png"
                      alt="UI Elections Us France 24"
                      onClick={() => {
                        setMediaWidth("85%");
                        setImages(getElectionsUs(lang));
                        setOpenModal(true);
                      }}
                    />
                  </LightTooltip>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.box}>
          <Divider variant="middle" />
        </Grid>

        <Grid container justifyContent="space-around" alignItems="center">
          <Card className={classes.cardLicence}>
            <CardActionArea>
              <LightTooltip
                title={translate(lang, "slider")}
                aria-label={translate(lang, "slider")}
                placement="top"
              >
                <CardMedia
                  component="img"
                  className={classes.mediaLicence}
                  image="https://res.cloudinary.com/ericjuquel94/image/upload/v1638351902/portfolio/woody/licences-blur_s9hryc.png"
                  alt="Serveur de licences"
                  onClick={() => {
                    setMediaWidth("97%");
                    setImages(licenseServeur);
                    setOpenModal(true);
                  }}
                />
              </LightTooltip>
            </CardActionArea>
            <CardContent>
              <Typography
                variant="body1"
                align="center"
                className={classes.textDark}
              >
                {translate(lang, "licence")}
                <span className={classes.textWarning}>
                  {translate(lang, "serveur")}
                </span>
                {translate(lang, "licenceSuite")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <CarouselModal
          isMobile={matches}
          open={openModal}
          setOpen={setOpenModal}
          images={images}
          mediaHeight={"70%"}
          mediaWidth={mediaWidth}
        />
      </Grid>
    </Grid>
  );
};

export default Woody;
