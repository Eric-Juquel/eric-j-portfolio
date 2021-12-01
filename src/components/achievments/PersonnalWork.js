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
      image:
        'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363670/portfolio/sainte-marie/desktop_mhhwzu_xnmt1i.webp',
      subtitle: translate(lang, 'smSub'),
      carousel: [
        {
          id: 1,
          url:
            'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363670/portfolio/sainte-marie/desktop_mhhwzu_xnmt1i.webp',
          title: '',
          subtitle: '',
          alt: '',
        },
        {
          id: 2,
          url:
            'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363672/portfolio/sainte-marie/sm_tablet_wmabsc_ygrpsz.webp',
          title: '',
          subtitle: '',
          alt: '',
        },
        {
          id: 3,
          url:
            'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363671/portfolio/sainte-marie/sm_mobile_tdcoqo_edcv5a.webp',
          title: '',
          subtitle: '',
          alt: 'Mobile',
        },
      ],
    },
    {
      id: 2,
      title: translate(lang, 'ltdTitle'),
      image:
        'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363611/portfolio/ltd/desktop_df1w7c_xpeay1.webp',
      subtitle: translate(lang, 'ltdSub'),
      carousel: [
        {
          id: 1,
          url:
            'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363611/portfolio/ltd/desktop_df1w7c_xpeay1.webp',
          title: '',
          subtitle: '',
          alt: 'Desktop',
        },
        {
          id: 2,
          url:
            'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363646/portfolio/ltd/desktop2_blkuu8_dl7mb3.webp',
          title: '',
          subtitle: '',
          alt: 'Desktop',
        },
        {
          id: 3,
          url:
            'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363618/portfolio/ltd/ltd_tablet_vbtuox_u4unwk.webp',
          title: '',
          subtitle: '',
          alt: 'Tablet',
        },
        {
          id: 4,
          url:
            'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363619/portfolio/ltd/ltd_mobile_jblji3_wjzii8.webp',
          title: '',
          subtitle: '',
          alt: 'Mobile',
        },
      ],
    },
    {
      id: 3,
      title: translate(lang, 'lbeTitle'),
      image:
        'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363566/portfolio/bon-endroit/accueuil_d3chw0_tcl3kp.webp',
      subtitle: translate(lang, 'lbeSub'),
      carousel: [
        {
          id: 1,
          url:
            'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363566/portfolio/bon-endroit/accueuil_d3chw0_tcl3kp.webp',
          title: '',
          subtitle: '',
          alt: 'Home',
        },
        {
          id: 2,
          url:
            'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363574/portfolio/bon-endroit/restaurant_kqmail_vdvf49.webp',
          title: '',
          subtitle: '',
          alt: 'Restaurant',
        },
        {
          id: 3,
          url:
            'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363569/portfolio/bon-endroit/bungalow_qnrxfb_pizsi8.webp',
          title: '',
          subtitle: '',
          alt: 'Restaurant',
        },
        {
          id: 4,
          url:
            'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363573/portfolio/bon-endroit/Loisir_nhe2ua_tnq0ro.webp',
          title: '',
          subtitle: '',
          alt: 'Leisure Activity',
        },
        {
          id: 5,
          url:
            'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363568/portfolio/bon-endroit/boutique_xhcvc5_hfsbjg.webp',
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
            className={!lineShopScreen ? classes.media1 : classes.media2}
            component={!lineShopScreen ? 'iframe' : 'img'}
            image={
              !lineShopScreen
                ? 'https://lineshop-gaming-next-js.vercel.app'
                : 'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363590/portfolio/lineshop/lineshop-home_nssvt5_ahznme.webp'
            }
            // component={'img'}
            // image={'https://res.cloudinary.com/ericjuquel94/image/upload/v1638363590/portfolio/lineshop/lineshop-home_nssvt5_ahznme.webp'}
            loading="lazy"
            title="LineShop Gaming"
            sandbox="allow-scripts allow-same-origin "
            onLoad={() => setLoading(false)}
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
              title={`${translate(lang, 'linkTo')} lineshop-gaming-next-js.com`}
              aria-label={`${translate(
                lang,
                'linkTo'
              )} lineshop-gaming-next-js.com`}
            >
              <Button
                size="small"
                color="primary"
                href="https://lineshop-gaming-next-js.vercel.app/"
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
