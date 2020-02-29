import { createContext } from 'react';
import uuid from 'uuid/v4';

const DataPost = createContext([
  {
    type: { name: '2x25 - 18% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '18',
    startRings: [
      { input: 7, id: uuid() },
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
      { input: 5, id: uuid() },
      { input: 2, id: uuid() },
      { input: 20, id: uuid() },
      { input: 80, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.0, 4.0],
    
  },


   /****************** 2.2 - 3.6 18% *****************/
   {
    type: { name: '2x38 - 18% - 3.6', id: uuid() },
    bladType: "2.2 - 3.6",
    bladeThickness: ['2.2'],
    sagSnitt: ['3.6'],
    percent: '18',
    startRings: [
      { input: 10, id: uuid() },
      { input: 44.9, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
      
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() }
    ],
    endRings: [
      { input: 34.6, id: uuid() },
      { input: 40.8, id: uuid() },
      { input: 15, id: uuid() },
      { input: 4, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [3.6, 3.6]
  },

   /****************** 2.4 - 3.8 18% *****************/
   {
    type: { name: '2x44 - 18% - 3.8', id: uuid() },
    bladType: "2.4 - 3.8",
    bladeThickness: ['2.4'],
    sagSnitt: ['3.8'],
    percent: '18',
    startRings: [
      { input: 12, id: uuid() },
      { input: 20, id: uuid() },
      { input: 80, id: uuid() },
      { input: 37.5, id: uuid() }
    ],
    rawInput: [
      
      { input: 45.5, id: uuid() },
      { input: 45.5, id: uuid() }
    ],
    endRings: [
      { input: 46.9, id: uuid() },
      { input: 30.4, id: uuid() },
      { input: 10.75, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [3.8, 3.8]
  },
   {
    type: { name: '2x38 - 18% - 3.8', id: uuid() },
    bladType: "2.4 - 3.8",
    bladeThickness: ['2.4'],
    sagSnitt: ['3.8'],
    percent: '18',
    startRings: [
      { input: 20, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
      
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() }
    ],
    endRings: [
      { input: 53.1, id: uuid() },
      { input: 1, id: uuid() },
      { input: 40, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [3.8, 3.8]
  },

   /****************** 2.6 - 4.0 18% *****************/

  
  {
    type: { name: '4x31 - 18% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '18',
    startRings: [
      { input: 10.5, id: uuid() },
      { input: 80, id: uuid() },
      { input: 34.6, id: uuid() },
     
    ],
    rawInput: [
      
      { input: 32.8, id: uuid() },
      { input: 32.8, id: uuid() },
      { input: 32.8, id: uuid() },
      { input: 32.8, id: uuid() },
      
    ],
    endRings: [
      { input: 53.1, id: uuid() },
      { input: 10.5, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.0, 4.0, 4.0, 4.0]
  },
  {
    type: { name: '3x38 - 18% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '18',
    startRings: [
      { input: 6, id: uuid() },
      { input: 20, id: uuid() },
      { input: 80, id: uuid() },
      { input: 27.6, id: uuid() },
     
    ],
    rawInput: [
      
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() }
      
    ],
    endRings: [
      { input: 53.1, id: uuid() },
      { input: 12, id: uuid() },
      { input: 7, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.0, 4.0, 4.0]
  },
  {
    type: { name: '2x43 - 18% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '18',
    startRings: [
      { input: 12, id: uuid() },
      { input: 11.25, id: uuid() },
      { input: 80, id: uuid() },
      { input: 46.9, id: uuid() },
     
    ],
    rawInput: [
      
      { input: 44.5, ring: 44.9, shims: 1, id: uuid() },
      { input: 44.5, ring: 44.9, shims: 1, id: uuid() }
      
      
    ],
    endRings: [
      { input: 34.6, id: uuid() },
      { input: 53.1, id: uuid() },
      { input: 1, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.0, 4.0]
  },
  {
    type: { name: '2x34 - 18% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '18',
    startRings: [
      { input: 27.6, id: uuid() },
      { input: 53.1, id: uuid() },
      { input: 78.7, id: uuid() }
     
    ],
    rawInput: [
      
      { input: 35.3, ring: 30.4, shims: 3, shims2: 3, shims3: 0.3, id: uuid() },
      { input: 35.3, ring: 30.4, shims: 3, shims2: 3, shims3: 0.3, id: uuid() }
      
      
    ],
    endRings: [
      { input: 53.1, id: uuid() },
      { input: 4, id: uuid() },
      { input: 40.8, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.0, 4.0]
  },
  {
    type: { name: '4x34/31 - 18% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '18',
    startRings: [
      { input: 11, id: uuid() },
      { input: 40, id: uuid() },
      { input: 37.5, id: uuid() },
      { input: 34.6, id: uuid() }
    ],
    rawInput: [
      
      { input: 32.2, ring: 30.4, shims: 3.2, id: uuid() },
      { input: 35.4, ring: 30.4, shims: 3.2, shims2: 3.2, id: uuid() },
      { input: 35.4, ring: 30.4, shims: 3.2, shims2: 3.2, id: uuid() },
      { input: 32.2, ring: 30.4, shims: 3.2, id: uuid() },
    ],
    endRings: [
      { input: 54.6, id: uuid() },
      { input: 7, id: uuid() },
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
    //************** 4.0 12% ******************/
  {
    type: { name: '2x63 - 12% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '12',
    startRings: [
      { input: 2, id: uuid() },
      { input: 7, id: uuid() },
      { input: 40, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    rawInput: [
      
      { input: 67, ring: 66.4, shims: 2, id: uuid() },
      { input: 67, ring: 66.4, shims: 2, id: uuid() }
    ],
    endRings: [
      { input: 34.6, id: uuid() },
      { input: 27.6, id: uuid() },
      { input: 4, id: uuid() },
      { input: 78.7, id: uuid() },
     
    ],
    sagsnitt: [4.0, 4.0]
  },
  {
    type: { name: '2x45 - 12% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '12',
    startRings: [
      { input: 40, id: uuid() },
      { input: 53.1, id: uuid() },
      { input: 54.6, id: uuid() }
    ],
    rawInput: [
      
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() }
    ],
    endRings: [
      { input: 30.4, id: uuid() },
      { input: 40.8, id: uuid() },
      { input: 15, id: uuid() },
      { input: 78.7, id: uuid() },
     
    ],
    sagsnitt: [4.0, 4.0]
  },
  {
    type: { name: '4x34 - 12% - 4.0 (35.6/35.9)', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '12',
    startRings: [
      { input: 12, id: uuid() },
      { input: 40.8, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
      
      { input: 35.9, id: uuid() },
      { input: 35.6, ring: 34.6, shims: 2.4, id: uuid() },
      { input: 35.6, ring: 34.6, shims: 2.4, id: uuid() },
      { input: 35.9, id: uuid() }
    ],
    endRings: [
      { input: 25.1, id: uuid() },
      { input: 44.9, id: uuid() },
      { input: 66.4, id: uuid() }
     
    ],
    sagsnitt: [4.0, 4.0, 4.0, 4.0]
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
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() }
    ],
    endRings: [
      { input: 30.4, id: uuid() },
      { input: 20, id: uuid() },
      { input: 53.1, id: uuid() }
    ],
    sagsnitt: [4.0, 4.0, 4.0, 4.0]
  },
  {
    type: { name: '2x50 - 12% - 4.0 (52.2)', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '12',
    startRings: [
      { input: 3, id: uuid() },
      { input: 20, id: uuid() },
      { input: 40.8, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    rawInput: [
      
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() }
    ],
    endRings: [
      { input: 37, id: uuid() },
      { input: 40, id: uuid() },
      { input: 4, id: uuid() },
      { input: 78.7, id: uuid() },
     
    ],
    sagsnitt: [4.0, 4.0]

  },
  {
    type: { name: '2x44 - 12% - 4.0', id: uuid() },
    bladType: "2.6 - 4.0",
    bladeThickness: ['2.6'],
    sagSnitt: ['4.0'],
    percent: '12',
    startRings: [
      { input: 10, id: uuid() },
      { input: 20, id: uuid() },
      { input: 40, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    rawInput: [
      
      { input: 46, ring: 46.9, shims: 0.5, id: uuid() },
      { input: 46, ring: 46.9, shims: 0.5, id: uuid() }
    ],
    endRings: [
      { input: 54.6, id: uuid() },
      { input: 27.6, id: uuid() },
      { input: 5, id: uuid() },
      { input: 78.7, id: uuid() },
     
    ],
    sagsnitt: [4.0, 4.0],
    ringWithShims: 46.9,
    shims: 0.5
  },
      /**************** 2.8 - 4.2 12-18% ******************/

      {
        type: { name: '4x43/22 - 18/12% - 4.2', id: uuid() },
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
        type: { name: '4x38 - 18/12% - 4.2', id: uuid() },
        bladType: "2.8 - 4.2",
        bladeThickness: ['2.8'],
        sagSnitt: ['4.2'],
        percent: '18-12',
        startRings: [
          { input: 3, id: uuid() },
          { input: 20, id: uuid() },
          { input: 40, id: uuid() },
          { input: 47.9, id: uuid() },
        ],
        rawInput: [
          { input: 39.9, id: uuid() },
          { input: 39.4, id: uuid() },
          { input: 39.4, id: uuid() },
          { input: 39.9, id: uuid() }
        ],
        endRings: [
          { input: 30.4, id: uuid() },
          { input: 15, id: uuid() },
          { input: 4, id: uuid() },
          { input: 78.7, id: uuid() }
        ],
        sagsnitt: [4.2, 4.2, 4.2, 4.2]
      },
      {
        type: { name: '4x38/22 - 18/12% - 4.2', id: uuid() },
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
        type: { name: '4x43/28 - 18/12% - 4.2', id: uuid() },
        bladType: "2.8 - 4.2",
        bladeThickness: ['2.8'],
        sagSnitt: ['4.2'],
        percent: '18-12',
        startRings: [
          { input: 15, id: uuid() },
          { input: 34.6, id: uuid() },
          { input: 66.4, id: uuid() }
        ],
        rawInput: [
          { input: 29.7, ring: 27.6, shims: 3.2, shims2: 0.3, id: uuid() },
          { input: 44.5, ring: 44.9, shims: 1, id: uuid() },
          { input: 44.5, ring: 44.9, shims: 1, id: uuid() },
          { input: 29.7, ring: 27.6, shims: 3.2, shims2: 0.3, id: uuid() }
        ],
        endRings: [
          { input: 37.5, id: uuid() },
          { input: 12, id: uuid() },
          { input: 5, id: uuid() },
          { input: 78.7, id: uuid() }
        ],
        sagsnitt: [4.2, 4.2, 4.2, 4.2]
      },
      {
        type: { name: '4x50/23 - 12/18% (52.2) - 4.2', id: uuid() },
        bladType: "2.8 - 4.2",
        bladeThickness: ['2.8'],
        sagSnitt: ['4.2'],
        percent: '12-18',
        startRings: [
          { input: 1, id: uuid() },
          { input: 20, id: uuid() },
          { input: 47.9, id: uuid() },
          { input: 44.9, id: uuid() },
        ],
        rawInput: [
          { input: 24.2, id: uuid() },
          { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
          { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
          { input: 24.2, id: uuid() }
        ],
        endRings: [
          { input: 27.6, id: uuid() },
          { input: 37, id: uuid() },
          { input: 66.4, id: uuid() }
        ],
        sagsnitt: [4.2, 4.2, 4.2, 4.2]
      },
      {
        type: { name: '4x43/44 - 18/12% - 4.2', id: uuid() },
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
          { input: 46.8, ring: 47.9, shims: 0.3, id: uuid() },
          { input: 44.5, ring: 44.9, shims: 1, id: uuid() },
          { input: 44.5, ring: 44.9, shims: 1, id: uuid() },
          { input: 46.8, ring: 47.9, shims: 0.3, id: uuid() }
        ],
        endRings: [
          
          { input: 30.4, id: uuid() },
          { input: 7, id: uuid() },
          { input: 78.7, id: uuid() }
        ],
        sagsnitt: [4.2, 4.2, 4.2, 4.2]
      },


      
      
      
      /**************** 2.8 - 4.2 18% ******************/
  {
    type: { name: '2x44 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 2, id: uuid() },
      { input: 20, id: uuid() },
      { input: 80, id: uuid() },
      { input: 46.9, id: uuid() }
    ],
    rawInput: [
      { input: 45.5, id: uuid() },
      { input: 45.5, id: uuid() }
    ],
    endRings: [
      { input: 40.8, id: uuid() },
      { input: 12, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2]
  },
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
    type: { name: '4x43/50 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 27.6, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
      { input: 51.7, id: uuid() },
      { input: 44.5, ring: 44.9, shims: 1, id: uuid() },
      { input: 44.5, ring: 44.9, shims: 1, id: uuid() },
      { input: 51.7, id: uuid() }
    ],
    endRings: [
      { input: 40.8, id: uuid() },
      { input: 4, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x43/22 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 15, id: uuid() },
      { input: 80, id: uuid() },
      { input: 27.6, id: uuid() }
    ],
    rawInput: [
      { input: 23.1, ring: 21.4, shims: 2.6, shims2: 0.3, id: uuid() },
      { input: 44.5, ring: 44.9, shims: 1, id: uuid() },
      { input: 44.5, ring: 44.9, shims: 1, id: uuid() },
      { input: 23.1, ring: 21.4, shims: 2.6, shims2: 0.3, id: uuid() }
    ],
    endRings: [
      { input: 53.1, id: uuid() },
      { input: 5, id: uuid() },
      { input: 3, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x44/25 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 3, id: uuid() },
      { input: 40, id: uuid() },
      { input: 47.9, id: uuid() },
      { input: 27.6, id: uuid() }
    ],
    rawInput: [
      { input: 26.2, id: uuid() },
      { input: 45.5, id: uuid() },
      { input: 45.5, id: uuid() },
      { input: 26.2, id: uuid() }
    ],
    endRings: [
      { input: 37, id: uuid() },
      { input: 20, id: uuid() },
      { input: 78.7, id: uuid() }
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
    type: { name: '4x43/45 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 11, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 53.1, id: uuid() },
     
    ],
    rawInput: [
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      { input: 44.5, ring: 44.9, shims: 1, id: uuid() },
      { input: 44.5, ring: 44.9, shims: 1, id: uuid() },
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() }
    ],
    endRings: [
      { input: 37.5, id: uuid() },
      { input: 12, id: uuid() },
      { input: 66.4, id: uuid() }
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
    type: { name: '4x38/50 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 6, id: uuid() },
      { input: 40, id: uuid() },
      { input: 53.1, id: uuid() }
    ],
    rawInput: [
      { input: 51.7, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 51.7, id: uuid() }
    ],
    endRings: [
      { input: 27.6, id: uuid() },
      { input: 10, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x38/25 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 5, id: uuid() },
      { input: 12, id: uuid() },
      { input: 80, id: uuid() },
      { input: 27.6, id: uuid() }
    ],
    rawInput: [
      { input: 26.2, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 26.2, id: uuid() }
    ],
    endRings: [
      { input: 53.1, id: uuid() },
      { input: 10, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x50/44 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 1, id: uuid() },
      { input: 25.6, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
      { input: 45.5, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 45.5, id: uuid() }
    ],
    endRings: [
      { input: 40.8, id: uuid() },
      { input: 3, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x50/25 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 6, id: uuid() },
      { input: 27.6, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    rawInput: [
      { input: 26.2, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 26.2, id: uuid() }
    ],
    endRings: [
      { input: 40.8, id: uuid() },
      { input: 10, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x45/50 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 1, id: uuid() },
      { input: 7, id: uuid() },
      { input: 30.4, id: uuid() },
      { input: 53.1, id: uuid() }
    ],
    rawInput: [
      { input: 51.7, id: uuid() },
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      { input: 51.7, id: uuid() }
    ],
    endRings: [
      { input: 10, id: uuid() },
      { input: 20, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x45/38 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 7, id: uuid() },
      { input: 30.4, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
      { input: 39.4, id: uuid() },
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      { input: 39.4, id: uuid() }
    ],
    endRings: [
      { input: 54.6, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x45/25 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 4, id: uuid() },
      { input: 12, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
      { input: 26.2, id: uuid() },
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      { input: 26.2, id: uuid() }
    ],
    endRings: [
      { input: 37.5, id: uuid() },
      { input: 11, id: uuid() },
      { input: 7, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x45/22 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 2, id: uuid() },
      { input: 80, id: uuid() },
      { input: 37.5, id: uuid() }
    ],
    rawInput: [
      { input: 23.7, id: uuid() },
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      { input: 23.7, id: uuid() }
    ],
    endRings: [
      { input: 40, id: uuid() },
      { input: 3, id: uuid() },
      { input: 15, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x44/50 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 15, id: uuid() },
      { input: 20, id: uuid() },
      { input: 30.4, id: uuid() },
      { input: 27.6, id: uuid() },
    ],
    rawInput: [
      { input: 51.7, id: uuid() },
      { input: 45.5, id: uuid() },
      { input: 45.5, id: uuid() },
      { input: 51.7, id: uuid() }
    ],
    endRings: [
      { input: 40.8, id: uuid() },
      { input: 3, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x44/38 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 12, id: uuid() },
      { input: 12.5, id: uuid() },
      { input: 40, id: uuid() },
      { input: 40.8, id: uuid() },
    ],
    rawInput: [
      { input: 39.4, id: uuid() },
      { input: 45.5, id: uuid() },
      { input: 45.5, id: uuid() },
      { input: 39.4, id: uuid() }
    ],
    endRings: [
      { input: 40.8, id: uuid() },
      { input: 3, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x44/32 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 2.4, id: uuid() },
      { input: 30.4, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    rawInput: [
      { input: 33.2, id: uuid() },
      { input: 45.5, id: uuid() },
      { input: 45.5, id: uuid() },
      { input: 33.2, id: uuid() }
    ],
    endRings: [
      { input: 40.8, id: uuid() },
      { input: 2.2, id: uuid() },
      { input: 7, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x50/32 - 18% - 4.2', id: uuid() },
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
      { input: 33.2, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 33.2, id: uuid() }
    ],
    endRings: [
      { input: 40.8, id: uuid() },
      { input: 3, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '5x38 - 18% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18',
    startRings: [
      { input: 15, id: uuid() },
      { input: 20, id: uuid() }, 
      { input: 54.6, id: uuid() }
    ],
    rawInput: [
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() }
    ],
    endRings: [
      { input: 30.4, id: uuid() },
      { input: 10, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2, 4.2]
  },
  /// *************** 4.2 12% ********************
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
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
      
    ],
    endRings: [
      { input: 27.6, id: uuid() },
      { input: 53.1, id: uuid() },
      
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2]
  },
  {
    type: { name: '2x50 - 12% - 4.2 (52.0)', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '12',
    startRings: [
      { input: 20, id: uuid() },
      { input: 40, id: uuid() },
      { input: 37.5, id: uuid() },
      { input: 44.9, id: uuid() }
    ],
    rawInput: [
      { input: 52, ring: 53.1, shims: 0.3, id: uuid() },
      { input: 52, ring: 53.1, shims: 0.3, id: uuid() },
      
    ],
    endRings: [
      { input: 47.9, id: uuid() },
      { input: 13, id: uuid() },
      { input: 20, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2]
  },
  {
    type: { name: '2x50 - 12% - 4.2 (52.5)', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18-12',
    startRings: [
      { input: 15, id: uuid() },
      { input: 80, id: uuid() },
      { input: 46.9, id: uuid() }
    ],
    rawInput: [
      { input: 52.5, ring: 53.1, shims: 0.8, id: uuid() },
      { input: 52.5, ring: 53.1, shims: 0.8, id: uuid() },
      
    ],
    endRings: [
      { input: 40.8, id: uuid() },
      { input: 27.6, id: uuid() },
      { input: 12, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2]
  },
  {
    type: { name: '2x50 - 12% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '18-12',
    startRings: [
      { input: 5, id: uuid() },
      { input: 20, id: uuid() },
      { input: 37.5, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    rawInput: [
      { input: 53.2, id: uuid() },
      { input: 53.2, id: uuid() },
      
    ],
    endRings: [
      { input: 53.1, id: uuid() },
      { input: 25.6, id: uuid() },
      { input: 1, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2]
  },
  {
    type: { name: '2x45 - 12% - 4.2 (47.5)', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '12',
    startRings: [
      { input: 20, id: uuid() },
      { input: 80, id: uuid() },
      { input: 46.9, id: uuid() }
    ],
    rawInput: [
      { input: 47.5, ring: 47.9, shims: 1, id: uuid() },
      { input: 47.5, ring: 47.9, shims: 1, id: uuid() },
      
    ],
    endRings: [
      { input: 66.4, id: uuid() },
      { input: 4, id: uuid() },
      { input: 15, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2]
  },
  {
    type: { name: '2x45 - 12% - 4.2 (47.0)', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '12',
    startRings: [
      { input: 1, id: uuid() },
      { input: 80, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      
    ],
    endRings: [
      { input: 44.9, id: uuid() },
      { input: 1, id: uuid() },
      { input: 40, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2]
  },
  {
    type: { name: '4x50/22 - 12% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '12',
    startRings: [
      { input: 7, id: uuid() },
      { input: 27.6, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    rawInput: [
      { input: 23.7, id: uuid() },
      { input: 53.2, id: uuid() },
      { input: 53.2, id: uuid() },
      { input: 23.7, id: uuid() },
      
    ],
    endRings: [
      { input: 40.8, id: uuid() },
      { input: 11, id: uuid() },
      
      { input: 78.7, id: uuid() }
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
      { input: 5, id: uuid() },
      { input: 40, id: uuid() },
      { input: 40.8, id: uuid() }
    ],
    rawInput: [
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() }
    ],
    endRings: [
      { input: 66.4, id: uuid() },
      { input: 2, id: uuid() },
      { input: 34.6, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x50 - 12% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '12',
    startRings: [
      { input: 3, id: uuid() },
      { input: 40, id: uuid() },
      { input: 40.8, id: uuid() }
    ],
    rawInput: [
      { input: 53.2, id: uuid() },
      { input: 53.2, id: uuid() },
      { input: 53.2, id: uuid() },
      { input: 53.2, id: uuid() }
    ],
    endRings: [
      { input: 34.6, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '4x30 - 12% - 4.2', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '12',
    startRings: [
    
      { input: 47.9, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    rawInput: [
      { input: 31.8, ring: 30.4, shims: 2.8, id: uuid() },
      { input: 31.8, ring: 30.4, shims: 2.8, id: uuid() },
      { input: 31.8, ring: 30.4, shims: 2.8, id: uuid() },
      { input: 31.8, ring: 30.4, shims: 2.8, id: uuid() },
     
    ],
    endRings: [
      { input: 53.1, id: uuid() },
      { input: 12, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2, 4.2]
  },
  {
    type: { name: '3x50 - 12% - 4.2 (52.2/53.2)', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '12',
    startRings: [
    
      { input: 12, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
      { input: 53.2, id: uuid() },
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
      { input: 53.2, id: uuid() }
      
     
    ],
    endRings: [
      { input: 40, id: uuid() },
      { input: 11.5, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2]
  },
  {
    type: { name: '3x50 - 12% - 4.2 (52.7/53.2)', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '12',
    startRings: [
    
      { input: 1, id: uuid() },
      { input: 12.25, id: uuid() },
      { input: 54.6, id: uuid() },
      { input: 44.9, id: uuid() },
    ],
    rawInput: [
      { input: 53.2, id: uuid() },
      { input: 52.7, ring: 53.1, shims: 1, id: uuid() },
      { input: 53.2, id: uuid() }
      
     
    ],
    endRings: [
      { input: 40, id: uuid() },
      { input: 11.25, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2]
  },
  {
    type: { name: '3x50 - 12% - 4.2 (52.5/53.2)', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '12',
    startRings: [
    
      { input: 20, id: uuid() },
      { input: 11.25, id: uuid() },
      { input: 40.8, id: uuid() },
      { input: 40.8, id: uuid() },
    ],
    rawInput: [
      { input: 53.2, id: uuid() },
      { input: 52.5, ring: 53.1, shims: 0.8, id: uuid() },
      { input: 53.2, id: uuid() }
      
     
    ],
    endRings: [
      { input: 27.6, id: uuid() },
      { input: 12.75, id: uuid() },
      { input: 11, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2]
  },
  {
    type: { name: '3x45 - 12% - 4.2 (47)', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '12',
    startRings: [
    
      { input: 1, id: uuid() },
      { input: 80, id: uuid() },
      { input: 40.8, id: uuid() }
    ],
    rawInput: [
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() },
      { input: 47, ring: 47.9, shims: 0.5, id: uuid() }
      
     
    ],
    endRings: [
      { input: 41.3, id: uuid() },
      { input: 15, id: uuid() },
      { input: 4, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2]
  },
  {
    type: { name: '3x34 - 12% - 4.2 (35.4/35.9)', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '12',
    startRings: [
    
      { input: 20, id: uuid() },
      { input: 40, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    rawInput: [
      { input: 35.9, id: uuid() },
      { input: 35.4, ring: 34.6, shims: 2.2, id: uuid() },
      { input: 35.9, id: uuid() }
      
     
    ],
    endRings: [
      { input: 34.6, id: uuid() },
      { input: 27.6, id: uuid() },
      { input: 15, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2]
  },
  {
    type: { name: '3x34 - 12% - 4.2 (35.6/35.9)', id: uuid() },
    bladType: "2.8 - 4.2",
    bladeThickness: ['2.8'],
    sagSnitt: ['4.2'],
    percent: '12',
    startRings: [
    
      { input: 4, id: uuid() },
      { input: 20, id: uuid() },
      { input: 80, id: uuid() },
      { input: 34.6, id: uuid() }
    ],
    rawInput: [
      { input: 35.9, id: uuid() },
      { input: 35.6, id: uuid() },
      { input: 35.9, id: uuid() }
      
     
    ],
    endRings: [
      { input: 53.1, id: uuid() },
      { input: 12, id: uuid() },
      { input: 12, id: uuid() },
      { input: 78.7, id: uuid() }
    ],
    sagsnitt: [4.2, 4.2, 4.2]
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
      { input: 46.9, id: uuid() },
      { input: 3, id: uuid() },
      { input: 78.7, id: uuid() }
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
      { input: 53.1, id: uuid() },
      { input: 10, id: uuid() },
      { input: 78.7, id: uuid() }
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
      { input: 27.6, id: uuid() },
      { input: 15, id: uuid() },
      { input: 4, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 78.7, id: uuid() },
    ],
    sagsnitt: [4.2, 4.2]
  },

 //**************** 4.4 18% *******************/

  {
    type: { name: '4x50 - 18% - 4.4', id: uuid() },
    bladType: "3.0 - 4.4",
    bladeThickness: ['3.0'],
    sagSnitt: ['4.4'],
    percent: '18',
    startRings: [
      { input: 3, id: uuid() },
      { input: 5, id: uuid() },
      { input: 30.4, id: uuid() },
      { input: 47.9, id: uuid() }
    ],
    rawInput: [
      
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() }
    ],
    endRings: [
      { input: 30.4, id: uuid() },
      { input: 20, id: uuid() },
      { input: 53.1, id: uuid() },
     
    ],
    sagsnitt: [4.4, 4.4, 4.4, 4.4]
  },
  {
    type: { name: '4x50/32 - 18% - 4.4', id: uuid() },
    bladType: "3.0 - 4.4",
    bladeThickness: ['3.0'],
    sagSnitt: ['4.4'],
    percent: '18',
    startRings: [
      { input: 3, id: uuid() },
      { input: 5, id: uuid() },
      { input: 30.4, id: uuid() },
      { input: 66.4, id: uuid() }
    ],
    rawInput: [
      
      { input: 33.2, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 33.2, id: uuid() }
    ],
    endRings: [
      { input: 54.6, id: uuid() },
      { input: 1, id: uuid() },
      { input: 66.4, id: uuid() },
     
    ],
    sagsnitt: [4.4, 4.4, 4.4, 4.4]
  },
  {
    type: { name: '4x44/32 - 18% - 4.4', id: uuid() },
    bladType: "3.0 - 4.4",
    bladeThickness: ['3.0'],
    sagSnitt: ['4.4'],
    percent: '18',
    startRings: [
      { input: 1, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 40.8, id: uuid() }
    ],
    rawInput: [
      
      { input: 33.2, id: uuid() },
      { input: 45.5, id: uuid() },
      { input: 45.5, id: uuid() },
      { input: 33.2, id: uuid() }
    ],
    endRings: [
      { input: 37.5, id: uuid() },
      { input: 12, id: uuid() },
      { input: 78.7, id: uuid() },
     
    ],
    sagsnitt: [4.4, 4.4, 4.4, 4.4]
  },
  //**************** 4.6 18% *******************/
  {
    type: { name: '4x40/50 - 18% - 4.6', id: uuid() },
    bladType: "3.2 - 4.6",
    bladeThickness: ['3.2'],
    sagSnitt: ['4.6'],
    percent: '18',
    startRings: [
      { input: 41.3, id: uuid() },
     
      { input: 54.6, id: uuid() }
    ],
    rawInput: [
      
      { input: 51.7, id: uuid() },
      { input: 41.6, ring: 40.8, shims: 2.2, id: uuid() },
      { input: 41.6, ring: 40.8, shims: 2.2, id: uuid() },
      { input: 51.7, id: uuid() }
    ],
    endRings: [
      { input: 30.4, id: uuid() },
      { input: 4, id: uuid() },
      { input: 78.7, id: uuid() },
      
    ],
    sagsnitt: [4.6, 4.6, 4.6, 4.6]
  },
  {
    type: { name: '4x38 - 18% - 4.6', id: uuid() },
    bladType: "3.2 - 4.6",
    bladeThickness: ['3.2'],
    sagSnitt: ['4.6'],
    percent: '18',
    startRings: [
      { input: 15, id: uuid() },
      { input: 20, id: uuid() },
      { input: 34.6, id: uuid() },
      { input: 40.8, id: uuid() }
    ],
    rawInput: [
      
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() }
    ],
    endRings: [
      { input: 46.9, id: uuid() },
      { input: 2, id: uuid() },
      { input: 78.7, id: uuid() },
      
    ],
    sagsnitt: [4.6, 4.6, 4.6, 4.6]
  },
  {
    type: { name: '5x50 - 18% - 4.6', id: uuid() },
    bladType: "3.2 - 4.6",
    bladeThickness: ['3.2'],
    sagSnitt: ['4.6'],
    percent: '18',
    startRings: [
      { input: 10.75, id: uuid() },
      { input: 46.9, id: uuid() }
    ],
    rawInput: [
      
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() },
      { input: 51.7, id: uuid() }
    ],
    endRings: [
      { input: 25.6, id: uuid() },
      { input: 11.75, id: uuid() },
      { input: 37.5, id: uuid() },
      
    ],
    sagsnitt: [4.6, 4.6, 4.6, 4.6, 4.6]
  },

  /************** 3.2 - 4.6 12% *******************/
  {
    type: { name: '4x46 - 12% - 4.6', id: uuid() },
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
      
      { input: 48, ring: 47.9, shims: 1.5, id: uuid() },
      { input: 48, ring: 47.9, shims: 1.5, id: uuid() },
      { input: 48, ring: 47.9, shims: 1.5, id: uuid() },
      { input: 48, ring: 47.9, shims: 1.5, id: uuid() }
    ],
    endRings: [
      { input: 30.4, id: uuid() },
      { input: 80, id: uuid() }
    ],
    sagsnitt: [4.6, 4.6, 4.6, 4.6]
  },
  {
    type: { name: '4x50 - 12% - 4.6 (52.2/53.2)', id: uuid() },
    bladType: "3.2 - 4.6",
    bladeThickness: ['3.2'],
    sagSnitt: ['4.6'],
    percent: '12',
    startRings: [
      { input: 3, id: uuid() },
      { input: 40, id: uuid() },
      { input: 40.8, id: uuid() }
    ],
    rawInput: [
      
      { input: 53.2, id: uuid() },
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
      { input: 52.2, ring: 53.1, shims: 0.5, id: uuid() },
      { input: 53.2, id: uuid() }
    ],
    endRings: [
      { input: 34.6, id: uuid() },
      { input: 66.4, id: uuid() }
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
      { input: 52.5, ring: 53.1, shims: 0.8, id: uuid() },
      { input: 52.5, ring: 53.1, shims: 0.8, id: uuid() },
      { input: 53.2, id: uuid() }
    ],
    endRings: [
      { input: 78.7, id: uuid() },
      { input: 2, id: uuid() },
      { input: 20, id: uuid() }
    ],
    sagsnitt: [4.6, 4.6, 4.6, 4.6]
  }
]);

export default DataPost;
