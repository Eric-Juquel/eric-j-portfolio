import React from "react";
import classes from "./Button.module.scss";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";

const Button2 = () => {
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.center}>
          <a className={classes.btn2}>
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="99%" />
            </svg>
            <span>{translate(lang, "contactMe")}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Button2;
