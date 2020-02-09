import { createContext } from 'react';
import uuid from 'uuid/v4';

const DataPost = createContext([
  {
    type: { name: '4x38/50 18%', id: uuid() },
    startRings: [
      { input: 53.1, id: uuid() },
      { input: 40, id: uuid() },
      { input: 6, id: uuid() }
    ],
    rawInput: [
      { input: 51.7, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 51.7, id: uuid() }
    ],
    endRings: [
      { input: 78.7, id: uuid() },
      { input: 10, id: uuid() },
      { input: 27.6, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x38 18%', id: uuid() },
    startRings: [
      { input: 21.4, id: uuid() },
      { input: 80, id: uuid() },
      { input: 10, id: uuid() }
    ],
    rawInput: [
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() }
    ],
    endRings: [
      { input: 78.7, id: uuid() },
      { input: 3, id: uuid() },
      { input: 46.9, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x25/38 18%', id: uuid() },
    startRings: [
      { input: 7, id: uuid() },
      { input: 10, id: uuid() },
      { input: 80, id: uuid() },
      { input: 27.6, id: uuid() }
    ],
    rawInput: [
      { input: 39.4, id: uuid() },
      { input: 26.2, id: uuid() },
      { input: 26.2, id: uuid() },
      { input: 39.4, id: uuid() }
    ],
    endRings: [
      { input: 78.7, id: uuid() },
      { input: 10, id: uuid() },
      { input: 53.1, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x50 18%', id: uuid() },
    startRings: [
      { input: 6, id: uuid() },
      { input: 40, id: uuid() },
      { input: 40.8, id: uuid() }
    ],
    rawInput: [
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() }
    ],
    endRings: [
      { input: 66.4, id: uuid() },
      { input: 3, id: uuid() },
      { input: 34.6, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  }
]);

export default DataPost;
