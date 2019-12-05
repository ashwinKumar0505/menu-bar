import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MenuItems from "../MenuItems/MenuItems";
import classes from "./Demo2.module.css";

const Demo2 = props => {
  return (
    <div className={classes.Demo2}>
      <div className={classes.Description}>
      <p>
        Here the submenu will fade in and scale up from the back and the current
        level will fade out and move down. Open Menu
      </p>
      </div>
      <div className={classes.menu}>
        <BurgerMenu
          showItemsHandler={props.showItemsHandler}
          color={props.color}
        />

        <MenuItems
          showMenuItems={props.showMenuItems}
          color={props.color}
          animation={["slideIn", "slideOut"]}
        />
      </div>
    </div>
  );
};
export default Demo2;
