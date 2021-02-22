import React from "react";
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
  cardAction: {},
});

const Logo = () => {
  const classes = useStyles();

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
            Développeur Web
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          CV
        </Button>
        <Button size="small" color="primary" variant="contained">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Logo;
