import React from "react";

import { ReactComponent as LogoIcon } from "../../../../imgs/logo.svg";
import NavigationBarLink from "../navigation bar link/NavigationBarLink";

import classes from "./NavigationBar.module.css";

const TITLES = [
  "ראשי",
  "/",
  "אודות",
  "/",
  "מאמרים",
  "/",
  "ערכי הקרן",
  "/",
  "יצירת קשר",
];

const NavigationBar = () => {
  const titlesList = TITLES.map((title) => {
    return <NavigationBarLink key={title} title={title} />;
  });

  return (
    <header className={classes.header}>
      <div className={classes.data}>
        <nav className={classes.nav}>
          <ul>{titlesList}</ul>
        </nav>
        <LogoIcon />
      </div>
    </header>
  );
};

export default NavigationBar;
