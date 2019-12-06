import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MenuItems from "../MenuItems/MenuItems";
import classes from "./Demo3.module.css";

class Demo3 extends React.Component {
  state = {
    showMenuItems: false,
  };
  showItemsHandler = () => {
    this.setState(prevState => {
      return {
        showMenuItems: !prevState.showMenuItems,
      };
    });
  };
  closeItemsHandler = () => {
    if (this.state.showMenuItems) {
      this.setState({
        showMenuItems: false,
      });
    }
  };
  render() {
    return (
      <div className={classes.AllDemo} onClick={this.closeItemsHandler}>
        <h2 className={classes.Heading}>MOVE UP-DOWN</h2>
        <div className={classes.Demo3}>
          <div className={classes.Description}>
            <p>
              Here the submenu will fade in and scale up from the back and the
              current level will fade out and move down.
            </p>
          </div>
          <div className={classes.menu}>
            <BurgerMenu
              showItemsHandler={this.showItemsHandler}
              color={this.props.color}
            />

            <MenuItems
              showMenuItems={this.state.showMenuItems}
              color={this.props.color}
              animation={["moveUp", "moveDown"]}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Demo3;
