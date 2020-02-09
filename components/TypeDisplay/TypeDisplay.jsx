import React, { useContext } from 'react'
import DataPost from '../../PostArkiv'

const TypeDisplay = () => {
    const poster = useContext(DataPost)
    return (
        <div>
             {poster.map((post) => 
                <h1>{post.type.name}</h1>
             )}
        </div>
    )
}

export default TypeDisplay
