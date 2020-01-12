import React from 'react';
import InputComponent from './InputComponent';


const EndRingInput = props => {
  return (
    <div>
      <InputComponent 
        title="Ringer utfylling bak"
        inputDataOnChange={props.inputDataOnChange}
        submit={props.submit}
        value={props.value}
        deleteAllDimensionRings={props.deleteAllEndRings}
        background='outer-rings-background'
        backgroundBtn='outer-btn-background'
      />
    </div>
  );
};

export default EndRingInput;
