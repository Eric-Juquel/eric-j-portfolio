import React, { useState, useEffect } from 'react';
import '../App.scss';
import { useForm, Controller } from 'react-hook-form';
import { translate } from '../translations/translate';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  TextField,
  Typography,
  Snackbar,
  IconButton,
  Button,
  Card,
  CardContent,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CallIcon from '@material-ui/icons/Call';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Button1 from './Button1';
import emailjs from 'emailjs-com';

const useStyles = makeStyles(
  (theme) => ({
    form: {
      width: '100%',
    },
    card: {
      width: '30rem',
      margin: '1rem auto',
      '@media screen and (max-width: 600px)': {
        width: '100%',
      },
    },
    icon: {
      marginRight: '1rem',
    },
    colorWarning: {
      color: theme.palette.warning.main,
    },
    captcha: {
      height: '4rem',
    },
  }),
  { index: 1 }
);

const Contact2 = () => {
  const [buttonStatus, setButtonStatus] = useState('submit');
  const [messageStatus, setMessageStatus] = useState('');
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  const defaultValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const { handleSubmit, control, reset } = useForm({ defaultValues });

  useEffect(() => {
    if (messageStatus === 'success') {
      reset(defaultValues);
    }
    // eslint-disable-next-line
  }, [messageStatus]);

  const onSubmit = async (data) => {
    setButtonStatus('sending');

    let params = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    console.log(params);

    setButtonStatus('submit');
    try {
      const result = await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        params,
        process.env.REACT_APP_USER_ID
      );

      setMessageStatus(result.text);
    } catch (error) {
      setMessageStatus('error');
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessageStatus('');
  };

  return (
    <section className="container contact" id="contact">
      <Grid container direction="column">
        <Grid item md={12}>
          <Grid container>
            <Typography variant="h1" component="h1">
              {translate(lang, 'contactMe')}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5} justify="center">
          <Grid item lg={6}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    as={TextField}
                    id="name"
                    name="name"
                    control={control}
                    variant="outlined"
                    color="secondary"
                    label={translate(lang, 'name')}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    as={TextField}
                    type="email"
                    id="email"
                    name="email"
                    control={control}
                    variant="outlined"
                    color="secondary"
                    label="Email"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    as={TextField}
                    id="subect"
                    name="subject"
                    control={control}
                    variant="outlined"
                    color="secondary"
                    label={translate(lang, 'subject')}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    as={TextField}
                    id="message"
                    name="message"
                    control={control}
                    variant="outlined"
                    color="secondary"
                    label="Message"
                    fullWidth
                    multiline
                    rows={5}
                    required
                  />
                </Grid>
              </Grid>
              <Grid container justify="flex-start" alignItems="center">
                <Button1 type="submit" text={translate(lang, buttonStatus)} />
              </Grid>
            </form>
          </Grid>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={
              messageStatus === 'error' ||
              messageStatus === 'OK' ||
              messageStatus === 'bot'
            }
            autoHideDuration={6000}
            onClose={handleClose}
            message={
              messageStatus === 'error'
                ? translate(lang, 'errorSent')
                : messageStatus === 'bot'
                ? translate(lang, 'bot')
                : translate(lang, 'sent')
            }
            action={
              <React.Fragment>
                <Button color="secondary" size="small" onClick={handleClose}>
                  {translate(lang, 'close')}
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />

          <Grid item lg={6} xs={12}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                  Eric Juquel
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {translate(lang, 'subtitle')}
                </Typography>
                <Typography>Paris</Typography>
                <Typography gutterBottom>France</Typography>
                <Grid container>
                  {' '}
                  <CallIcon
                    color="primary"
                    className={classes.icon}
                    classes={{
                      colorPrimary: classes.colorWarning,
                    }}
                  ></CallIcon>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    classes={{
                      colorPrimary: classes.colorWarning,
                    }}
                  >
                    +33 6 28 90 58 89
                  </Typography>
                </Grid>
                <Grid container>
                  {' '}
                  <AlternateEmailIcon
                    color="secondary"
                    className={classes.icon}
                  />
                  <Typography variant="subtitle1" color="secondary">
                    ejuquel@yahoo.fr
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact2;
