import React, { useContext } from 'react';

import DistanceRing from '../distance-rings/DistanceRing';
import styled from 'styled-components';
import DataPost from '../../PostArkiv';

const DimensionRings = props => {
  const ShimsCalcContainer = styled.div`
  
    position: absolute;
    color: indianred;
    top: 17rem;
    width: 2.2rem;
    border-radius: 5px;
    padding: 1rem;
    margin-left: .5rem;
    font-style: italic;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    
    
  `;

  const poster = useContext(DataPost)

  
  
  

  return (
    <div className={`blade-supercontainer ${props.deleteTransition}`}>
      <div className={`blade-container`}>
        {props.deleteTransition === '' ? (
          <p className="raw-input-label">{props.rawValue}</p>
        ) : null}

        <DistanceRing
          deleteTransition={props.deleteTransition}
          ringStyle={props.ringStyle}
          ringValue={props.ringValue}
          deleteDimensionRing={props.deleteDimensionRing}
          deleteRing={props.deleteRing}
          singleRingDelete={props.singleRingDelete}
          rawInputWindow={props.rawInputWindow}
         
        />

        <div
          onClick={props.openBladeThicknessChooser}
          className={`blade ${props.bladeDeleteAnimate}`}
        >
          <div className="blade-thickness-top">{props.bladeThicknessTop}</div>
          <div className="blade-thickness-bottom">{props.bladeThickness}</div>
        </div>
        <ShimsCalcContainer>
       <p style={{marginBottom: '-.5rem'}}>{props.ringShims}</p>
     <p style={{marginBottom: '-.5rem'}}>{props.rawShims}</p>
     <p style={{marginBottom: '-.5rem'}}>{props.rawShims2}</p>
     <p>{props.rawShims3}</p>
     
     </ShimsCalcContainer>

      </div>

      
    

  
      
      

      <style jsx>{`
      p {
        font-weight: bold;
        font-size: 1.2rem;
      }
        .blade-supercontainer {
          display: inline-block;
          max-width: 500px;
          transition: max-width 0.6s;
        }
        .blade-container {
          position: relative;
          display: flex;
          align-items: center;
          color: var(--darker-bright);
        }
        .blade {
          height: 25rem;
          width: 0.4rem;
          background-color: yellow;
          position: relative;
          cursor: pointer;
          animation-name: bladeAnimation;
          animation-duration: 0.5s;
        }

        /************ delete blade animation  ***************/
        @keyframes deleteBlade {
          100% {
            transform: translateY(70rem);
          }
        }
        @keyframes bladeRotate {
          100% {
            transform: rotate(175deg);
          }
        }
        .blade-delete {
          animation-name: bladeRotate, bounceOutDown;
          animation-duration: 1s;
        }
        @keyframes bounceOutDown {
          20% {
            -webkit-transform: translate3d(0, 10px, 0);
            transform: translate3d(0, 10px, 0);
          }

          40%,
          45% {
            opacity: 1;
            -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, 2000px, 0);
            transform: translate3d(0, 2000px, 0);
          }
        }

        @-webkit-keyframes slideInDown {
          from {
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
            visibility: visible;
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes bladeAnimation {
          0% {
            transform: translateX(-65px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .blade-thickness-top {
          position: absolute;
          bottom: 25.2rem;
          left: 50%;
          transform: translateX(-50%);
          color: yellow;
        }
        .blade-thickness-bottom {
          position: absolute;
          top: 25.2rem;
          left: 50%;
          transform: translateX(-50%);
          color: yellow;
        }

        .raw-input-label {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 2.8rem;
          border: 1px solid transparent;
          padding: 0.3rem;
          border-radius: 5px;
          color: white;
          z-index: 10;
          font-size: 1.3rem;
          color: indianred;
          font-style: italic;
        }

        .delete-transition {
          max-width: 0px;
        }
      `}</style>
    </div>
  );
};

export default DimensionRings;
