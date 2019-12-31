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
    const color = "#744783";
    const animation = ["scaleDown", "scaleUp"];

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
    <div className='AllDemo1'>
      <h2 className='Heading' style={{ color: '#744783' }}>
        SCALE DOWN-UP
      </h2>
      <div className='Description'>
        <p>
          The submenu in this demo will scale down from the front while the
          current level scales down and fades out.
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
