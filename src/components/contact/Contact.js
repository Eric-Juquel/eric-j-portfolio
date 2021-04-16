import React, { useState, useEffect } from 'react';
import '../../App.scss';
import { useForm, Controller } from 'react-hook-form';
import { translate } from '../../translations/translate';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  TextField,
  Typography,
  Snackbar,
  IconButton,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Button1 from '../ui/Button1';
import emailjs from 'emailjs-com';
import VisitCard from './VisitCard';

const useStyles = makeStyles(
  (theme) => ({
    form: {
      width: '100%',
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
        'user_MkYWMBpj2u3YpnREL8DXt'
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
            <VisitCard />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact2;
