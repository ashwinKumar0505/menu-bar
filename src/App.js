import React from 'react';
import './App.css';
import Demo1 from './Components/Demo1/Demo1';
import Demo2 from './Components/Demo2/Demo2';
import Demo3 from './Components/Demo3/Demo3';
import Demo4 from './Components/Demo4/Demo4';
import Demo5 from './Components/Demo5/Demo5';
import { Link, animateScroll as scroll } from 'react-scroll';
import image from './logo1.png';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import BackDrop from './Components/BackDrop/BackDrop';
import Menubar from 'cb-react-menubar';

class App extends React.Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerHandler = event => {
    event.stopPropagation();
    let changedState = !this.state.showSideDrawer;
    this.setState({
      showSideDrawer: changedState,
    });
  };

  closeSideDrawer = () => {
    console.log('here');
    this.setState({
      showSideDrawer: false,
    });
  };
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className='App'>
        <div className='SideNavBar'>
          <div className='Logo' onClick={this.scrollToTop}>
            <img src={image} alt='bar' /> <p>Codebrahma</p>
          </div>
          <div className='DemoButtons'>
            <Link
              activeClass='active'
              to='Demo1'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Fade In-Out
            </Link>
            <Link
              activeClass='active'
              to='Demo2'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Slide In-Out
            </Link>
            <Link
              activeClass='active'
              to='Demo3'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Move Up-Down
            </Link>
            <Link
              activeClass='active'
              to='Demo4'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Scale Up-Down
            </Link>
            <Link
              activeClass='active'
              to='Demo5'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Scale Down-Up
            </Link>
          </div>
        </div>
        <div className='TopNav'>
          <img src={image} alt='bar' onClick={this.scrollToTop} />
          <div className='BurgerMenu1' onClick={this.sideDrawerHandler}>
            <div className='line1'></div>
            <div className='line1'></div>
            <div className='line1'></div>
          </div>
        </div>
        <BackDrop
          show={this.state.showSideDrawer}
          closeSideDrawer={this.closeSideDrawer}
        />

        <SideDrawer
          showSideDrawer={this.state.showSideDrawer}
          closeSideDrawer={this.closeSideDrawer}
        />
        <div className='Contents'>
          <div className='Header'>
            <h1>Responsive React Multi-Level Menu</h1>
            <p>Space-saving drop-down menu with subtle effects</p>
          </div>
          <div className='Demos'>
            <div id='Demo1'>
              <Demo1 color='#9f3147' />
            </div>{' '}
            <div id='Demo2'>
              <Demo2 color='#d35420' />
            </div>
            <div id='Demo3'>
              <Demo3 color='#44b5af' />
            </div>
            <div id='Demo4'>
              <Demo4 color='#77a021' />
            </div>
            <div id='Demo5'>
              <Demo5 color='#744783' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
