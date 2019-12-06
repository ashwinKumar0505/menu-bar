import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MenuItems from "../MenuItems/MenuItems";
import classes from "./Demo4.module.css";

class Demo4 extends React.Component {
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
      <div onClick={this.closeItemsHandler} className={classes.AllDemo}>
        <h2 className={classes.Heading}>SCALE UP-DOWN</h2>
        <div className={classes.Demo4}>
          <div className={classes.Description}>
            <p>
              Here the submenu will fade in and scale up from the back and the
              current level will fade out and move down. Open Menu
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
              animation={["scaleUp", "scaleDown"]}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Demo4;
