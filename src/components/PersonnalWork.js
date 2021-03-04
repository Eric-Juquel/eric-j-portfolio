import React, { useState } from "react";
import "../App.scss";
import { makeStyles } from "@material-ui/core/styles";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import CarouselModal from "./CarouselModal";

const useStyles = makeStyles(
  (theme) => ({
    grid: {
      marginBottom: "3rem",
    },
    card1: {
      width: "80%",
    },
    media1: {
      width: "100%",
      height: "33rem",
      margin: "auto",
      border: "none",
    },
    box: {
      width: "50%",
      minHeight: "5rem",
      padding: "3rem",
      margin: "auto",
    },
    media2: {
      height: "auto",
      width: "100%",
    },
  }),
  { index: 1 }
);

const PersonnalWork = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  // CAROUSEL SETTINGS
  const matches = useMediaQuery("(max-width:600px)");
  const [openModal, setOpenModal] = useState(false);
  const [images, setImages] = useState([
    {
      id: 1,
      url: "",
      title: "Title",
      subtitle: "subtitle",
      alt: "",
    },
  ]);

  // DATAS
  const sites = [
    {
      id: 1,
      title: translate(lang, "smTitle"),
      image: "/images/ileSainteMarie/desktop.png",
      subtitle: translate(lang, "smSub"),
      carousel: [
        {
          id: 1,
          url: "/images/ileSainteMarie/desktop.png",
          title: "Desktop",
          subtitle: "",
          alt: "",
        },
        {
          id: 2,
          url: "/images/ileSainteMarie/sm_tablet.png",
          title: "Tablet",
          subtitle: "",
          alt: "",
        },
        {
          id: 3,
          url: "/images/ileSainteMarie/sm_mobile.png",
          title: "Mobile",
          subtitle: "",
          alt: "",
        },
      ],
    },
    {
      id: 2,
      title: translate(lang, "ltdTitle"),
      image: "/images/ltd/desktop.png",
      subtitle: translate(lang, "ltdSub"),
      carousel: [
        {
          id: 1,
          url: "/images/ltd/desktop.png",
          title: "Desktop",
          subtitle: "",
          alt: "",
        },
        {
          id: 2,
          url: "/images/ltd/desktop2.png",
          title: "Desktop",
          subtitle: "",
          alt: "",
        },
        {
          id: 3,
          url: "/images/ltd/ltd_tablet.png",
          title: "Tablet",
          subtitle: "",
          alt: "",
        },
        {
          id: 4,
          url: "/images/ltd/ltd_mobile.png",
          title: "Mobile",
          subtitle: "",
          alt: "",
        },
      ],
    },
    {
      id: 3,
      title: translate(lang, "lbeTitle"),
      image: "/images/leBonEndroit/lebonendroitdemo.jpg",
      subtitle: translate(lang, "lbeSub"),
      carousel: [
        {
          id: 1,
          url: "/images/ileSainteMarie/desktop.png",
          title: "Desktop",
          subtitle: "",
          alt: "",
        },
        {
          id: 2,
          url: "/images/ileSainteMarie/tablet.png",
          title: "Tablet",
          subtitle: "",
          alt: "",
        },
        {
          id: 3,
          url: "/images/ileSainteMarie/mobile.png",
          title: "Mobile",
          subtitle: "",
          alt: "",
        },
      ],
    },
  ];

  return (
    <>
      <Grid container justify="space-evenly">
        <Card className={classes.card1}>
          <CardMedia
            className={classes.media1}
            component="iframe"
            image="https://lineshopgaming.herokuapp.com"
            title="LineShop Gaming"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              LineShop Gaming - MERN stack
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {translate(lang, "lineshopDesc")}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href="https://lineshopgaming.herokuapp.com"
            >
              {translate(lang, "visit")}
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item className={classes.box}>
        <Divider variant="middle" />
      </Grid>
      <Grid container justify="space-evenly" className={classes.grid}>
        {Array.isArray(sites) &&
          sites.length > 0 &&
          sites.map((site) => {
            return (
              <Grid item md={3} key={site.id}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media2}
                      component="img"
                      image={site.image}
                      title={site.title}
                      alt={site.title}
                      onClick={() => {
                        setImages(site.carousel);
                        setOpenModal(true);
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {site.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {site.subtitle}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
      </Grid>
      <CarouselModal
        isMobile={matches}
        open={openModal}
        setOpen={setOpenModal}
        images={images}
      />
    </>
  );
};

export default PersonnalWork;
