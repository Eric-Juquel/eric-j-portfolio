import React, { useMemo, useState } from "react";
import "../../../App.scss";
import { makeStyles } from "@material-ui/core/styles";
import { translate } from "../../../translations/translate";
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
import CarouselModal from "../../CarouselModal";
import LightTooltip from "../../ui/LightTooltip";
import { getSites } from "./personnal-data";

const useStyles = makeStyles(
  (theme) => ({
    grid: {
      marginBottom: "3rem",
    },
    card1: {
      width: "80%",
      "@media (max-width:600px)": {
        width: "100%",
        padding: "0 0.2rem",
      },
    },
    media1: {
      maxWidth: "100%",
      height: "33rem",
      margin: "auto",
      border: "none",
      "@media screen and (max-width:1400px)": {
        height: "20rem",
      },
      "@media (max-width:600px)": {
        height: "10rem",
      },
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
      "@media (max-width:1400px)": {
        padding: "0 0.2rem",
      },
    },
  }),
  { index: 1 }
);

const PersonnalWork = () => {
  const lineShopScreen = useMediaQuery("(max-width:1400px");
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

  const sites = useMemo(() => {
    return getSites(lang);
  }, [lang]);

  return (
    <>
      <Grid container justifyContent="space-evenly">
        <Card className={classes.card1}>
          <CardMedia
            className={!lineShopScreen ? classes.media1 : classes.media2}
            component={!lineShopScreen ? "iframe" : "img"}
            image={
              !lineShopScreen
                ? "https://lineshopgaming.vercel.app/"
                : "https://res.cloudinary.com/ericjuquel94/image/upload/v1638363590/portfolio/lineshop/lineshop-home_nssvt5_ahznme.webp"
            }
            loading="lazy"
            title="LineShop Gaming"
            sandbox="allow-scripts allow-same-origin "
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
            <LightTooltip
              title={`${translate(
                lang,
                "linkTo"
              )} https://lineshopgaming.vercel.app`}
              aria-label={`${translate(
                lang,
                "linkTo"
              )} https://lineshopgaming.vercel.app`}
            >
              <Button
                size="small"
                color="primary"
                href="https://lineshopgaming.vercel.app/"
              >
                {translate(lang, "visit")}
              </Button>
            </LightTooltip>
          </CardActions>
        </Card>
      </Grid>
      <Grid item className={classes.box}>
        <Divider variant="middle" />
      </Grid>
      <Grid
        container
        justifyContent="space-evenly"
        className={classes.grid}
        spacing={5}
      >
        {Array.isArray(sites) &&
          sites.length > 0 &&
          sites.map((site) => {
            return (
              <Grid item lg={3} xs={12} key={site.id}>
                <Card>
                  <CardActionArea
                    onClick={() => {
                      setImages(site.carousel);
                      setOpenModal(true);
                    }}
                  >
                    <LightTooltip
                      title={translate(lang, "slider")}
                      aria-label={translate(lang, "slider")}
                      placement="top"
                    >
                      <CardMedia
                        className={classes.media2}
                        component="img"
                        image={site.image}
                        alt={site.title}
                      />
                    </LightTooltip>
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
        mediaHeight="80%"
        mediaWidth="95%"
      />
    </>
  );
};

export default PersonnalWork;
