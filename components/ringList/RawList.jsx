import React from 'react'

const RawList = (props) => {


    console.log('from props: ' + props.openRawList);
    
    return (
        <div className={props.openRawList} >
           Råmålsliste
            <style jsx>{`
                .raw-list-container {
                    height: 100vh;
                  width: 15vw;
                  background: green;
                  position: absolute;
                  right: -15vw;
                }

                .show-raw-list {
                  display: block;
                  animation: showRawList .2s;
                  -webkit-animation-fill-mode: forwards, none;
                  
                  right: -15vw;

              }
              .hide-raw-list {
                animation: hideRawList .2s;
                -webkit-animation-fill-mode: forwards, none;
                
                  right: 0;
                  
              }
              @keyframes showRawList {
                  100% {transform: translateX(-15vw); display: none}
              }
              
              @keyframes hideRawList {
                  100% {transform: translateX(15vw) }
               }
            `} 
            </style>
        </div>
    )
}

export default RawList
