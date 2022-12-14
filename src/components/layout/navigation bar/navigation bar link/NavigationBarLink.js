import React from "react";

import classes from "./NavigationBarLink.module.css";

const NavigationBarLink = ({ title }) => {
  return <li className={title !== "/" ? classes.title : undefined}>{title}</li>;
};

export default NavigationBarLink;
