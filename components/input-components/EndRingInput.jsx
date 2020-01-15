import React from 'react';
import InputComponent from './InputComponent';


const EndRingInput = props => {
  const color = 'color-title-outer'
  return (
    <div>
      <InputComponent 
        title="Utfylling bak"
        inputDataOnChange={props.inputDataOnChange}
        submit={props.submit}
        value={props.value}
        deleteAllDimensionRings={props.deleteAllEndRings}
        background='outer-rings-background'
        backgroundBtn='outer-btn-background'
        deleteGroup={props.allEndRingDelete}
        close={props.openCloseEndInputWindow}
        hideInputComponent={props.hideEndInputComponent}
        color={color}
      />
    </div>
  );
};

export default EndRingInput;
