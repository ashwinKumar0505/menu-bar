import React, { useState } from "react";
import MenuItems from "../MenuItems/MenuItems";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "../Demo.css";

const MenuBar = props => {
  //props.Data.id='_' + Math.random().toString(36).substr(2, 9);

  const generateId = data => {
    data.id =
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9);
    for (let i = 0; data.items && i < data.items.length; i++) {
      generateId(data.items[i]);
    }
  };
  generateId(props.Data);

  console.log(props.Data);
  const [showMenuItems, changeShowMenuItems] = useState(false);

  const showItemsHandler = event => {
    event.stopPropagation();
    changeShowMenuItems(!showMenuItems);
  };

  const closeItemsHandler = () => {
    changeShowMenuItems(false);
  };
  return (
    <div className="menu" onClick={closeItemsHandler}>
      <BurgerMenu showItemsHandler={showItemsHandler} color={props.color} />

      <MenuItems
        showMenuItems={showMenuItems}
        animation={props.animation}
        color={props.color}
        Data={props.Data}
      />
    </div>
  );
};

export default MenuBar;
