import React from 'react'
import InputCommonComponent from './InputCommonComponent'

const ShimsInpputSC = (props) => {
    return (
        <div>
            <InputCommonComponent 
               title='Skims'
               submit={props.executeShimsInput}
               change={props.getShimsInputSCMethod}
               placeholder='Legg til skims'
               inputRef={props.inputRef}
            />
        </div>
    )
}

export default ShimsInpputSC
