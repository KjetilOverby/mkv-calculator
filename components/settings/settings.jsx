import React from 'react';

const Settings = props => {
  return (
    <div className={`settings-container  ${props.class} `}>
      <ul>
        <li onClick={() => props.wallpaperValue(0)}>Bakgrunn 1</li>
        <li onClick={() => props.wallpaperValue(1)}>Bakgrunn 2</li>
        <li onClick={() => props.wallpaperValue(2)}>Bakgrunn 3</li>
        <li onClick={() => props.wallpaperValue(3)}>Bakgrunn 4</li>
        <li onClick={() => props.wallpaperValue(4)}>Bakgrunn 5</li>
        <li onClick={() => props.wallpaperValue(5)}>Bakgrunn 6</li>
        <li onClick={() => props.wallpaperValue(6)}>Bakgrunn 7</li>
      </ul>
      <button onClick={props.closeSettings}>Lukk</button>

      <style global jsx>{`
        
        .settings-container {
          width: 16vw;
          height: 100vh;
          background: url('https://images.unsplash.com/photo-1555128810-2dac95b4d1f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
          background-size: cover;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          flex-direction: column;
          
         
         
        }
        .settings-container ul li {
          list-style: none;
          transition: .5s;
          font-size: 2rem;
        }
        .settings-container ul li:hover {
          cursor: pointer;
          color: darkgrey;
        }

        .show-settings {
                  display: block;
                  animation: showSettings .2s;
                  -webkit-animation-fill-mode: forwards, none;
                  left: -16vw;
                  display: flex;
                 align-items: center;
                       flex-direction: column;
                       

              }
              .hide-settings {
                animation: hideSettings .2s;
                -webkit-animation-fill-mode: forwards, none;
                  right: 0;
                  
              }
              @keyframes showSettings {
                  100% {transform: translateX(16vw); display: none}
              }
              @keyframes hideSettings {
                  100% {transform: translateX(-16vw) }
               }
      `}</style>
    </div>
  );
};

export default Settings;
