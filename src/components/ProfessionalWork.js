import React, { useState } from "react";
import "../App.scss";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import SvgWoodyTechnologyPinkLogo from "./WoodyTechnologyPinkLogo";
import CarouselModal from "./CarouselModal";

const useStyles = makeStyles(
  (theme) => ({
    box: {
      width: "50%",
      minHeight: "5rem",
      padding: "3rem",
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
      height: "27.5rem",
      padding: "1.5rem",
      marginBottom: "3.5rem",
      backgroundColor: theme.palette.text.secondary,
    },
    mediaLicence: {
      height: "17rem",
      width: "35rem",
      margin: "auto",
    },
    textDark: {
      color: "#1c2430",
    },
  }),
  { index: 1 }
);

const ProfessionalWork = () => {
  const [openModal, setOpenModal] = useState(false);
  const [images, setImages] = useState([{
    id: 1,
    url: "",
    title: "Title",
    subtitle: "subtitle",
    alt:""
  }]);
  const matches = useMediaQuery("(max-width:600px)");
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  const images1 = [
    {
      id: 1,
      url: "/images/ElectionsUS/Presidentielle.png",
      title: "Title",
      subtitle: "subtitle",
    },
    {
      id: 2,
      url: "/images/ElectionsUS/Sénat.png",
      title: "Title",
      subtitle: "subtitle",
    },
    {
      id: 3,
      url: "/images/ElectionsUS/Ticker.png",
      title: "Title",
      subtitle: "subtitle",
    },
  ];

  return (
    <>
      <Grid container justify="center">
        <SvgWoodyTechnologyPinkLogo className={classes.woody} />
      </Grid>
      <Grid container direction="column" wrap="nowrap" alignItems="center">
        <Grid container justify="space-around" alignItems="center">
          <Grid item className={classes.box}>
            <Grid container justify="center">
              <ReactPlayer
                url="https://vimeo.com/481159581"
                controls
                light
                volume={0.3}
                width="25rem"
                height="15rem"
              />
            </Grid>
          </Grid>

          <Grid item className={classes.box}>
            <Typography variant="body1">
              {" "}
              {translate(lang, "coverage")}{" "}
              <span className={classes.textPrimary}>
                {translate(lang, "elections")}
              </span>{" "}
              {translate(lang, "achieve")}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-around" alignItems="center">
          <Grid item className={classes.box}>
            <Typography variant="body1">
              <span className={classes.textPrimary}>
                {translate(lang, "interface")}
              </span>
              {translate(lang, "include")}
            </Typography>
          </Grid>
          <Grid item className={classes.box}>
            <Grid container justify="center">
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/images/ElectionsUS/Presidentielle.png"
                    title="UI Elections Us France 24"
                    onClick={() => {
                      setImages(images1);
                      setOpenModal(true);
                    }}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.box}>
          <Divider variant="middle" />
        </Grid>

        <Grid container justify="space-around" alignItems="center">
          <Card className={classes.cardLicence}>
            <CardActionArea>
              <CardMedia
                className={classes.mediaLicence}
                image="/images/licencesrv/licences.png"
                title="Serveur de licences"
              />
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
        />
      </Grid>
    </>
  );
};

export default ProfessionalWork;
