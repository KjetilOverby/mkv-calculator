import React from 'react'
import styled from 'styled-components'

const StartInputContainer = styled.div`
  display: flex;
  align-items: center;

`
const H1 = styled.h1`
  margin-right: 3rem;
  color: var(--input-inner-rings);
`

const Input = styled.input`
   background: transparent;
   border: none;
   border-bottom: 2px solid var(--input-inner-rings);
   font-size: 1.5rem;
   color: var(--input-inner-rings)
`
const InputCommonComponent = (props) => {
    return (
        <StartInputContainer>
        <H1>{props.title}</H1>
   
   
      <form onSubmit={props.submit}>

     <Input
       type="text"
       placeholder={props.placeholder}
       onChange={props.change}
       ref={props.inputRef}
      
     />
  
   </form>

   <style>{`
    
   `}</style>
  
   </StartInputContainer>
    )
}

export default InputCommonComponent
