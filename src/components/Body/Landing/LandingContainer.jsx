import React from "react";
import classes from "./Landing.module.css";

const LandingContainer = (props) => {
  return (
    <div>
      <div className={classes.context}>{props.children}</div>
      <div className={classes.area}>
        <ul className={classes.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
     
    </div>
  );
};

export default LandingContainer;
