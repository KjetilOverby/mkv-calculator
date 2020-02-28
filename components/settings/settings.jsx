import React from 'react';



const Settings = props => {

 const defaultColor = () => {
  props.inputOuterRings('#004445')
  props.titleInnerRings('#004445')

  props.titleOuterRings('#6FB98F')
  props.inputInnerRings('#6FB98F')

  props.searchBg('#004445')
  

  props.searchPostBtn('#6FB98F')
  props.searchPostBtnHover('#004445')

  props.sidebarBg('#021C1E')

  props.deleteBtn('#D75B66')
  props.deleteBtnHover('#D24136')
 }

  const changeColor = () => {

  /*   props.innerRing('linear-gradient(#8D230F,#C99E10')
    props.outerRings('linear-gradient(blue, black)') */

    props.inputOuterRings('#132226')
    props.titleInnerRings('#132226')

    props.titleOuterRings('#BE9063')
    props.inputInnerRings('#BE9063')

    props.searchBg('#132226')
    

    props.searchPostBtn('#BE9063')
    props.searchPostBtnHover('#132226')

    props.sidebarBg('#040C0E')


    props.deleteBtn('#525B56')
    props.deleteBtnHover('#A4978E')

}
  const changeColor2 = () => {



    props.inputOuterRings('#720017')
    props.titleInnerRings('#720017')

    props.titleOuterRings('#D8D583')
    props.inputInnerRings('#D8D583')

    props.searchBg('#720017')
    

    props.searchPostBtn('#D8D583')
    props.searchPostBtnHover('#720017')

    props.sidebarBg('#270101')

    props.deleteBtn('#D9AC2A')
    props.deleteBtnHover('#763F02')
}
  const changeColor3 = () => {



    props.inputOuterRings('#8D2F23')
    props.titleInnerRings('#8D2F23')

    props.titleOuterRings('#212027')
    props.inputInnerRings('#212027')

    props.searchBg('#8D2F23')
    

    props.searchPostBtn('#212027')
    props.searchPostBtnHover('#F22F08')

    props.sidebarBg('#594346')

    props.deleteBtn('#f22f08')
    props.deleteBtnHover('#212027')
}
  const changeColor4 = () => {



    props.inputOuterRings('#8A5D59')
    props.titleInnerRings('#8A5D59')

    props.titleOuterRings('#F4F2B1')
    props.inputInnerRings('#F4F2B1')

    props.searchBg('#8A5D59')
    

    props.searchPostBtn('#F4F2B1')
    props.searchPostBtnHover('#8A5D59')

    props.sidebarBg('#415939')

    props.deleteBtn('#D75404')
    props.deleteBtnHover('#F08B33')
}
  const changeColor5 = () => {



    props.inputOuterRings('#07000E')
    props.titleInnerRings('#07000E')

    props.titleOuterRings('#F08b33')
    props.inputInnerRings('#F08b33')

    props.searchBg('#07000E')
    

    props.searchPostBtn('#F08b33')
    props.searchPostBtnHover('#07000E')

    props.sidebarBg('#8A2C02')

    props.deleteBtn('#D75404')
    props.deleteBtnHover('#EECC8D')
}
  const changeColor6 = () => {



    props.inputOuterRings('#23345C')
    props.titleInnerRings('#23345C')

    props.titleOuterRings('#Bd8A44')
    props.inputInnerRings('#Bd8A44')

    props.searchBg('#23345C')
    

    props.searchPostBtn('#Bd8A44')
    props.searchPostBtnHover('#23345C')

    props.sidebarBg('#582A20')

    props.deleteBtn('#F1BA48')
    props.deleteBtnHover('#BD8A44')
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
        <li onClick={defaultColor}>Default</li>
        <li onClick={changeColor}>Color Theme</li>
        <li onClick={changeColor2}>Color Theme 2</li>
        <li onClick={changeColor3}>Color Theme 3</li>
        <li onClick={changeColor4}>Color Theme 4</li>
        <li onClick={changeColor5}>Color Theme 5</li>
        <li onClick={changeColor6}>Color Theme 6</li>
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
