import React from 'react';

import DistanceRing from '../distance-rings/DistanceRing';

const DimensionRings = (props) => {
    return (
        <div className="blade-supercontainer">
        <div className="blade-container">
        <p className='raw-input-label'>{props.rawValue}</p>
         <DistanceRing ringStyle={props.ringStyle} ringValue={props.ringValue} deleteDimensionRing={props.deleteDimensionRing}/>
  
          <div onClick={props.openBladeThicknessChooser} className="blade">
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
