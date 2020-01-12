import React from 'react'

const RingList = (props) => {
    return (
        <div className={props.openRingList}>
            RingListe
            <style jsx>{`
              .ring-list-container {
                  height: 100vh;
                  width: 15vw;
                  background: orangered;
                  position: absolute;
                  right: -15vw;
                   }
              .show-ring-list {
                  display: block;
                  animation: showRingList .2s;
                  -webkit-animation-fill-mode: forwards, none;
                  right: -15vw;

              }
              .hide-ring-list {
                animation: hideRingList .2s;
                -webkit-animation-fill-mode: forwards, none;
                  right: 0;
                  
              }
              @keyframes showRingList {
                  100% {transform: translateX(-15vw); display: none}
              }
              @keyframes hideRingList {
                  100% {transform: translateX(15vw) }
               }
                 
              }
            `}</style>
        </div>
    )
}

export default RingList
