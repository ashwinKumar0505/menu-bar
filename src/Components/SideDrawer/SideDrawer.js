import React from "react";
import { Link } from "react-scroll";
import image from "../../logo.png"
import classes from "./SideDrawer.module.css";
const SideDrawer = props => {
  return (
    <div
      className={classes.SideDrawer}
      style={{
        transform: props.showSideDrawer ? "translateX(0)" : "translateX(-100%)",
      }}
      onClick={event => {
        event.stopPropagation();
      }}
    >
       <img src={image} alt="bar"/>
      <div className={classes.DemoButtons}>
        <Link
          activeClass="active"
          to="Demo1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={props.closeSideDrawer}
        >
          FADE IN-OUT
        </Link>
        <Link
          activeClass="active"
          to="Demo2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={props.closeSideDrawer}
        >
          SLIDE IN-OUT
        </Link>
        <Link
          activeClass="active"
          to="Demo3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={props.closeSideDrawer}
        >
          MOVE UP-DOWN
        </Link>
        <Link
          activeClass="active"
          to="Demo4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={props.closeSideDrawer}
        >
          SCALE UP-DOWN
        </Link>
        <Link
          activeClass="active"
          to="Demo5"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={props.closeSideDrawer}
        >
          SCALE DOWN-UP
        </Link>
      </div>
    </div>
  );
};

export default SideDrawer;
