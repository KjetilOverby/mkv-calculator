import React from 'react';
import InputComponent from './InputComponent';


const EndRingInput = props => {
  const color = 'color-title-outer'
  const inputColor = 'input-color-green'
  const placeholder = 'Ringer bak'
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
        inputColor={inputColor}
        placeholder={placeholder}
      />
    </div>
  );
};

export default EndRingInput;
