import React from "react";
import "./App.css";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import MenuItems from "./Components/MenuItems/MenuItems";

class App extends React.Component {
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
  closeItemsHandler=()=>{
    if(this.state.showMenuItems){
      this.setState({
        showMenuItems:false
      })
    }
  }
  render() {
    return (
      <div className="App" onClick={()=>this.closeItemsHandler()}>
        <h1>Responsive Multi-Level Menu</h1>
        <p>Space-saving drop-down menu with subtle effects</p>
        <div className="menu">
          <BurgerMenu showItemsHandler={this.showItemsHandler}/>
         
          <MenuItems showMenuItems={this.state.showMenuItems}/>
        </div>
      </div>
    );
  }
}

export default App;
