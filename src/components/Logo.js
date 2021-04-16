import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { translate } from '../translations/translate';
import { useSelector } from 'react-redux';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LightTooltip from './ui/LightTooltip';

import logo from '../images/Logo1.png';

const useStyles = makeStyles(
  (theme) => ({
    card: {
      maxWidth: '90%',
      background: 'transparent',
      color: 'rgb(249, 247, 246)',
      '@media screen and (max-width:600px)': {
        marginTop: '1rem',
      },
    },
    button: {
      margin: 'auto',
      containedPrimary: theme.palette.warning.main,
    },
    colorWarning: {
      backgroundColor: theme.palette.warning.main,
      '&:hover': {
        backgroundColor: theme.palette.warning.light,
      },
    },
    actionAria: {
      display: 'flex',
      padding: '1rem',
      marginBottom: '1rem',
    },
    image: {
      padding: '2rem',
    },
    imageSmall: {
      width: '10rem',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
  { index: 1 }
);


const Logo = ({ setIsChecked }) => {
  const matches = useMediaQuery('(max-width:960px)');
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [documentRef, setDocumentRef] = useState('');

  // Modal //
  const openCVModalHandler = () => {
    setModalTitle('CV');
    setModalDescription(
      translate(lang, 'cv') + ' ' + translate(lang, 'pdf') + '?'
    );
    setDocumentRef('/files/CV_2021-04-08_Eric_JUQUEL.pdf');
    setOpen(true);
  };
  const openLRModalHandler = () => {
    setModalTitle('LR');
    setModalDescription(
      translate(lang, 'lr') + ' ' + translate(lang, 'pdf') + '?'
    );
    setDocumentRef('/files/CV_2021-04-08_Eric_JUQUEL.pdf');
    setOpen(true);
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  const body = (
    <>
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            component="h2"
            align="center"
          >
            {modalTitle}
          </Typography>
          <Typography
            id="transition-modal-description"
            variant="h6"
            component="h3"
            align="center"
            gutterBottom
          >
            {modalDescription}
          </Typography>
          <Grid container>
            <Button
              className={classes.button}
              classes={{
                containedPrimary: classes.colorWarning,
              }}
              size="small"
              color="secondary"
              variant="contained"
              href={documentRef}
              download
              onClick={closeModalHandler}
            >
              {translate(lang, 'download')}
            </Button>
            <Button
              className={classes.button}
              classes={{
                containedPrimary: classes.colorWarning,
              }}
              size="small"
              color="secondary"
              variant="contained"
              onClick={closeModalHandler}
            >
              {translate(lang, 'exit')}
            </Button>
          </Grid>
        </div>
      </Fade>
    </>
  );

  return (
    <Card className={classes.card}>
      <LightTooltip
        title={translate(lang, 'home')}
        aria-label={translate(lang, 'home')}
        placement="right"
      >
        <Link to="/">
          <CardActionArea
            className={matches ? classes.actionAria : ''}
            onClick={() => {
              setIsChecked && setIsChecked(false);
              window.scrollTo({
                top: 0,
                behavior: !matches ? 'smooth' : 'auto',
              });
            }}
          >
            <CardMedia
              component="img"
              alt="Eric Juquel"
              height="auto"
              image={logo}
              className={matches ? classes.imageSmall : classes.image}
            />

            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Eric
              </Typography>
              <Typography variant="h6" component="h3">
                {translate(lang, 'title')}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </LightTooltip>
      <CardActions>
        <LightTooltip
          title={translate(lang, 'cv')}
          aria-label={translate(lang, 'cv')}
        >
          <Button
            className={classes.button}
            classes={{
              containedPrimary: classes.colorWarning,
            }}
            size="medium"
            color="secondary"
            variant="contained"
            onClick={openCVModalHandler}
          >
            CV
          </Button>
        </LightTooltip>
        <LightTooltip
          title={translate(lang, 'lr')}
          aria-label={translate(lang, 'lr')}
        >
          <Button
            className={classes.button}
            classes={{
              containedPrimary: classes.colorWarning,
            }}
            size="medium"
            color="secondary"
            variant="contained"
            onClick={openLRModalHandler}
          >
            LR
          </Button>
        </LightTooltip>
      </CardActions>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {body}
      </Modal>
    </Card>
  );
};

export default Logo;
