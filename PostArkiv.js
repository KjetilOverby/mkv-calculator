import { createContext } from 'react';
import uuid from 'uuid/v4';




const DataPost = createContext ([{
    
        "type": '4x38/50 18%',
        "startRings": [
            {input: 53.1, id: uuid()},
            {input: 40, id: uuid()},
            {input: 6, id: uuid()}
        ], 
        "rawInput": [
            {input: 51.7, id: uuid()},
            {input: 39.4, id: uuid()},
            {input: 39.4, id: uuid()},
            {input: 51.7, id: uuid()}
        ],
        "endRings": [
            {input: 78.7, id: uuid()},
            {input: 10, id: uuid()},
            {input: 27.6, id: uuid()}
        ],
        "sagsnitt": [4.2, 4.2, 4.2, 4.2]
    },{
   
        "type": '4x38 18%',
        "startRings": [
            {input: 21.4, id: uuid()},
            {input: 80, id: uuid()},
            {input: 10, id: uuid()}
        ], 
        "rawInput": [
            {input: 39.4, id: uuid()},
            {input: 39.4, id: uuid()},
            {input: 39.4, id: uuid()},
            {input: 39.4, id: uuid()}
        ],
        "endRings": [
            {input: 78.7, id: uuid()},
            {input: 3, id: uuid()},
            {input: 46.9, id: uuid()}
        ],
        "sagsnitt": [4.2, 4.2, 4.2, 4.2]
    
}
]
)

export default DataPost