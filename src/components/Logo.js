import React from "react";
import { Link } from "react-router-dom";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import logo from "../images/Logo1.png";

const useStyles = makeStyles(
  (theme) => ({
    card: {
      maxWidth: "90%",
      background: "transparent",
      color: "rgb(249, 247, 246)",
    },
    button: {
      margin: "auto",
      containedPrimary: theme.palette.warning.main,
    },
    colorWarning: {
      backgroundColor: theme.palette.warning.main,
      "&:hover": {
        backgroundColor: theme.palette.warning.light,
      },
    },
  }),
  { index: 1 }
);

const Logo = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <Card className={classes.card}>
      <Link to="/">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Eric Juquel"
            height="170"
            image={logo}
            title="Eric Juquel"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              Eric
            </Typography>
            <Typography variant="h6" component="h3">
              {translate(lang, "title")}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button
          className={classes.button}
          classes={{
            containedPrimary: classes.colorWarning,
          }}
          size="medium"
          color="primary"
          variant="contained"
          href="https://cvdesignr.com/p/5c5330da9718e"
        >
          CV
        </Button>
        <Button
          className={classes.button}
          classes={{
            containedPrimary: classes.colorWarning,
          }}
          size="medium"
          color="primary"
          variant="contained"
          href="https://cvdesignr.com/p/5c5330da9718e"
        >
          LR
        </Button>
      </CardActions>
    </Card>
  );
};

export default Logo;
