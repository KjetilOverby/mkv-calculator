import React from 'react';


const SideBar = (props) => {
    return (
        <div className='sidebar-container'>
        <button onClick={props.openCloseRawInputWindow} className='sidebar-buttons'>Legg til råmål</button>
        <button onClick={props.openCloseStartInputWindow} className='sidebar-buttons'>Utfylling foran</button>
        <button onClick={props.openCloseEndInputWindow} className='sidebar-buttons'>Utfylling bak</button>
        <hr/>
        <button onClick={props.masterDelete} className='sidebar-buttons'>Slett all data</button>
        <button onClick={props.testPost} className='sidebar-buttons'>Test post</button>

        <img onClick={props.openSettings} src="http://iconbug.com/data/33/512/4c59d624cf8e837b4b2119776c01718d.png" alt=""/>
        
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
    height: 6vh;
    position: absolute;
    bottom: 8.5rem;
    left: 10vw
}
.sidebar-buttons {
 height: 3.5rem;
 width: 14rem;
 margin-bottom: 1rem;
 border-radius: 5px;
 outline: none;
 background-color: var(--middle-bright);
 color: #065535;
 font-size: 13px;
 transition: .5s;
 border: none
}
.sidebar-buttons:hover {
    color: white;
    background: #54976B
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
