import React from 'react';



const Settings = props => {

  const changeColor = () => {
    props.inputOuterRings('#8D230F')
    props.titleInnerRings('#8D230F')

    props.titleOuterRings('#C99E10')
    props.inputInnerRings('#C99E10')

    props.searchBg('#1E434C')
    props.searchPostBtnHover('#C99E10')

    props.searchPostBtn('#Ba5536')
    

    props.sidebarBg('693D3D')
}

  return (
    <div className={`settings-container  ${props.class} `}>

    <div>
      <ul>
        <li onClick={() => props.wallpaperValue(0)}>Bakgrunn 1</li>
        <li onClick={() => props.wallpaperValue(1)}>Bakgrunn 2</li>
        <li onClick={() => props.wallpaperValue(2)}>Bakgrunn 3</li>
        <li onClick={() => props.wallpaperValue(3)}>Bakgrunn 4</li>
        <li onClick={() => props.wallpaperValue(4)}>Bakgrunn 5</li>
        <li onClick={() => props.wallpaperValue(5)}>Bakgrunn 6</li>
        <li onClick={() => props.wallpaperValue(6)}>Bakgrunn 7</li>
        <li onClick={() => props.wallpaperValue(7)}>Bakgrunn 8</li>
        <li onClick={() => props.wallpaperValue(8)}>Bakgrunn 9</li>
        <li onClick={() => props.wallpaperValue(9)}>Bakgrunn 10</li>
        <li onClick={() => props.wallpaperValue(10)}>Bakgrunn 11</li>
        <li onClick={() => props.wallpaperValue(11)}>Bakgrunn 12</li>
        <li onClick={() => props.wallpaperValue(12)}>Bakgrunn 13</li>
        <li onClick={() => props.wallpaperValue(13)}>Bakgrunn 14</li>
      </ul>

</div>
 

 <div>
      <ul>
        <li onClick={changeColor}>Change Color</li>
      </ul>
 </div>




      <button className="btn-settings" onClick={props.closeSettings}>
        Lukk
      </button>

      <style global jsx>{`
        .settings-container {
          width: 16vw;
          height: 100vh;
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url('https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80');
          background-size: cover;
          background-position: center;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 500;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .btn-settings {
          height: 3.5rem;
          width: 14rem;
          margin-bottom: 1rem;
          border-radius: 5px;
          outline: none;
          color: #065535;
          font-size: 13px;
          border: none;
          position: absolute;
          top: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
          outline: none;
          border: none;
          border-radius: 10px;
          text-decoration: none;
          
          transition: background 0.3s, color 0.3s;
          background: linear-gradient(120deg, orange 50%, orangered 50%);
          background-size: 220%;
        }
        .btn-settings:hover {
          background-position: 100%;
          color: yellow;
        }

        .settings-container ul li {
          list-style: none;
          transition: 0.5s;
          font-size: 1rem;
          color: orange;
        }
        .settings-container ul li:hover {
          cursor: pointer;
          color: darkgrey;
        }

        .show-settings {
          display: block;
          animation: showSettings 0.2s;
          -webkit-animation-fill-mode: forwards, none;
          left: -16vw;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .hide-settings {
          animation: hideSettings 0.2s;
          -webkit-animation-fill-mode: forwards, none;
          right: 0;
        }
        @keyframes showSettings {
          100% {
            transform: translateX(16vw);
            display: none;
          }
        }
        @keyframes hideSettings {
          100% {
            transform: translateX(-16vw);
          }
        }
      `}</style>
    </div>
  );
};

export default Settings;
