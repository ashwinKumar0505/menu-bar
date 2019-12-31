import React from 'react';
import Menubar from 'cb-react-menubar';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import '../Demo.css';

const code = `class Menu extends React.Component {
  render() {
    const menuItems = [
      {
        value: "Fashion",
        items: [
          {
            value: "Men",
            items: [
              {
                value: "Shirts"
              }
            ]
          },
          {
            value: "Women",
            items: [
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
        value: "Electronics"
      },
      {
        value: "Furnitures",
        items: []
      },
      {
        value: "Jewelery&watches",
        items: []
      }
    ];
    const color = "#e86814";
    const animation = ["slideIn", "slideOut"];

    return (
      <Menubar backgroundColor={color} data={menuItems} animation={animation} />
    );
  }
}

`;

const AppLive = () => {
  const scope = {
    Menubar,
  };
  return (
    <div className='AllDemo'>
      <h2 className='Heading' style={{ color: '#e86814' }}>
        SLIDE IN-OUT
      </h2>
      <div className='Description'>
        <p>
          The submenu of this menu will slide to the side and fade out. Going a
          level deeper will slide the submenu from the right; going back will
          slide from the left.
        </p>
      </div>
      <div className='Demo'>
        <LiveProvider code={code} scope={scope}>
          <div className='LiveEditor'>
          
            <LiveEditor />
          </div>
          <div className='LivePreview'>
            <LivePreview
              style={{
                width: '100%',
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
