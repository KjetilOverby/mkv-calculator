import React from 'react'
import LabelComponent from './LabelComponent';


const EndLabel = (props) => {
    return (
        <div className='end-label'>
            <LabelComponent value={props.value} />
            <style jsx>{`
               .end-label {
                   background: blue;
                   
               }
            `}</style>
        </div>
    )
}

export default EndLabel
