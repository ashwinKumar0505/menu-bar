import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MenuItems from "../MenuItems/MenuItems";
import classes from "./Demo2.module.css"

const Demo2 = (props) => {
  return (
    <div className={classes.menu}>
      <BurgerMenu showItemsHandler={props.showItemsHandler} color={props.color}/>

      <MenuItems showMenuItems={props.showMenuItems} color={props.color} animation={["Anim3","Anim4"]}/>
    </div>
  );
};
export default Demo2;