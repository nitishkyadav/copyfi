import { Fragment } from "react";
import classes from "./Utility.module.css";

const Utility = (props) => {
  return (
    <Fragment>
      <div className={classes.utility}>
        <img
          className={classes.util_img}
          src={props.image}
          alt={props.alt}
        ></img>
        <h1 className={classes.util_heading}>{props.utilName}</h1>
      </div>
    </Fragment>
  );
};

export default Utility;
