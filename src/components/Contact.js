import React, { useState } from "react";
import "../App.scss";
import { useForm, Controller } from "react-hook-form";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Typography,
  Snackbar,
  IconButton,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CallIcon from "@material-ui/icons/Call";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Button1 from "./Button1";

const useStyles = makeStyles(
  (theme) => ({
    form: {
      width: "100%",
    },
    card: {
      width: "30rem",
      margin: "auto",
    },
    icon: {
      marginRight: "1rem",
    },
    colorWarning: {
      color: theme.palette.warning.main,
    },
  }),
  { index: 1 }
);

const Contact = () => {
  const [buttonStatus, setButtonStatus] = useState("submit");
  const [messageStatus, setMessageStatus] = useState("");
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  const defaultValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    setButtonStatus("sending");
    console.log(data);
    let details = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setButtonStatus("submit");
    let result = await response.json();
    setMessageStatus(result.status);
    if (messageStatus === "success") {
      reset(defaultValues);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setMessageStatus("");
  };

  return (
    <div className="container">
      <div className="block">
        <Typography variant="h1" component="h1">
          {translate(lang, "contactMe")}
        </Typography>

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
                label={translate(lang, "name")}
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
                label={translate(lang, "subject")}
                fullWidth
                required
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
          <Grid container justify="flex-end">
            <Button1 type="submit" text={translate(lang, buttonStatus)} />
          </Grid>
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={messageStatus === "error" || messageStatus === "success"}
          autoHideDuration={6000}
          onClose={handleClose}
          message={
            messageStatus === "error"
              ? translate(lang, "errorSent")
              : translate(lang, "sent")
          }
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
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
      </div>

      <div className="block">
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              Eric Juquel
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {translate(lang, "subtitle")}
            </Typography>
            <Typography>55 rue Gabriel Peri</Typography>
            <Typography>94200 Ivry sur Seine</Typography>
            <Typography gutterBottom>France</Typography>
            <Grid container>
              {" "}
              <CallIcon
                color="primary"
                className={classes.icon}
                classes={{
                  colorPrimary: classes.colorWarning,
                }}
              ></CallIcon>
              <Typography
                color="textSecondary"
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
              {" "}
              <AlternateEmailIcon color="secondary" className={classes.icon} />
              <Typography
                color="textSecondary"
                variant="subtitle1"
                color="secondary"
              >
                ericjuquel94@gmail.com
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
