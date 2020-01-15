import React from 'react';

const RingList = props => {
  return (
    <div className={props.openRingList}>
    
      <div className="list-container">
      <h1>Ringer</h1>
        <h2>Små ringer</h2>
        <ul className="fill">
          <li onClick={() => props.getRings(1)}>1</li>
          <li onClick={() => props.getRings(2)}>2</li>
          <li onClick={() => props.getRings(3)}>3</li>
          <li onClick={() => props.getRings(4)}>4</li>
          <li onClick={() => props.getRings(5)}>5</li>
          <li onClick={() => props.getRings(6)}>6</li>
          <li onClick={() => props.getRings(7)}>7</li>
          <li onClick={() => props.getRings(10)}>10</li>
          <li onClick={() => props.getRings(10.25)}>10.25</li>
          <li onClick={() => props.getRings(10.5)}>10.5</li>
          <li onClick={() => props.getRings(10.75)}>10.75</li>
          <li onClick={() => props.getRings(11)}>11</li>
          <li onClick={() => props.getRings(11.25)}>11.25</li>
          <li onClick={() => props.getRings(11.5)}>11.5</li>
          <li onClick={() => props.getRings(11.75)}>11.75</li>
          <li onClick={() => props.getRings(12)}>12</li>
          <li onClick={() => props.getRings(12.5)}>12.5</li>
          <li onClick={() => props.getRings(12.75)}>12.75</li>
          <li onClick={() => props.getRings(15)}>15</li>
          <li onClick={() => props.getRings(20)}>20</li>
          <li onClick={() => props.getRings(40)}>40</li>
          <li onClick={() => props.getRings(80)}>80</li>
        </ul>
        <h2>Store ringer</h2>
        <ul className="full-size">
          <li onClick={() => props.getRings(2.2)}>2.2</li>
          <li onClick={() => props.getRings(2.4)}>2.4</li>
          <li onClick={() => props.getRings(2.6)}>2.6</li>
          <li onClick={() => props.getRings(2.8)}>2.8</li>
          <li onClick={() => props.getRings(3)}>3</li>
          <li onClick={() => props.getRings(3.2)}>3.2</li>
          <li onClick={() => props.getRings(21.4)}>21.4</li>
          <li onClick={() => props.getRings(25.1)}>25.1</li>
          <li onClick={() => props.getRings(25.6)}>25.6</li>
          <li onClick={() => props.getRings(27.6)}>27.6</li>
          <li onClick={() => props.getRings(30.4)}>30.4</li>
          <li onClick={() => props.getRings(34.6)}>34.6</li>
          <li onClick={() => props.getRings(37)}>37</li>
          <li onClick={() => props.getRings(37.5)}>37.5</li>
          <li onClick={() => props.getRings(40)}>40</li>
          <li onClick={() => props.getRings(40.8)}>40.8</li>
          <li onClick={() => props.getRings(41.3)}>41.3</li>
          <li onClick={() => props.getRings(44.9)}>44.9</li>
          <li onClick={() => props.getRings(46.9)}>46.9</li>
          <li onClick={() => props.getRings(47.9)}>47.9</li>
          <li onClick={() => props.getRings(53.1)}>53.1</li>
          <li onClick={() => props.getRings(54.6)}>54.6</li>
          <li onClick={() => props.getRings(66.4)}>66.4</li>
          <li onClick={() => props.getRings(78.7)}>78.7</li>
        </ul>
        <h2>Skims</h2>
        <ul style={{display: 'flex', justifyContent: 'center'}}>
          <li onClick={() => props.getRings(0.3)}>0.3</li>
          <li onClick={() => props.getRings(0.5)}>0.5</li>
          <li onClick={() => props.getRings(1)}>1</li>
        </ul>
      </div>
      <style jsx>{`
              .ring-list-container {
                  height: 100vh;
                  width: 16vw;
                  background: var(--outer-ring);
                  position: absolute;
                  right: -16vw;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: white;
                  z-index: 100
                   }
                   .list-container {
                       display: flex;
                       flex-direction: column;
                       align-items: center
                   }
                   .list-container ul li {
                       list-style: none;
                       border: 1px solid yellow;
                       margin: 2px;
                       width: 50px;
                       padding: 2px;
                       font-weight: bold;
                       display: flex;
                       justify-content: center;
                       align-items: center;
                       color: white;
                       font-size: 1.2rem
                   }
                   .list-container ul li:hover {
                       cursor: pointer;
                       background: red
                   }
                   .fill {
                      
                       display: flex;
                       flex-wrap: wrap;
                   }
                   .full-size {
                    display: flex;
                       flex-wrap: wrap;
                   }
              .show-ring-list {
                  display: block;
                  animation: showRingList .2s;
                  -webkit-animation-fill-mode: forwards, none;
                  right: -16vw;
                  display: flex;
                 align-items: center;
                       flex-direction: column;
                       

              }
              .hide-ring-list {
                animation: hideRingList .2s;
                -webkit-animation-fill-mode: forwards, none;
                  right: 0;
                  
              }
              @keyframes showRingList {
                  100% {transform: translateX(-16vw); display: none}
              }
              @keyframes hideRingList {
                  100% {transform: translateX(16vw) }
               }
                 
              }
            `}</style>
    </div>
  );
};

export default RingList;
