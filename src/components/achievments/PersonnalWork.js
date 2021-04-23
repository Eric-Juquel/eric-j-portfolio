import React, { useState, useEffect } from 'react';
import '../../App.scss';
import { makeStyles } from '@material-ui/core/styles';
import { translate } from '../../translations/translate';
import { useSelector } from 'react-redux';
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
} from '@material-ui/core';
import CarouselModal from '../CarouselModal';
import LightTooltip from '../ui/LightTooltip';

const useStyles = makeStyles(
  (theme) => ({
    grid: {
      marginBottom: '3rem',
    },
    card1: {
      width: '80%',
      '@media (max-width:600px)': {
        width: '100%',
        padding: '0 0.2rem',
      },
    },
    media: {
      maxWidth: '100%',
      height: '33rem',
      margin: 'auto',
      border: 'none',
      '@media screen and (max-width:1400px)': {
        height: '20rem',
      },
      '@media (max-width:600px)': {
        height: '10rem',
      },
      backgroundImage: '/images/lineShop/home.png',
      backgroundSize: '5%',
    },
    media1: {
      maxWidth: '100%',
      height: '33rem',
      margin: 'auto',
      border: 'none',
      '@media screen and (max-width:1400px)': {
        height: '20rem',
      },
      '@media (max-width:600px)': {
        height: '10rem',
      },
    },
    box: {
      width: '50%',
      minHeight: '5rem',
      padding: '3rem',
      margin: 'auto',
    },
    media2: {
      height: 'auto',
      width: '100%',
      '@media (max-width:1400px)': {
        padding: '0 0.2rem',
      },
    },
  }),
  { index: 1 }
);

const PersonnalWork = () => {
  const [loading, setLoading] = useState(true);
  const lineShopScreen = useMediaQuery('(max-width:1400px');
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  useEffect(() => {
    if (lineShopScreen) {
      setLoading(false);
    }
  }, [lineShopScreen]);

  // CAROUSEL SETTINGS
  const matches = useMediaQuery('(max-width:600px)');
  const [openModal, setOpenModal] = useState(false);
  const [images, setImages] = useState([
    {
      id: 1,
      url: '',
      title: 'Title',
      subtitle: 'subtitle',
      alt: '',
    },
  ]);

  // DATAS
  const sites = [
    {
      id: 1,
      title: translate(lang, 'smTitle'),
      image: '/images/ileSainteMarie/desktop.png',
      subtitle: translate(lang, 'smSub'),
      carousel: [
        {
          id: 1,
          url: '/images/ileSainteMarie/desktop.png',
          title: '',
          subtitle: '',
          alt: '',
        },
        {
          id: 2,
          url: '/images/ileSainteMarie/sm_tablet.png',
          title: '',
          subtitle: '',
          alt: '',
        },
        {
          id: 3,
          url: '/images/ileSainteMarie/sm_mobile.png',
          title: '',
          subtitle: '',
          alt: 'Mobile',
        },
      ],
    },
    {
      id: 2,
      title: translate(lang, 'ltdTitle'),
      image: '/images/ltd/desktop.png',
      subtitle: translate(lang, 'ltdSub'),
      carousel: [
        {
          id: 1,
          url: '/images/ltd/desktop.png',
          title: '',
          subtitle: '',
          alt: 'Desktop',
        },
        {
          id: 2,
          url: '/images/ltd/desktop2.png',
          title: '',
          subtitle: '',
          alt: 'Desktop',
        },
        {
          id: 3,
          url: '/images/ltd/ltd_tablet.png',
          title: '',
          subtitle: '',
          alt: 'Tablet',
        },
        {
          id: 4,
          url: '/images/ltd/ltd_mobile.png',
          title: '',
          subtitle: '',
          alt: 'Mobile',
        },
      ],
    },
    {
      id: 3,
      title: translate(lang, 'lbeTitle'),
      image: '/images/leBonEndroit/accueuil.png',
      subtitle: translate(lang, 'lbeSub'),
      carousel: [
        {
          id: 1,
          url: '/images/leBonEndroit/accueuil.png',
          title: '',
          subtitle: '',
          alt: 'Home',
        },
        {
          id: 2,
          url: '/images/leBonEndroit/restaurant.png',
          title: '',
          subtitle: '',
          alt: 'Restaurant',
        },
        {
          id: 3,
          url: '/images/leBonEndroit/bungalow.png',
          title: '',
          subtitle: '',
          alt: 'Restaurant',
        },
        {
          id: 4,
          url: '/images/leBonEndroit/Loisir.png',
          title: '',
          subtitle: '',
          alt: 'Leisure Activity',
        },
        {
          id: 5,
          url: '/images/leBonEndroit/boutique.png',
          title: '',
          subtitle: '',
          alt: 'Shop',
        },
      ],
    },
  ];

  return (
    <>
      <Grid container justify="space-evenly">
        <Card className={classes.card1}>
          <CardMedia
            className={loading ? classes.media : classes.media1}
            component={!lineShopScreen ? 'iframe' : 'img'}
            image={
              !lineShopScreen
                ? 'https://lineshopgaming.herokuapp.com'
                : '/images/lineShop/home.png'
            }
            loading="lazy"
            title="LineShop Gaming"
            sandbox="allow-scripts allow-same-origin allow-forms"
            onLoad={() => setLoading(true)}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              LineShop Gaming - MERN stack
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {translate(lang, 'lineshopDesc')}
            </Typography>
          </CardContent>
          <CardActions>
            <LightTooltip
              title={`${translate(
                lang,
                'linkTo'
              )} lineshopgaming.herokuapp.com`}
              aria-label={`${translate(
                lang,
                'linkTo'
              )} lineshopgaming.herokuapp.com`}
            >
              <Button
                size="small"
                color="primary"
                href="https://lineshopgaming.herokuapp.com"
              >
                {translate(lang, 'visit')}
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
        justify="space-evenly"
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
                      title={translate(lang, 'slider')}
                      aria-label={translate(lang, 'slider')}
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
