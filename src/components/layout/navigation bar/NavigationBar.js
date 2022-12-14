import React from "react";

import { ReactComponent as LogoIcon } from "../../../imgs/logo.svg";

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
    return (
      <li key={title} title={title}>
        {title}
      </li>
    );
  });

  return (
    <header className={classes.header}>
      <div className={classes.data}>
        <nav className={classes.nav}>
          <ul>{titlesList}</ul>
        </nav>
        <div>
          <LogoIcon />
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
