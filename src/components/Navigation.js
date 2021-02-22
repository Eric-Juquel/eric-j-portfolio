import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  const [active, setActive] = useState("");

  const menuItems = ["compétences", "réalisations", "parcour", "contact"];

  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        {menuItems.map((item, i) => {
          return (
            <li
              key={`${item}_${i}`}
              className={`${classes.item} ${active === item && classes.active}`}
              onClick={() => {
                setActive(item);
              }}
            >
              <Link component={RouterLink} to={`/${item}`}>
                <span>{item}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
