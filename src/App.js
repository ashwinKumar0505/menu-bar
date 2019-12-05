import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import "./App.css";
import Demo1 from "./Components/Demo1/Demo1";
import Demo2 from "./Components/Demo2/Demo2";
import Demo3 from "./Components/Demo3/Demo3";
import Demo4 from "./Components/Demo4/Demo4";
import Demo5 from "./Components/Demo5/Demo5";

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
  closeItemsHandler = () => {
    if (this.state.showMenuItems) {
      this.setState({
        showMenuItems: false,
      });
    }
  };
  render() {
    return (
      <div className="App" onClick={() => this.closeItemsHandler()}>
        <div className="Header">
          <h1>Responsive Multi-Level Menu</h1>
          <p>Space-saving drop-down menu with subtle effects</p>
          <div className="DemoButtons">
            <NavLink to="/Demo1" exact activeClassName="active">
              Demo1
            </NavLink>
            <NavLink to="/Demo2" exact activeClassName="active">
              Demo2
            </NavLink>
            <NavLink to="/Demo3" exact activeClassName="active">
              Demo3
            </NavLink>
            {/* <NavLink to="/Demo4" exact activeClassName="active">
              Demo4
            </NavLink>
            <NavLink to="/Demo5" exact activeClassName="active">
              Demo5
            </NavLink> */}
          </div>
        </div>
        <div className="Demos">
          <Switch>
            <Route
              path="/Demo1"
              render={() => (
                <Demo1
                  showItemsHandler={this.showItemsHandler}
                  showMenuItems={this.state.showMenuItems}
                  color="#9f3147"
                />
              )}
            ></Route>
            <Route
              path="/Demo2"
              render={() => (
                <Demo2
                  showItemsHandler={this.showItemsHandler}
                  showMenuItems={this.state.showMenuItems}
                  color="#d35420"
                />
              )}
            ></Route>
            <Route
              path="/Demo3"
              render={() => (
                <Demo3
                  showItemsHandler={this.showItemsHandler}
                  showMenuItems={this.state.showMenuItems}
                  color="#44b5af"
                />
              )}
            >

            </Route>
            {/* <Route
              path="/Demo4"
              render={() => (
                <Demo4
                  showItemsHandler={this.showItemsHandler}
                  showMenuItems={this.state.showMenuItems}
                  color="#78a021"
                />
              )}
            ></Route>
            <Route path="/Demo5" render={() => <Demo5 />}></Route> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
