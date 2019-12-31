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
    const color = "#90b912";
    const animation = ["scaleUp", "scaleDown"];
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
      <h2 className='Heading' style={{ color: '#90b912' }}>
        SCALE UP-DOWN
      </h2>
      <div className='Description'>
        <p>
          The submenu in this demo will scale up from the back and fade in while
          the current level scales up and fades out.
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
