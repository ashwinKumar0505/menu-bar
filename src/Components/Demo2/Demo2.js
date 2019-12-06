import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MenuItems from "../MenuItems/MenuItems";
import classes from "./Demo2.module.css";

class Demo2 extends React.Component {
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
        <h2 className={classes.Heading}>SLIDE IN-OUT</h2>
        <div className={classes.Demo2}>
          <div className={classes.Description}>
            <p>
              The submenu of this menu will slide to the side and fade out.
              Going a level deeper will slide the submenu from the right; going
              back will slide from the left.
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
              animation={["slideIn", "slideOut"]}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Demo2;
