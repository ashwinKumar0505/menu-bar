import React, { useState, useEffect } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Data from "../../Data/Data";
import MenuItem from "../MenuItem/MenuItem";
import classes from "./MenuItems.module.css";

const MenuItems = props => {
  const [itemsToShow, setItemsToShow] = useState(Data);
  const [itemsStack, setItemsStack] = useState([Data]);
  const [id, setId] = useState(Data.id);
  const [move, changeMove] = useState("next");



  const moveToNext = value => {
    const newItems = itemsToShow.items.find(item => item.value === value);

    if (newItems !== undefined && "items" in newItems) {
      setItemsToShow(newItems);
      setId(newItems.id);
      setItemsStack([...itemsStack, itemsToShow]);
      changeMove("next");
    } else {
      return;
    }
  };

  const moveToPrevious = () => {
    const newItemsStack = [...itemsStack];
    const newItemsToShow = newItemsStack.pop();

    if (newItemsToShow !== undefined) {
      setItemsToShow(newItemsToShow);
      setId(newItemsToShow.id);
      setItemsStack(newItemsStack);
      changeMove("prev");
    }
  };

  const childFactoryCreator = classNames => child =>
    React.cloneElement(child, { classNames });
  return (
    <TransitionGroup
      childFactory={childFactoryCreator(
        move === "next" ? props.animation[0] : props.animation[1],
      )}
    >
      <CSSTransition
        timeout={300}
        in={true}
        appear={true}
        classNames="slideOut"
        key={id}
      >
        <div
          className={[
            classes.MenuItems,
            props.showMenuItems ? classes.ShowMenuItems : classes.HideMenuItems,
          ].join(" ")}
          onClick={event => {
            event.stopPropagation();
          }}
          style={{ backgroundColor: props.color }}
        >
          {itemsToShow.items.map(item => {
            if (item.value === "back") {
              return (
                <div className={classes.Back} onClick={() => moveToPrevious()} id={item.id}>
                  <p className={classes.BackArrow}>
                    <IoMdArrowDropleft />
                  </p>
                  <p className={classes.backButton}>back</p>
                </div>
              );
            } else {
              return (
                <MenuItem
                  id={item.id}
                  value={item.value}
                  moveToNext={moveToNext}
                  nextValue={item.hasOwnProperty("items") && item.items.length>0}
                />
              );
            }
          })}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default MenuItems;
