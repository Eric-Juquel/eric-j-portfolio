import React from "react";
import classes from "./Button.module.scss";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";

const Button = () => {
  const lang = useSelector((state) => state.languageReducer.language);

  return (
    <div className={classes.container}>
      <div className={classes.center}>
        <button className={classes.btn}>
          <svg
            width="180px"
            height="60px"
            viewBox="0 0 180 60"
            className="border"
          >
            <polyline
              points="179,1 179,59 1,59 1,1 179,1"
              className="bg-line"
            />
            <polyline
              points="179,1 179,59 1,59 1,1 179,1"
              className="hl-line"
            />
          </svg>
          {translate(lang, "contactMe")}
        </button>
      </div>
    </div>
  );
};

export default Button;
