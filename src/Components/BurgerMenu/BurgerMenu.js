import React from "react";
import classes from "./BurgerMenu.module.css";

const BurgerMenu = (props) => {
  return (
    <div className={classes.BurgerMenu} onClick={()=>props.showItemsHandler()}>
      <div className={classes.line}></div>
      <div className={classes.line}></div>
      <div className={classes.line}></div>
    </div>
  );
};

export default BurgerMenu;
