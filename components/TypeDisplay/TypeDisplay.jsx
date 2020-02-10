import React, { useContext } from 'react'
import DataPost from '../../PostArkiv'
import styled from 'styled-components'

const TypeDisplay = (props) => {

    const Container = styled.div`
        position: absolute;
        background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5));
        width: 50rem;
        display: flex;
        justify-content: center;
        color: orange;
        border-radius: 10px;
        top: 80vh;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: row;
        align-items: center;
        height: 5rem
    `
    const H1 = styled.h1`
        display:inline-block;
        margin: 0 4rem
    `
    const poster = useContext(DataPost)
    return (
        <div>
           {props.postIndex && 
           <Container>
           <H1>{poster[props.postIndex].type.name} </H1>
        
           </Container>
           
           }
        </div>
    )
}

export default TypeDisplay
