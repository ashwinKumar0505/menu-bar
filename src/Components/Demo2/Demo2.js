import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MenuItems from "../MenuItems/MenuItems";
import classes from "./Demo2.module.css";

const Demo2 = props => {
  return (
    <div className={classes.Demo2}>
      <div className={classes.Description}>
        <p>
          The submenu of this menu will slide to the side and fade out. Going a
          level deeper will slide the submenu from the right; going back will
          slide from the left.
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
