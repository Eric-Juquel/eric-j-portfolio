import React from "react";
import classes from "./Button.module.scss";

const Button1 = ({ type, text }) => {
  return (
    <div className={classes.container}>
      <div className={classes.center}>
        <button type={type} className={classes.btn}>
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
          {text}
        </button>
      </div>
    </div>
  );
};

export default Button1;
