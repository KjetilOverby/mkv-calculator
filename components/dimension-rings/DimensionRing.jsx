import React from 'react';

import DistanceRing from '../distance-rings/DistanceRing';

const DimensionRings = (props) => {
    return (
        <div className="blade-supercontainer">
        <div className="blade-container">
        <p className='raw-input-label'>{props.rawValue}</p>
         <DistanceRing ringStyle={props.ringStyle} ringValue={props.ringValue} deleteDimensionRing={props.deleteDimensionRing} deleteRing={props.deleteRing}/>
  
          <div onClick={props.openBladeThicknessChooser} className={`blade ${props.bladeDeleteAnimate}`}>
            <div className="blade-thickness-top">{props.bladeThickness}</div>
            <div className="blade-thickness-bottom">{props.bladeThickness}</div>
          </div>
        </div>
        <style jsx>{`
        .blade-supercontainer {
    display: inline-block;
   
   
    
}
.blade-container {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--darker-bright);
    
    
    
}
.blade {
    height: 25rem;
    width: .4rem;
    background-color: yellow;
    position: relative;
    cursor: pointer;
    animation-name: bladeAnimation;
    animation-duration: .5s;
    
}

/************ delete blade animation  ***************/
@keyframes deleteBlade {
    100%{transform: translateY(70rem)}
}
@keyframes bladeRotate {
    100% {transform: rotate(175deg)}
    
}
.blade-delete {
    animation-name: bladeRotate, bounceOutDown ;
    animation-duration: 1.5s 
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
    0% {transform: translateX(-65px)}
    100% {transform: translateX(0)}
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
    top: 0rem;
    border: 1px solid white;
    padding: .2rem;
    border-radius: 5px;
    color: white;
    z-index: 10;
    
    
}
        `}</style>
      </div>
    )
}

export default DimensionRings
