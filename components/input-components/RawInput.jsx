import React from 'react'
import InputComponent from '../input-components/InputComponent';

const RawInput = (props) => {
    const color = 'color-title-raw'
    const inputColor = 'input-color-green'
    const placeHolderRaw = 'Råmål'





    return (
        <div>
            <InputComponent
             title='Råmål' inputDataOnChange={props.getRawInput} 
             submit={props.rawInputDataSubmit} value={props.value} 
             background='raw-input-background' 
             backgroundBtn='raw-btn-background'
             inputColorInner= 'input-color-inner'
             inputBorderColor='input-border-color-inner'
             deleteGroup={props.allRawInputDelete}
             close={props.openCloseRawInputWindow}
             hideInputComponent={props.hideRawInputComponent}
             color={color}
             inputColor={inputColor}
             placeholder={placeHolderRaw}
             xInput={props.xInput}
             rawInputWindowForRef={props.rawInputWindowForRef}     
            
             />
        </div>
    )
}

export default RawInput
