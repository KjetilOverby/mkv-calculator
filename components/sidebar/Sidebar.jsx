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
          background: var(--sidebarBg);
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
          width: 17rem;
          margin-bottom: 1rem;
          
          outline: none;

          color: var(--input-outer-rings);
          font-size: 13px;
         
          border: none;
          
          transition: background 0.5s, color 0.5s;
         
          
        }
        .sidebar-buttons:hover {
          
          
          background-position: 100%;
          color: var(--input-outer-rings) ; 
        }
        .sidebar-button-raw {
            background: linear-gradient(120deg, var(--input-outer-rings) 50%, var(--input-inner-rings) 50%);
          background-size: 220%;
          color: var(--input-inner-rings)
        }

        .sidebar-button-fill {
            background: linear-gradient(120deg, var(--input-outer-rings) 50%, var(--input-inner-rings) 50%);
            color: var(--input-inner-rings);
          background-size: 220%;
        }

        .delete-all {
            background: linear-gradient(120deg, var(--deleteBtn) 50%, var(--deleteBtnHover) 50%);
          background-size: 220%;
        }
        .post-arkiv {
            background: linear-gradient(120deg, var(--searchPostBtn) 50%, var(--searchPostBtnHover) 50%);
          background-size: 220%;
        }
        .post-arkiv:hover {
          color: var(--input-inner-rings);
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
