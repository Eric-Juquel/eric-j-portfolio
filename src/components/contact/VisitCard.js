import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { translate } from "../../translations/translate";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CallIcon from "@material-ui/icons/Call";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LightTooltip from "../ui/LightTooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(
  (theme) => ({
    card: {
      width: "30rem",
      margin: "1rem auto",
      "@media screen and (max-width: 600px)": {
        width: "100%",
      },
    },
    icon: {
      marginRight: "1rem",
    },
    colorWarning: {
      color: theme.palette.warning.main,
    },
    phone: {
      color: "rgb(229, 0, 113)",
      margin: "auto",
    },
  }),
  { index: 1 }
);

const VisitCard = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h2" gutterBottom>
          Eric Juquel
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {translate(lang, "subtitle")}
        </Typography>
        <Typography>Paris</Typography>
        <Typography gutterBottom>France</Typography>
        <Grid container>
          {" "}
          <CallIcon
            color="primary"
            className={classes.icon}
            classes={{
              colorPrimary: classes.colorWarning,
            }}
          />
          {matches ? (
            <LightTooltip
              title={`${translate(lang, "tel")}Eric Juquel`}
              aria-label={`${translate(lang, "tel")}Eric Juquel`}
            >
              <Link
                variant="subtitle1"
                component="a"
                href="tel:+33628905889"
                underline="none"
              >
                <span className={classes.phone}>+33 6 28 90 58 89</span>
              </Link>
            </LightTooltip>
          ) : (
            <Typography
              variant="subtitle1"
              color="primary"
              classes={{
                colorPrimary: classes.colorWarning,
              }}
            >
              +33 6 28 90 58 89
            </Typography>
          )}
        </Grid>
        <Grid container>
          {" "}
          <AlternateEmailIcon color="secondary" className={classes.icon} />
          <LightTooltip
            title={translate(lang, "email")}
            aria-label={translate(lang, "email")}
          >
            <Link
              variant="subtitle1"
              color="secondary"
              component="a"
              href="mailto:ericjuquel94@gmail.com"
            >
              ericjuquel94@gmail.com
            </Link>
          </LightTooltip>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default VisitCard;
