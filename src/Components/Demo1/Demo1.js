import React, { useState, useEffect } from "react";
import "../Demo.css";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import MenuItems from "../MenuItems/MenuItems";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const code = `
Demo1=()=>{
const color="#c62860";
return <MenuBar1 color={color}/>
}
`;

const MenuBar1 = props => {
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
        animation={["fadeIn", "fadeOut"]}
        color={props.color}
      />
    </div>
  );
};

const AppLive = () => {
  const scope = {
    MenuBar1,
  };
  return (
    <div className="AllDemo">
      <h2 className="Heading">FADE IN-OUT</h2>
      <div className="Description">
        <p>
          Here the submenu will fade in and scale up from the back and the
          current level will fade out and move down. Open Menu
        </p>
      </div>
      <div className="Demo">
        <LiveProvider code={code} scope={scope}>
          <div className="LiveEditor">
            {/* <div className="UpArrow">
              <IoIosArrowDown />
            </div> */}

            <LiveEditor />
          </div>
          <div className="LivePreview">
            <LivePreview
              style={{
                width: "100%",
              }}
            />
          </div>
          <LiveError />
        </LiveProvider>
      </div>
    </div>
  );
};

export default AppLive;
