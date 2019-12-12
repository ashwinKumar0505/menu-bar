import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import classes from "./Live.module.css";
const Live = () => {
  return (
    <div className={classes.Live}>
      <LiveProvider code="<strong>Hello World!</strong>">
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  );
};

export default Live;