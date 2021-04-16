import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { translate } from '../../translations/translate';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CallIcon from '@material-ui/icons/Call';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const useStyles = makeStyles(
  (theme) => ({
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
  }),
  { index: 1 }
);

const VisitCard = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  return (
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
          />
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
          <AlternateEmailIcon color="secondary" className={classes.icon} />
          <Typography variant="subtitle1" color="secondary">
            ejuquel@yahoo.fr
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default VisitCard;
