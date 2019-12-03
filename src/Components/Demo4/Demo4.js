import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MenuItems from "../MenuItems/MenuItems";
import classes from "./Demo4.module.css"

const Demo4 = (props) => {
  return (
    <div className={classes.menu}>
      <BurgerMenu showItemsHandler={props.showItemsHandler} color={props.color}/>

      <MenuItems showMenuItems={props.showMenuItems} color={props.color}/>
    </div>
  );
};
export default Demo4;