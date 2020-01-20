import React from 'react'

const StartLabelStaticComponent = (props) => {
    return (
        <div style={{left: props.position + 'rem'}} className='start-label-static-component-container'>
            <h1>{props.value}</h1>

            <style jsx>{`
            
            .start-label-static-component-container {
                position: absolute;
                bottom: 12rem;
            }
            .start-label-static-component-container h1 {
                font-style: italic;
                font-weight: 100;
                color: yellow;
                
            }

            `}</style>
        </div>
    )
}

export default StartLabelStaticComponent
