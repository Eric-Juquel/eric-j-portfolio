import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { translate } from '../../translations/translate';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Button1 from '../ui/Button1';

import emailjs from 'emailjs-com';

const useStyles = makeStyles(
  (theme) => ({
    form: {
      width: '100%',
    },
  }),
  { index: 1 }
);

const ContactForm = () => {
  const classes = useStyles();

  const [buttonStatus, setButtonStatus] = useState('submit');
  const [messageStatus, setMessageStatus] = useState('');

  const lang = useSelector((state) => state.languageReducer.language);

  const defaultValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const { handleSubmit, control, reset } = useForm({ defaultValues });

  useEffect(() => {
    if (messageStatus === 'OK') {
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

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        params,
        'user_MkYWMBpj2u3YpnREL8DXt'
      );

      setMessageStatus(result.text);
      setButtonStatus('submit');
    } catch (error) {
      setMessageStatus('error');
      setButtonStatus('submit');
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessageStatus('');
  };

  return (
    <>
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
          {buttonStatus === 'sending' ? (
            <Button1 type="submit" text={translate(lang, 'sending')} />
          ) : (
            <Button1 type="submit" text={translate(lang, 'submit')} />
          )}
        </Grid>
        <Typography variant="caption" component="p">
          * {translate(lang, 'required')}
        </Typography>
      </form>
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
          <>
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
          </>
        }
      />
    </>
  );
};

export default ContactForm;
