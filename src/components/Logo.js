import React from "react";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { teal } from "@material-ui/core/colors";

import logo from "../images/Logo1.png";

const useStyles = makeStyles({
  card: {
    maxWidth: "90%",
    background: "transparent",
    color: "rgb(249, 247, 246)",
  },
  button: {
    margin: "auto",
  },
});

const Logo = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <Card className={classes.card}>
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
          <Typography variant="body1" component="p">
            {translate(lang, "title")}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          className={classes.button}
          size="medium"
          color="primary"
          variant="contained"
          href="https://cvdesignr.com/p/5c5330da9718e"
        >
          CV
        </Button>
      </CardActions>
    </Card>
  );
};

export default Logo;
