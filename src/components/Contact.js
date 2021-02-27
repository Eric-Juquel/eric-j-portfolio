import React from "react";
import "../App.scss";
import { useForm, Controller } from "react-hook-form";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, TextField, Typography } from "@material-ui/core";
import Button from "./Button";

const useStyles = makeStyles(
  (theme) => ({
    form: {
      width: "100%",
    },
  }),
  { index: 1 }
);

const Contact = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  const defaultValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(data);
    reset(defaultValues);
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
                variant="filled"
                color="secondary"
                label={translate(lang, "name")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                as={TextField}
                type="email"
                id="email"
                name="email"
                control={control}
                variant="filled"
                color="secondary"
                label="Email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={TextField}
                id="subect"
                name="subject"
                control={control}
                variant="filled"
                color="secondary"
                label={translate(lang, "subject")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={TextField}
                id="message"
                name="message"
                control={control}
                variant="filled"
                color="secondary"
                label="Message"
                fullWidth
                multiline
                rows={5}
              />
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Button type="submit" text={translate(lang, "send")} />
          </Grid>
        </form>
      </div>

      <div className="block"></div>
    </div>
  );
};

export default Contact;
