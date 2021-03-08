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
      // width: "50%",
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
      height: "80%",
      padding: "1.5rem",
      marginBottom: "3.5rem",
      backgroundColor: theme.palette.text.secondary,
    },
    mediaLicence: {
      maxWidth: "35rem",
      height: "17rem",
      margin: "auto",
      '@media (max-width:600px)': {
        height:"10rem",
      },
    },
    textDark: {
      color: "#1c2430",
    },
  }),
  { index: 1 }
);

const ProfessionalWork = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  // CAROUSEL SETTINGS
  const matches = useMediaQuery("(max-width:600px)");
  const [openModal, setOpenModal] = useState(false);
  const [mediaWidth, setMediaWidth] = useState("")
  const [images, setImages] = useState([
    {
      id: 1,
      url: "",
      title: "Title",
      subtitle: "subtitle",
      alt: "",
    },
  ]);

  // CAROUSEL DATAS
  const licenseServeur = [
    {
      id: 1,
      url: "/images/licencesrv/licences.png",
      title: "Licenses",
      subtitle: "",
      alt:"icenses"
    },
    {
      id: 2,
      url: "/images/licencesrv/templates.png",
      title: "Templates",
      subtitle: "",
      alt:"Templates"
    },
    {
      id: 3,
      url: "/images/licencesrv/createlicence.png",
      title: "Create / Edit License",
      subtitle: "",
      alt:"reate / Edit License"
    },
    {
      id: 4,
      url: "/images/licencesrv/search.png",
      title: "Advanced Search",
      subtitle: "",
      alt:"Advanced Search"
    },
  ];

  const electionsUs = [
    {
      id: 1,
      url: "/images/ElectionsUS/Presidentielle.png",
      title: translate(lang, "presidentialTitle"),
      subtitle: translate(lang, "presidentialSub"),
      alt: translate(lang, "presidentialTitle")
    },
    {
      id: 2,
      url: "/images/ElectionsUS/Sénat.png",
      title: translate(lang, "senatTitle"),
      subtitle: translate(lang, "senatSub"),
      alt: translate(lang, "senatTitle")
    },
    {
      id: 3,
      url: "/images/ElectionsUS/Ticker.png",
      title: translate(lang, "tickerTitle"),
      subtitle: translate(lang, "tickerSub"),
      alt: translate(lang, "tickerTitle")
    },
  ];

  

  return (
    <>
      <Grid container justify="center">
        <SvgWoodyTechnologyPinkLogo className={classes.woody} />
      </Grid>
      <Grid container direction="column" wrap="nowrap" alignItems="center">
        <Grid container justify="space-around" alignItems="center">
          <Grid item className={classes.box} xs={12} lg={6}>
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

          <Grid item className={classes.box} xs={12} lg={6}>
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
          <Grid item className={classes.box} xs={12} lg={6}>
            <Typography variant="body1">
              <span className={classes.textPrimary}>
                {translate(lang, "interface")}
              </span>
              {translate(lang, "include")}
            </Typography>
          </Grid>
          <Grid item className={classes.box} xs={12} lg={6}>
            <Grid container justify="center">
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/images/ElectionsUS/Presidentielle.png"
                    title="UI Elections Us France 24"
                    onClick={() => {
                      setMediaWidth("85%")
                      setImages(electionsUs);
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
                onClick={() => {
                  setMediaWidth("97%")
                  setImages(licenseServeur);
                  setOpenModal(true);
                }}
              />
            </CardActionArea>
            <CardContent>
              <Typography
                variant="body1"
                align={ !matches ? "center" : "justify"}
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
    </>
  );
};

export default ProfessionalWork;
