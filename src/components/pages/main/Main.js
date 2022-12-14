import React from "react";

import classes from "./Main.module.css";

import treesImg from "../../../imgs/main/trees.png";

const Main = () => {
  return (
    <div className={classes.main}>
      <img src={treesImg} alt="trees" />
      <h1>
        <div>קרן אודיסאוס</div>
        <div>השקעה טכנולוגית</div>
      </h1>
    </div>
  );
};

export default Main;
