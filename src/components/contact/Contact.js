import '../../App.scss';

import { translate } from '../../translations/translate';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import VisitCard from './VisitCard';
import ContactForm from './ContactForm';

const Contact = () => {
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <section className="container contact" id="contact">
      <Grid container direction="column">
        <Grid item md={12}>
          <Grid container>
            <Typography variant="h1" component="h1">
              {translate(lang, 'contactMe')}
            </Typography>
            <Typography variant="caption">**</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5} justify="center">
          <Grid item lg={6}>
            <ContactForm />
            <Typography variant="caption" component="p">
              ** {translate(lang, 'site')}{' '}
              <i>https://ericjportfolio.herokuapp.com</i>
              {translate(lang, 'datas')}
            </Typography>
          </Grid>

          <Grid item lg={6} xs={12}>
            <VisitCard />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact;
