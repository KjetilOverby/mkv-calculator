import React from 'react';


const SideBar = (props) => {
    return (
        <div className='sidebar-container'>
        <button style={{backgroundColor: 'var(--middle-bright)'}} onClick={props.openCloseRawInputWindow} className='sidebar-buttons'>Legg til råmål</button>
        <button style={{backgroundColor: 'var(--blue)'}} onClick={props.openCloseStartInputWindow} className='sidebar-buttons'>Utfylling foran</button>
        <button style={{backgroundColor: 'var(--blue)'}} onClick={props.openCloseEndInputWindow} className='sidebar-buttons'>Utfylling bak</button>
        <button onClick={props.masterDelete} className='sidebar-buttons'>Slett all data</button>
        <hr/>
        <button onClick={props.openCloseSearchPostInput} style={{backgroundColor: 'var(--searchPostBtn)', color: 'white'}} className='sidebar-buttons'>Post arkiv</button>
        
        

        <img onClick={props.openSettings} src="https://icons.iconarchive.com/icons/grafikartes/flat-retro-modern/512/settings-icon.png" alt=""/>
        
            <style jsx>{`
             .sidebar-container {
    width: 16vw;
    height: 100vh;
    background: linear-gradient(rgb(68, 83, 70), black);
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    z-index: 100;


}
.sidebar-container img {
    height: 5vh;
    position: absolute;
    bottom: 9rem;
    left: 11vw
}
.sidebar-buttons {
 height: 3.5rem;
 width: 14rem;
 margin-bottom: 1rem;
 border-radius: 5px;
 outline: none;
 
 color: #065535;
 font-size: 13px;
 transition: .5s;
 border: none
}
.sidebar-buttons:hover {
    color: white;
    background: #54976B;
}
hr {
    background: gray;
    width: 80%;
    margin: 4rem 0
}
            `}</style>
        </div>
    )
}

export default SideBar
