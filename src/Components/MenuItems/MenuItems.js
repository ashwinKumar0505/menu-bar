import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Data from "../../Data/Data";
import MenuItem from "../MenuItem/MenuItem";
import classes from "./MenuItems.module.css";

class MenuItems extends React.Component {
  componentWillMount() {
    let newItemsToShow = this.state.itemsToShow;
    newItemsToShow = Object.assign({}, this.state.menuItems);
    this.setState(prevState => {
      return {
        itemsToShow: newItemsToShow,
        id: this.state.menuItems.id,
        itemsStack: [...prevState.itemsStack, this.state.menuItems],
      };
    });
  }

  moveToNext = value => {
    const newItems = this.state.itemsToShow.items.find(
      item => item.value === value,
    );
    console.log(newItems);
    if ("items" in newItems) {
      this.setState(prevState => {
        return {
          itemsToShow: newItems,
          id: newItems.id,
          itemsStack: [...prevState.itemsStack, prevState.itemsToShow],
          move: "next",
        };
      });
    } else {
      return;
    }
  };

  moveToPrevious = () => {
    const newItemsStack = this.state.itemsStack;
    const newItemsToShow = newItemsStack.pop();
    this.setState({
      itemsToShow: newItemsToShow,
      itemsStack: newItemsStack,
      id: newItemsToShow.id,
      move: "prev",
    });
  };

  state = {
    menuItems: Data,
    itemsToShow: {},
    itemsStack: [],
    id: null,
    move: "next",
  };

  render() {
    // console.log(this.state.move === "next" ? "slideIn" : "slideOut");
    const childFactoryCreator = classNames => child =>
      React.cloneElement(child, { classNames });
    return (
      <TransitionGroup
        childFactory={childFactoryCreator(
          this.state.move === "next" ? "slideIn" : "slideOut",
        )}
      >
        <CSSTransition
          timeout={400}
          in={true}
          appear={true}
          classNames="slideOut"
          key={this.state.id}
        >
          <div
            className={[
              classes.MenuItems,
              this.props.showMenuItems
                ? classes.ShowMenuItems
                : classes.HideMenuItems,
            ].join(" ")}
            onClick={event => {
              event.stopPropagation();
            }}
          >
            {this.state.itemsToShow.items.map(item => {
              if (item.value === "back") {
                return (
                  <div
                    className={classes.Back}
                    onClick={() => this.moveToPrevious()}
                  >
                    <p className={classes.BackArrow}>
                      <IoMdArrowDropleft />
                    </p>
                    <p className={classes.backButton}>back</p>
                  </div>
                );
              } else {
                return (
                  <MenuItem
                    value={item.value}
                    moveToNext={this.moveToNext}
                    next={item.next}
                  />
                );
              }
            })}
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default MenuItems;
