import React from 'react';


const SideBar = (props) => {
    return (
        <div className='sidebar-container'>
        <button onClick={props.openCloseRawInputWindow} className='sidebar-buttons'>Legg til råmål</button>
        <button onClick={props.openCloseStartInputWindow} className='sidebar-buttons'>Utfylling foran</button>
        <button onClick={props.openCloseEndInputWindow} className='sidebar-buttons'>Utfylling bak</button>
        <button onClick={props.masterDelete} className='sidebar-buttons'>Slett all data</button>
        <button onClick={props.testPost} className='sidebar-buttons'>Test post</button>
        
            <style jsx>{`
             .sidebar-container {
    width: 12vw;
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
.sidebar-buttons {
 height: 2.5rem;
 width: 10rem;
 margin-bottom: 1rem;
 border-radius: 10px;
 outline: none;
 background-color: var(--middle-bright);
 color: var(--inner-ring);
 font-size: 12px;
}
.sidebar-buttons:hover {
    color: gray;
}
            `}</style>
        </div>
    )
}

export default SideBar
