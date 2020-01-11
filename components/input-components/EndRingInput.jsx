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
      />
    </div>
  );
};

export default EndRingInput;
