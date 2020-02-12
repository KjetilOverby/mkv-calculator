import { createContext } from 'react';
import uuid from 'uuid/v4';

const DataPost = createContext([


   /****************** 2.6 - 4.0 18% *****************/
  {
    type: { name: '2x25 - 18% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '18',
    startRings: [
      { input: 3, id: uuid() },
      { input: 20, id: uuid() },
      { input: 40, id: uuid() },
      { input: 46.9, id: uuid() },
      { input: 54.6, id: uuid() }
    ],
    rawInput: [
      
      { input: 26.2, id: uuid() },
      { input: 26.2, id: uuid() }
    ],
    endRings: [
      { input: 1, id: uuid() },
      { input: 2, id: uuid() },
      { input: 20, id: uuid() },
      { input: 80, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.0, 4.0, 4.0, 4.0]
  },
  {
    type: { name: '2x44 - 18% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '18',
    startRings: [
      { input: 3, id: uuid() },
      
      { input: 40, id: uuid() },
      { input: 53.1, id: uuid() },
      { input: 53.1, id: uuid() }
    ],
    rawInput: [
      
      { input: 45.5, id: uuid() },
      { input: 45.5, id: uuid() }
    ],
    endRings: [
     
      { input: 53.1, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.0, 4.0]
  },
  {
    type: { name: '4x38/50 - 18% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '18',
    startRings: [
      { input: 54.6, id: uuid() },
      { input: 5, id: uuid() },
      { input: 40, id: uuid() }
    ],
    rawInput: [
      { input: 51.7, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 51.7, id: uuid() }
    ],
    endRings: [
      { input: 25.1, id: uuid() },
      { input: 2, id: uuid() },
      { input: 11, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.0, 4.0, 4.0, 4.0]
  },
  {
    type: { name: '2x38 - 18% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '18',
    startRings: [
      { input: 4, id: uuid() },
      { input: 40, id: uuid() },
      { input: 44.9, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
    
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() }
      
    ],
    endRings: [
      { input: 37.5, id: uuid() },
      { input: 15, id: uuid() },
      { input: 41.3, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.0, 4.0]
  },
  {
    type: { name: '4x50 - 12% - 4.0 (52.2)', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '12',
    startRings: [
      { input: 20, id: uuid() },
      { input: 21.4, id: uuid() },
      { input: 44.9, id: uuid() }
    ],
    rawInput: [
      { input: 52.2, id: uuid() },
      { input: 52.2, id: uuid() },
      { input: 52.2, id: uuid() },
      { input: 52.2, id: uuid() }
    ],
    endRings: [
      { input: 30.4, id: uuid() },
      { input: 20, id: uuid() },
      { input: 53.1, id: uuid() }
    ],
    sagsnitt: [4.0, 4.0, 4.0, 4.0]
  },
  {
    type: { name: '4x38 - 18% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '18',
    startRings: [
      { input: 6, id: uuid() },
      { input: 12, id: uuid() },
      { input: 40.8, id: uuid() },
      { input: 53.1, id: uuid() }
    ],
    rawInput: [
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() }
    ],
    endRings: [
      { input: 30.4, id: uuid() },
      { input: 20, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.0, 4.0, 4.0, 4.0]
  },
  {
    type: { name: '4x25/38 - 18% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '18',
    startRings: [
      
      { input: 25.1, id: uuid() },
      { input: 46.9, id: uuid() },
      { input: 53.1, id: uuid() }
    ],
    rawInput: [
      { input: 39.4, id: uuid() },
      { input: 26.2, id: uuid() },
      { input: 26.2, id: uuid() },
      { input: 39.4, id: uuid() }
    ],
    endRings: [
      { input: 54.6, id: uuid() },
      { input: 7, id: uuid() },
      { input: 2, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.0, 4.0, 4.0, 4.0]
  },
  {
    type: { name: '2x50 - 18% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '18',
    startRings: [
      { input: 2, id: uuid() },
      { input: 20, id: uuid() },
      { input: 54.6, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
      
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() }
    ],
    endRings: [
      { input: 46.9, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 78.7, id: uuid() },
     
    ],
    sagsnitt: [4.0, 4.0]
  },
      /**************** 2.8 - 4.2 12-18% ******************/

      {
        type: { name: '4x43/22 - 18-12% - 4.2', id: uuid() },
        bladType: "2.8 - 4.2",
        bladeThickness: ['2.8'],
        sagSnitt: ['4.2'],
        percent: '18-12',
        startRings: [
          { input: 5, id: uuid() },
          { input: 80, id: uuid() },
          { input: 37, id: uuid() }
        ],
        rawInput: [
          { input: 23.7, id: uuid() },
          { input: 44.5, id: uuid() },
          { input: 44.5, id: uuid() },
          { input: 23.7, id: uuid() }
        ],
        endRings: [
          { input: 37.5, id: uuid() },
          { input: 20, id: uuid() },
          { input: 3, id: uuid() },
          { input: 78.7, id: uuid() }
        ],
        sagsnitt: [4.2, 4.2, 4.2, 4.2]
      },
      {
        type: { name: '4x43/44 - 18-12% - 4.2', id: uuid() },
        bladType: "2.8 - 4.2",
        bladeThickness: ['2.8'],
        sagSnitt: ['4.2'],
        percent: '18-12',
        startRings: [
          { input: 11, id: uuid() },
          { input: 40, id: uuid() },
          { input: 47.9, id: uuid() }
        ],
        rawInput: [
          { input: 46.8, id: uuid() },
          { input: 44.5, id: uuid() },
          { input: 44.5, id: uuid() },
          { input: 46.8, id: uuid() }
        ],
        endRings: [
          
          { input: 30.4, id: uuid() },
          { input: 7, id: uuid() },
          { input: 78.7, id: uuid() }
        ],
        sagsnitt: [4.2, 4.2, 4.2, 4.2]
      },


      
      /**************** 2.8 - 4.2 12% ******************/
      {
        type: { name: '2x50 - 12% - 4.2 (52.2)', id: uuid() },
        bladType: "2.8 - 4.2",
        bladeThickness: ['2.8'],
        sagSnitt: ['4.2'],
        percent: '18-12',
        startRings: [
          { input: 7, id: uuid() },
          { input: 2.4, id: uuid() },
          { input: 66.4, id: uuid() },
          { input: 66.4, id: uuid() }
        ],
        rawInput: [
          { input: 52.2, id: uuid() },
          { input: 52.2, id: uuid() },
          
        ],
        endRings: [
          { input: 27.6, id: uuid() },
          { input: 53.1, id: uuid() },
          
          { input: 78.7, id: uuid() }
        ],
        sagsnitt: [4.2, 4.2]
      },
      /**************** 2.8 - 4.2 18% ******************/
  {
    type: { name: '4x50 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
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
  },
  {
    type: { name: '4x38/44 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 1, id: uuid() },
      { input: 25.6, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    rawInput: [
      { input: 45.5, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 45.5, id: uuid() }
    ],
    endRings: [
      { input: 40.8, id: uuid() },
      { input: 3, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x43/32 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 15, id: uuid() },
      { input: 20, id: uuid() },
      { input: 40, id: uuid() },
      { input: 37.5, id: uuid() },
     
    ],
    rawInput: [
      { input: 33.2, id: uuid() },
      { input: 44.5, id: uuid() },
      { input: 44.5, id: uuid() },
      { input: 33.2, id: uuid() }
    ],
    endRings: [
      { input: 40, id: uuid() },
      { input: 11, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x43/25 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
     
      { input: 53.1, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
      { input: 26.2, id: uuid() },
      { input: 44.5, id: uuid() },
      { input: 44.5, id: uuid() },
      { input: 26.2, id: uuid() }
    ],
    endRings: [
      { input: 37, id: uuid() },
      { input: 1, id: uuid() },
      { input: 20, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x38/50 - 18% -4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
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
    type: { name: '4x50 - 12% - 4.2 (52.2)', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '12',
    startRings: [
      { input: 40.8, id: uuid() },
      { input: 40, id: uuid() },
      { input: 5, id: uuid() }
    ],
    rawInput: [
      { input: 52.2, id: uuid() },
      { input: 52.2, id: uuid() },
      { input: 52.2, id: uuid() },
      { input: 52.2, id: uuid() }
    ],
    endRings: [
      { input: 66.4, id: uuid() },
      { input: 2, id: uuid() },
      { input: 34.6, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x38 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
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
    type: { name: '4x25/38 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
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
    type: { name: '2x50 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 1, id: uuid() },
      { input: 30.4, id: uuid() },
      { input: 44.9, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
      
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() }
    ],
    endRings: [
      { input: 78.7, id: uuid() },
      { input: 15, id: uuid() },
      { input: 4, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 27.6, id: uuid() },
    ],
    sagsnitt: [4.2, 4.2]
  },

  /************** 3.2 - 4.6 12% *******************/
  {
    type: { name: '2x46 - 12% - 4.6', id: uuid() },
    bladType: "3.2 - 4.6",
    bladeThickness: ['3.2'],
    sagSnitt: ['4.6'],
    percent: '12',
    startRings: [
      { input: 7, id: uuid() },
      { input: 44.9, id: uuid() },
     
      { input: 41.3, id: uuid() }
    ],
    rawInput: [
      
      { input: 48, id: uuid() },
      { input: 48, id: uuid() },
      { input: 48, id: uuid() },
      { input: 48, id: uuid() }
    ],
    endRings: [
      { input: 30.4, id: uuid() },
      { input: 80, id: uuid() }
    ],
    sagsnitt: [4.6, 4.6, 4.6, 4.6]
  },
  {
    type: { name: '4x50 - 12% - 4.6 (52.5/53.2)', id: uuid() },
    bladType: "3.2 - 4.6",
    bladeThickness: ['3.2'],
    sagSnitt: ['4.6'],
    percent: '12',
    startRings: [
      { input: 4, id: uuid() },
      { input: 44.9, id: uuid() },
      { input: 34.6, id: uuid() }
    ],
    rawInput: [
      
      { input: 53.2, id: uuid() },
      { input: 52.5, id: uuid() },
      { input: 52.5, id: uuid() },
      { input: 53.2, id: uuid() }
    ],
    endRings: [
      { input: 20, id: uuid() },
      { input: 2, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.6, 4.6, 4.6, 4.6]
  }
]);

export default DataPost;
