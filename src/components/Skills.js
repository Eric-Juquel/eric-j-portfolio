import React from "react";
import "../App.scss";
import { makeStyles } from "@material-ui/core/styles";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import ProgressBox from "./ProgressBox";
import ChipBox from './ChipBox'

const useStyles = makeStyles(
  (theme) => ({
    item: {
      width: "100%",
    },  
  }),
  { index: 1 }
);

const Skills = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);

  const list_1 = ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WordPress"];
  const list_2 = ["ReactJs", "NodeJs", "Express", "MongoDB", "ArangoDB"];
  const list_3 = ["Git", "GitHub", "GitLab"];
  const list_4 = [
    "Material-UI",
    "React-Hook-Form",
    "React-Select",
    "Cypress",
    "Webpack",
  ];

  return (
    <div className="container">
      <div className="block">
        <Typography variant="h1" component="h1">
          {translate(lang, "skills")}
        </Typography>

        <Typography variant="body1" paragraph>
          {translate(lang, "skills-1")}:
          {list_1.map((e, i) => {
            return (
              <span key={`${e}_${i}`} className="highlight">
                {" "}
                {e}
                {i < list_1.length - 1 && (
                  <span style={{ color: "rgba(255, 255, 255,0.87)" }}>, </span>
                )}
              </span>
            );
          })}
          .
        </Typography>
        <Typography variant="body1" paragraph>
          {translate(lang, "skills-2")}:
          {list_2.map((e, i) => {
            return (
              <span key={`${e}_${i}`} className="highlight">
                {" "}
                {e}
                {i < list_2.length - 1 && (
                  <span style={{ color: "rgba(255, 255, 255,0.87)" }}>, </span>
                )}
              </span>
            );
          })}
          .
        </Typography>
        <Typography variant="body1" paragraph>
          {translate(lang, "skills-3")}:{" "}
          {list_3.map((e, i) => {
            return (
              <span key={`${e}_${i}`} className="highlight">
                {" "}
                {e}
                <span style={{ color: "rgba(255, 255, 255,0.87)" }}>, </span>
              </span>
            );
          })}
          <span className="highlight">Tests automatisés</span>.
        </Typography>
        <Typography variant="body1" paragraph>
          {translate(lang, "skills-4")}:
          {list_4.map((e, i) => {
            return (
              <span key={`${e}_${i}`} className="highlight">
                {" "}
                {e}
                {i < list_4.length - 1 && (
                  <span style={{ color: "rgba(255, 255, 255,0.87)" }}>, </span>
                )}
              </span>
            );
          })}
          ...
        </Typography>
      </div>
      <div className="block">
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          spacing={3}
        >
          <Grid item className={classes.item}>
            <ProgressBox />
          </Grid>
          <Grid item className={classes.item}>
            <ChipBox />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Skills;
