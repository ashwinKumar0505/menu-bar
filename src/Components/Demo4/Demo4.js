import React, { useState, useEffect } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Data from "../../Data/Data";
import "../Demo.css";

const code = `
BurgerMenu = (props) => {

  return (
    <div className="BurgerMenu" onClick={(event)=>props.showItemsHandler(event)} style={{backgroundColor:props.color}}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}

MenuItem=props=>{
 
  return (
    <div className="MenuItem" onClick={()=>props.moveToNext(props.value)}>
    <p className="Value">{props.value}</p>
    <p className="NextArrow" style={{display:props.next ? "block" : "none"}}> <IoMdArrowDropright /></p>
    </div>
    )
}

MenuItems = props => {
 const [itemsToShow, setItemsToShow] = useState(Data);
  const [itemsStack, setItemsStack] = useState([Data]);
  const [id, setId] = useState(Data.id);
  const [move, changeMove] = useState("next");



  const moveToNext = value => {
    const newItems = itemsToShow.items.find(item => item.value === value);

    if (newItems !== undefined && "items" in newItems) {
      setItemsToShow(newItems);
      setId(newItems.id);
      setItemsStack([...itemsStack, itemsToShow]);
      changeMove("next");
    } else {
      return;
    }
  };

  const moveToPrevious = () => {
    const newItemsStack = [...itemsStack];
    const newItemsToShow = newItemsStack.pop();

    if (newItemsToShow !== undefined) {
      setItemsToShow(newItemsToShow);
      setId(newItemsToShow.id);
      setItemsStack(newItemsStack);
      changeMove("prev");
    }
  };

  const childFactoryCreator = classNames => child =>
    React.cloneElement(child, { classNames });
  return (
    <TransitionGroup
      childFactory={childFactoryCreator(
        move === "next" ? props.animation[0] : props.animation[1],
      )}
    >
      <CSSTransition
        timeout={300}
        in={true}
        appear={true}
        classNames="slideOut"
        key={id}
      >
        <div
          className={[
            "MenuItems",
            props.showMenuItems ? "ShowMenuItems" : "HideMenuItems",
          ].join(" ")}
          onClick={event => {
            event.stopPropagation();
          }}
          style={{ backgroundColor: props.color }}
        >
          {itemsToShow.items.map(item => {
            if (item.value === "back") {
              return (
                <div className="Back" onClick={() => moveToPrevious()}>
                  <p className="BackArrow">
                    <IoMdArrowDropleft />
                  </p>
                  <p className="backButton">back</p>
                </div>
              );
            } else {
              return (
                <MenuItem
                  value={item.value}
                  moveToNext={moveToNext}
                  next={item.next}
                />
              );
            }
          })}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const Demo4=(props)=> {

  const [showMenuItems,changeShowMenuItems]=useState(false)
  const color="#90b912"
  const showItemsHandler = (event) => {
    event.stopPropagation();
    changeShowMenuItems(!showMenuItems)
  };
  const closeItemsHandler = () => {
    changeShowMenuItems(false)
  };
    return (
          <div className="menu" onClick={closeItemsHandler} >
            <BurgerMenu
              showItemsHandler={showItemsHandler}
              color={color}
            />
            
            <MenuItems
              showMenuItems={showMenuItems}
              animation={["scaleUp", "scaleDown"]}
              color={color}
            />
           
          </div>
    );
  }
 render(<Demo4 />)
`;

const AppLive = () => {
  const scope = {
    IoMdArrowDropleft,
    CSSTransition,
    TransitionGroup,
    Data,
    useState,
    useEffect,
    IoMdArrowDropright,
  };
  return (
    <div className="AllDemo">
      <h2 className="Heading">SCALE UP-DOWN</h2>
      <div className="Description">
        <p>
          The submenu in this demo will scale up from the back and fade in while
          the current level scales up and fades out
        </p>
      </div>
      <div className="Demo">
        <LiveProvider code={code} scope={scope} noInline>
          <div className="LiveEditor">
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
