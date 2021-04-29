import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.scss";

const Button2 = ({ text }) => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.center}>
          <Link to={"/contact"} className={classes.btn2}>
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="99%" />
            </svg>
            <span>{text}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Button2;
