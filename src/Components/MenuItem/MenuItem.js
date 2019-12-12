import React from "react";
import { IoMdArrowDropright } from "react-icons/io"
import classes from "./MenuItem.module.css";
const MenuItem=props=>{
  return <div className={classes.MenuItem} onClick={()=>props.moveToNext(props.value)}>
    <p className={classes.Value}>{props.value}</p>
    <p className={classes.NextArrow} style={{display:props.nextValue ? "block" : "none"}}> <IoMdArrowDropright /></p>
    </div>
}

export default MenuItem