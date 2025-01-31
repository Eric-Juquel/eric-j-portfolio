import React from "react";
import "../../App.scss";
import { makeStyles } from "@material-ui/core/styles";
import { translate } from "../../translations/translate";
import { useSelector } from "react-redux";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import ProgressBox from "./ProgressBox";
import ChipBox from "./ChipBox";

const useStyles = makeStyles(
  (theme) => ({
    container: {
      height: "100%",
    },
    item: {
      width: "100%",
    },
    paragraph1: {
      gridColumn: "1 / 2",
      gridRow: "1 / 2",
      "@media screen and (max-width:1280px)": {
        gridRow: "4 / 5",
        alignSelf: "flex-end",
      },
      "@media (max-width:440px)": {
        display: "none",
      },
    },
    paragraph2: {
      gridColumn: "1 / 2",
      gridRow: "2 / 3",
      "@media screen and (max-width:1280px)": {
        gridRow: "5 / 6",
      },
      "@media (max-width:440px)": {
        gridRow: "4 / 6",
      },
    },
    paragraph3: {
      gridColumn: "1 / 2",
      gridRow: "3/ 4",
      "@media screen and (max-width:1280px)": {
        gridRow: "8 / 9",
      },
      "@media (max-width:440px)": {
        display: "none",
      },
    },
    paragraph4: {
      gridColumn: "1 / 2",
      gridRow: "4 / 5",
      "@media screen and (max-width:1280px)": {
        gridRow: "9 / 10",
      },
      "@media (max-width:440px)": {
        gridRow: "8 / 10",
      },
    },
    progress: {
      gridColumn: "2 / 3",
      gridRow: "1 / 4",
      alignSelf: "flex-start",
      "@media screen and (max-width:1280px)": {
        gridColumn: "1 / 2",
        gridRow: "1 / 4",
        alignSelf: "center",
        marginBottom: "1rem",
      },
    },
    chip: {
      gridColumn: "2 / 3",
      gridRow: "4 / 5",
      alignSelf: "flex-end",
      "@media screen and (max-width:1280px)": {
        gridColumn: "1 / 2",
        gridRow: "6 / 8",
        alignSelf: "flex-start",
      },
    },
  }),
  { index: 1 }
);

const Skills = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.languageReducer.language);
  const matches = useMediaQuery("(max-width:600px)");

  const list_1 = ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WordPress"];
  const list_2 = [
    "ReactJs",
    "NextJs",
    "NodeJs",
    "TypeScript",
    "Express",
    "Fastify",
    "MongoDB",
    "ArangoDB",
  ];
  const list_3 = ["Git", "GitHub", "GitLab", "Agile", "Jira"];
  const list_4 = [
    "Material-UI",
    "React-Hook-Form",
    "React-Query",
    "Cypress",
    "Docker",
    "PostgresSQL",
  ];

  return (
    <section className="container" id="skills">
      <Grid container direction="column">
        <Grid item md={12}>
          <Grid container>
            <Typography variant="h1" component="h1">
              {translate(lang, "skills")}
            </Typography>
          </Grid>
        </Grid>
        <div className="skillsGrid">
          <div className={classes.paragraph1}>
            <Typography variant="body1" align={matches ? "center" : "left"}>
              {translate(lang, "skills-1")}:
              {list_1.map((e, i) => {
                return (
                  <span key={`${e}_${i}`} className="highlight">
                    {" "}
                    {e}
                    {i < list_1.length - 1 && (
                      <span style={{ color: "rgba(255, 255, 255,0.87)" }}>
                        ,{" "}
                      </span>
                    )}
                  </span>
                );
              })}
              .
            </Typography>
          </div>

          <div className={classes.paragraph2}>
            <Typography variant="body1" align={matches ? "center" : "left"}>
              {translate(lang, "skills-2")}:
              {list_2.map((e, i) => {
                return (
                  <span key={`${e}_${i}`} className="highlight">
                    {" "}
                    {e}
                    {i < list_2.length - 1 && (
                      <span style={{ color: "rgba(255, 255, 255,0.87)" }}>
                        ,{" "}
                      </span>
                    )}
                  </span>
                );
              })}
              .
            </Typography>
          </div>

          <div className={classes.paragraph3}>
            <Typography variant="body1" align={matches ? "center" : "left"}>
              {translate(lang, "skills-3")}:{" "}
              {list_3.map((e, i) => {
                return (
                  <span key={`${e}_${i}`} className="highlight">
                    {" "}
                    {e}
                    <span style={{ color: "rgba(255, 255, 255,0.87)" }}>
                      ,{" "}
                    </span>
                  </span>
                );
              })}
              <span className="highlight">{translate(lang, "test")}</span>.
            </Typography>
          </div>

          <div className={classes.paragraph4}>
            <Typography variant="body1" align={matches ? "center" : "left"}>
              {translate(lang, "skills-4")}:
              {list_4.map((e, i) => {
                return (
                  <span key={`${e}_${i}`} className="highlight">
                    {" "}
                    {e}
                    {i < list_4.length - 1 && (
                      <span style={{ color: "rgba(255, 255, 255,0.87)" }}>
                        ,{" "}
                      </span>
                    )}
                  </span>
                );
              })}
              ...
            </Typography>
          </div>

          <div className={classes.progress}>
            <ProgressBox />
          </div>

          <div className={classes.chip}>
            <ChipBox />
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default Skills;
