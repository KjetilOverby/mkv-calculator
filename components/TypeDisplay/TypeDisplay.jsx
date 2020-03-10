import React, { useContext } from 'react'
import DataPost from '../../PostArkiv'
import styled from 'styled-components'

const TypeDisplay = (props) => {

    const Container = styled.div`
        position: absolute;
        background: var(--input-title-inner-rings);
        min-width: 50rem;
        display: flex;
        justify-content: center;
        color: var(--input-title-outer-rings);
        border-radius: 10px;
        top: 80vh;
        left: 50%;
        margin-left: -25rem;
        flex-direction: row;
        align-items: center;
        height: 5rem;
        transition: .5s;
    `
    const H1 = styled.h1`
        display:inline-block;
        margin: 0 4rem;
        font-size: 3.1rem;
        font-weight:400;
       
    `
    const poster = useContext(DataPost)
    return (
        <div>
           {props.postIndex && 
           <Container className={`${props.typeDisplayMove}`}>
           <H1>{poster[props.postIndex].type.name} </H1>
        
           </Container>
           
           }
          
           <style jsx>{`

           .stay-up {
               transform: translateY(-70vh)
           }
           .stay-down {
               transform: translateY(0vh)
           }
           .movingTypeDisplayUp {
              animation: moveUp .5s forwards, none;
           }
           .movingTypeDisplayDown {
               animation: moveDown .5s forwards, none
           }
           @keyframes moveUp {
            0% {transform: translateY(0vh)}
            100% {transform: translateY(-70vh)}
           }
           @keyframes moveDown {
            0% {transform: translateY(-70vh)}
            100% {transform: translateY(0vh)}
           }
           `}</style>
        </div>
    )
}

export default TypeDisplay
