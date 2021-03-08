import React, { useState } from "react";
import { translate } from "../translations/translate";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";
import classes from "./Navigation.module.scss";

const Navigation = ({setIsChecked}) => {
  const lang = useSelector((state) => state.languageReducer.language);
  const [active, setActive] = useState("");

  const menuItems = [
    { value: translate(lang, "skills"), label: "skills" },
    { value: translate(lang, "achievements"), label: "achievements" },
    // { value: translate(lang, "career"), label: "career" },
    { value: translate(lang, "contact"), label: "contact" },
  ];

  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        {menuItems.map((item, i) => {
          return (
            <li
              key={`${item.label}_${i}`}
              className={`${classes.item} ${
                active === item.label && classes.active
              }`}
              onClick={() => {
                setIsChecked && setIsChecked(false);
                setActive(item.label);
              }}
            >
              <Link component={RouterLink} to={`/${item.label}`}>
                <span>{item.value}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
