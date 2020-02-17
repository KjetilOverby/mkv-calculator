import React from 'react';

const SideBar = props => {
  return (
    <div className="sidebar-container">
      <button
       
        onClick={props.openCloseRawInputWindow}
        className="sidebar-buttons sidebar-button-raw"
      >
        Legg til råmål
      </button>
      <button
        
        onClick={props.openCloseStartInputWindow}
        className="sidebar-buttons sidebar-button-fill"
      >
        Utfylling foran
      </button>
      <button
       
        onClick={props.openCloseEndInputWindow}
        className="sidebar-buttons sidebar-button-fill"
      >
        Utfylling bak
      </button>
      <button onClick={props.masterDelete} className="sidebar-buttons delete-all">
        Slett all data
      </button>
      <hr />
      <button
        onClick={props.openCloseSearchPostInput}
       
        className="sidebar-buttons post-arkiv"
      >
        Post arkiv
      </button>

      <img
        onClick={props.openSettings}
        src="https://icons.iconarchive.com/icons/grafikartes/flat-retro-modern/512/settings-icon.png"
        alt=""
      />

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
          left: 11vw;
        }
        .sidebar-buttons {
          height: 3.5rem;
          width: 14rem;
          margin-bottom: 1rem;
          border-radius: 5px;
          outline: none;

          color: #065535;
          font-size: 13px;
         
          border: none;
          
          transition: background 0.5s, color 0.5s;
         
          
        }
        .sidebar-buttons:hover {
          
        
          background-position: 100%;
          color: white; 
        }
        .sidebar-button-raw {
            background: linear-gradient(120deg, var(--middle-bright) 50%, teal 50%);
          background-size: 220%;
        }

        .sidebar-button-fill {
            background: linear-gradient(120deg, var(--blue) 50%, dodgerblue 50%);
          background-size: 220%;
        }

        .delete-all {
            background: linear-gradient(120deg, var(--darker-bright) 50%, maroon 50%);
          background-size: 220%;
        }
        .post-arkiv {
            background: linear-gradient(120deg, var(--searchPostBtn) 50%, sandybrown 50%);
          background-size: 220%;
        }

        hr {
          background: gray;
          width: 80%;
          margin: 4rem 0;
        }
      `}</style>
    </div>
  );
};

export default SideBar;
