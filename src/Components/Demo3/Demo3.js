import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MenuItems from "../MenuItems/MenuItems";
import classes from "./Demo3.module.css"

const Demo3 = (props) => {
  return (
    <div className={classes.menu}>
      <BurgerMenu showItemsHandler={props.showItemsHandler} color={props.color}/>

      <MenuItems showMenuItems={props.showMenuItems} color={props.color} animation={["Anim5","Anim6"]}/>
    </div>
  );
};
export default Demo3;