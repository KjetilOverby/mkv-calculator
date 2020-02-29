import React from 'react';



const Settings = props => {

 const defaultColor = () => {
  props.innerRing('linear-gradient(#6FB98F, #004445)')
  props.outerRings('linear-gradient(rgb(128, 180, 204), rgb(28, 28, 82))') 

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

    props.innerRing('linear-gradient(#525B56, #132226)')
    props.outerRings('linear-gradient(#BE9063, #040C0E)') 

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

    props.innerRing('linear-gradient(#563727, #132226)')
    props.outerRings('linear-gradient(#DE9E48, #372c2e)') 

    props.inputOuterRings('#372c2e')
    props.titleInnerRings('#372c2e')

    props.titleOuterRings('#DE9E48')
    props.inputInnerRings('#DE9E48')

    props.searchBg('#372c2e')
    

    props.searchPostBtn('#DE9E48')
    props.searchPostBtnHover('#372c2e')

    props.sidebarBg('#563727')

    props.deleteBtn('#De9E48')
    props.deleteBtnHover('#7a431d')
}
  const changeColor3 = () => {

    props.innerRing('linear-gradient(#707793, #132226)')
    props.outerRings('linear-gradient(#3bba9c, #2e3047)') 

    props.inputOuterRings('#2e3047')
    props.titleInnerRings('#2e3047')

    props.titleOuterRings('#3bba9c')
    props.inputInnerRings('#3bba9c')

    props.searchBg('#2e3047')
    

    props.searchPostBtn('#3bba9c')
    props.searchPostBtnHover('#2e3047')

    props.sidebarBg('#3C3F58')

    props.deleteBtn('#707793')
    props.deleteBtnHover('#3BBA9c')
}
  const changeColor4 = () => {

    props.innerRing('linear-gradient(#9615db, #132226)')
    props.outerRings('linear-gradient(#9615db, #000)') 

    props.inputOuterRings('#000')
    props.titleInnerRings('#000')

    props.titleOuterRings('#9615db')
    props.inputInnerRings('#9615db')

    props.searchBg('#000')
    

    props.searchPostBtn('#9615db')
    props.searchPostBtnHover('#000')

    props.sidebarBg('#2d3032')

    props.deleteBtn('#555759')
    props.deleteBtnHover('#d2d3d3')
}
  const changeColor5 = () => {
    props.innerRing('linear-gradient(#D75404, #07000E)')
    props.outerRings('linear-gradient(#F08b33, #07000E)') 


    props.inputOuterRings('#07000E')
    props.titleInnerRings('#07000E')

    props.titleOuterRings('#F08b33')
    props.inputInnerRings('#F08b33')

    props.searchBg('#07000E')
    

    props.searchPostBtn('#F08b33')
    props.searchPostBtnHover('#07000E')

    props.sidebarBg('#202020')

    props.deleteBtn('#D75404')
    props.deleteBtnHover('#EECC8D')
}
  const changeColor6 = () => {

    props.innerRing('linear-gradient(#DEB992, #051622)')
    props.outerRings('linear-gradient(#1ba098, #051622)') 

    props.inputOuterRings('#051622')
    props.titleInnerRings('#051622')

    props.titleOuterRings('#1ba098')
    props.inputInnerRings('#1ba098')

    props.searchBg('#051622')
    

    props.searchPostBtn('#1ba098')
    props.searchPostBtnHover('#051622')

    props.sidebarBg('#2b2b2a')

    props.deleteBtn('#DEB992')
    props.deleteBtnHover('#1ba098')
}
  const changeColor7 = () => {

    props.innerRing('linear-gradient(orangered ,black)')
    props.outerRings('linear-gradient(orangered ,black)') 

    props.inputOuterRings('black')
    props.titleInnerRings('black')

    props.titleOuterRings('orangered')
    props.inputInnerRings('orangered')

    props.searchBg('')
    

    props.searchPostBtn('orangered')
    props.searchPostBtnHover('black')

    props.sidebarBg('')

    props.deleteBtn('orangered')
    props.deleteBtnHover('black')
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
        <li onClick={changeColor7}>Transparent</li>
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
