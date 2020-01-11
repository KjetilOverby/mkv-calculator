import React from 'react'

const LabelComponent = (props) => {
    return (
        <div className='label-container'>
            <p>{props.value}</p>
            <style jsx>{`
             .label-container {
    background:  var(--bright);
    position: absolute;
    left: -3rem;
    bottom: 15rem;
    width: 6rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--main-dark);
    font-weight: bold;
}
            `}</style>
        </div>
    )
}

export default LabelComponent
