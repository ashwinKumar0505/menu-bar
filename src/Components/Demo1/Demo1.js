import React,{ useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MenuItems from "../MenuItems/MenuItems";
import classes from "./Demo1.module.css"

const Demo1 = (props) => {
  return (
    <div className={classes.menu}>
      <BurgerMenu showItemsHandler={props.showItemsHandler} color={props.color} />

      <MenuItems showMenuItems={props.showMenuItems} color={props.color} animation={["Anim1","Anim2"]}/>
    </div>
  );
};
export default Demo1;