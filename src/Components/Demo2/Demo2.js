import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import "../Demo.css";


const code = `class Menu extends React.Component {
  render() {
    const menuItems = {
      value: "menu-items",
      items: [
        {
          value: "Fashion",
          items: [
            {
              value: "back"
            },
            {
              value: "Men",
              items: [
                {
                  value: "back"
                },
                {
                  value: "Shirts"
                },
                {
                  value: "Jackets"
                }
              ]
            },
            {
              value: "Women",
              items: [
                {
                  value: "back"
                },
                {
                  value: "Jackets"
                },
                {
                  value: "T-Shirts"
                },
                {
                  value: "Underwear"
                }
              ]
            },
            {
              value: "Children"
            }
          ]
        },
        {
          value: "Electronics",
          items: []
        },
        {
          value: "Furnitures",
          items: []
        },
        {
          value: "Jewelery&watches",
          items: []
        }
      ]
    }
    const color = "#e86814";
    const animation = ["slideIn", "slideOut"];

    return <MenuBar backgroundColor={color} data={menuItems} animation={animation} />;
  }
}

`;

const AppLive = () => {
  const scope = {
    MenuBar,
  };
  return (
    <div className="AllDemo">
      <h2 className="Heading" style={{color:"#e86814"}}>SLIDE IN-OUT</h2>
      <div className="Description">
        <p>
          The submenu of this menu will slide to the side and fade out. Going a
          level deeper will slide the submenu from the right; going back will
          slide from the left.
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
