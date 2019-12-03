import React from "react";
import classes from "./Animation.module.css";

class Animation extends React.Component{
  state={
    name:['c','o','d','e']
  }
  
  render(){
    return (
      <div className={classes.Animation}>
      <div className={classes.Words}>
      {
        this.state.name.map(letter=><div className={classes.letters}>{letter}</div>)
       
      }
      </div>
      </div>
    )
  }
  
}
export default Animation;