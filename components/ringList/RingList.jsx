import React from 'react';

const RingList = props => {
  return (
    <div className={props.openRingList}>
      <h1>Ring Liste</h1>
      <div className="list-container">
        <h2>små ringer</h2>
        <ul className="fill">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>10</li>
          <li>10.25</li>
          <li>10.5</li>
          <li>10.75</li>
          <li>11</li>
          <li>11.25</li>
          <li>11.5</li>
          <li>11.75</li>
          <li>12</li>
          <li>12.5</li>
          <li>12.75</li>
          <li>15</li>
          <li>20</li>
          <li>40</li>
          <li>80</li>
        </ul>
        <h2>Store ringer</h2>
        <ul className="full-size">
          <li>2.2</li>
          <li>2.4</li>
          <li>2.6</li>
          <li>2.8</li>
          <li>3</li>
          <li>3.2</li>
          <li>21.4</li>
          <li>25.1</li>
          <li>25.6</li>
          <li>27.6</li>
          <li>30.4</li>
          <li>34.6</li>
          <li>37</li>
          <li>37.5</li>
          <li>40</li>
          <li>40.8</li>
          <li>41.3</li>
          <li>44.9</li>
          <li>46.9</li>
          <li>47.9</li>
          <li>53.1</li>
          <li>54.6</li>
          <li>66.4</li>
          <li>78.7</li>
        </ul>
        <h2>Skims</h2>
        <ul>
          <li>0.3</li>
          <li>0.5</li>
          <li>1</li>
        </ul>
      </div>
      <style jsx>{`
              .ring-list-container {
                  height: 100vh;
                  width: 15vw;
                  background: var(--outer-ring);
                  position: absolute;
                  right: -15vw;
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
                  right: -15vw;
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
                  100% {transform: translateX(-15vw); display: none}
              }
              @keyframes hideRingList {
                  100% {transform: translateX(15vw) }
               }
                 
              }
            `}</style>
    </div>
  );
};

export default RingList;
