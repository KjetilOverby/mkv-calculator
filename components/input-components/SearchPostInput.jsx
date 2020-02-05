import React from 'react'
import InputComponent from './InputComponent'

function SearchPostInput(props) {
    const color = 'color-title-arkiv'
   
    return (
        <div>
            <InputComponent 
            title='Post Arkiv'
            color={color}
            background={'search-post-background'}
            close={props.openCloseSearchPostInput}
            hideInputComponent={props.hideSearchPostInput}
             
         
            />
        </div>
    )
}

export default SearchPostInput
