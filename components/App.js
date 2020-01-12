import React, { useState, useEffect } from 'react';
import Hylse from './hylse/hylse';
import SideBar from './sidebar/Sidebar';
import RawInput from './input-components/RawInput';
import DimensionRings from './dimension-rings/DimensionRing';
import uuid from 'uuid/v4';
import StartRingInput from './input-components/StartRingInput';
import DistanceRing from './distance-rings/DistanceRing';
import EndRingInput from './input-components/EndRingInput';
import StartLabel from './labels/StartLabel';
import BladeThickChooser from './bladeThicknessCooser/BladeThickChooser';
import RingList from './ringList/RingList';
import RawList from './ringList/RawList';

const App = () => {
  const [openRingList, setOpenRingList] = useState('ring-list-container hide-ring-list')
  const [openRawList, setOpenRawList] = useState('raw-list-container hide-raw-list')
  /*********************** Blade **************************/
  const [bladeThickness, setBladeThickness] = useState(2.8);
  const [sagSnitt, setSagSnitt] = useState(4.2);
  const [sagSnittSum, setSagSnittSum] = useState([0]);
  const [sagSnittSumCalculated, setSagSnittSumCalculated] = useState([]);
  const vigg = 0.7;
  const viggDouble = 1.4;
  const [openBladeThicknessChooser, setOpenBladeThicknessChooser] = useState(false)

  /************************ Start Rings **********************/

  const [dimensionRingAddition, setDimensionRingAddition] = useState('');

  const lengthStartAxlCalc = () => {
    setDimensionRingAddition(
      rawInputData.reduce(
        (prevInput, input) => Number(prevInput) + Number(input)
      )
    );
  };

  /*********************** startRing input ***********************/

  const [startRingInput, setStartRingInput] = useState('');
  const [startRingInputData, setStartRingInputData] = useState([]);
  const [startRingsumForLabel, setStartRingsumForLabel] = useState([]);

  const outerRings = 'distance-ring outer-distance-ring outer-startring';

  const getStartRingInput = e => {
    setStartRingInput(e.target.value);
  };
  const startRingInputSubmit = e => {
    e.preventDefault();
    setStartRingInputData([
      ...startRingInputData,
      { input: startRingInput, id: uuid() }
    ]);

    setStartRingInput('');
  };
  /*********************** Raw input ***********************/

  const [rawInput, setRawInput] = useState('');
  const [rawInputData, setRawInputData] = useState([]);
  const [rawInputDataSum, setRawInputDataSum] = useState();
  const [rawInputDataSumForLabel, setRawInputDataSumForLabel] = useState(['']);
  const innerRing = 'distance-ring inner-distance-ring';

  const getRawInput = evt => {
    setRawInput(evt.target.value);
  };
  const rawInputDataSubmit = evt => {
    evt.preventDefault();
    if (rawInputData.length > 7) {
      alert('Antall plank er på maks 8 stk');
    } else {
      setRawInputData([...rawInputData, { input: rawInput, id: uuid() }]);
      setSagSnittSum([...sagSnittSum, sagSnitt]);
      setRawInput('');
    }
  };
  useEffect(() => {
    if (startRingInputData.length > 0) {
      setStartRingsumForLabel(
        startRingInputData.reduce((num, { input }) => Number(num) + Number(input), 0));
    }
  });
  useEffect(() => {
    if(endRingInputData.length > 0) { 
    setEndRingInputForLabel(endRingInputData.reduce((num, {input}) => Number(num) + Number(input), 0));
    console.log('endIputSum: ' + endRingInputForLabel);
    }
  })

  useEffect(() => {
    const calculations =
      Number(rawInputDataSum) + Number(sagSnittSumCalculated);
    const finalCalcLabel = calculations / 2;

    if (rawInputData.length > 0 || startRingInputData.length > 0 || endRingInput.length > 0) {
      setRawInputDataSum(
        rawInputData.reduce((num, { input }) => Number(num) + Number(input), 0)
      );
      setRawInputDataSumForLabel(finalCalcLabel);

      setSagSnittSumCalculated(sagSnittSum.reduce((num1, num2) => num1 + num2));
      setStartLabel(200 - startRingsumForLabel - finalCalcLabel);
      setEndLabel(217.2 - endRingInputForLabel - finalCalcLabel);
    }
    console.log(finalCalcLabel);
  });

  useEffect(() => {
    if (startInputWindow === true || endInputWindow === true) {
      setOpenRingList('ring-list-container show-ring-list')
    } else {
      setOpenRingList('ring-list-container hide-ring-list')
    }

 
  
  
  })
  useEffect(() => {
   if (rawInputWindow) {
     setOpenRawList('raw-list-container show-raw-list')
   } else {
     setOpenRawList('raw-list-container hide-raw-list')
   }
  })

  /*********************** EndRing input ***********************/
  const [endRingInput, setEndRingInput] = useState('');
  const [endRingInputData, setEndRingInputData] = useState([]);
  const [endRingInputForLabel, setEndRingInputForLabel] = useState([0])

  const outerRingsEnd = 'distance-ring outer-distance-ring outer-endRing';

  const getEndRingInput = e => {
    setEndRingInput(e.target.value);
  };
  const endRingInputSubmit = e => {
    e.preventDefault();
    setEndRingInputData([
      ...endRingInputData,
      { input: endRingInput, id: uuid() }
    ]);
    setEndRingInput('');
  };

  /*********************** Labels ***********************/
  const [startLabel, setStartLabel] = useState(200);
  const [endLabel, setEndLabel] = useState(217.2);

  /*********************** SawBlade thickness ***********************/
    const blade1 = () => {
      setBladeThickness(2.2)
      setSagSnitt(3.6)
      setOpenBladeThicknessChooser(false)
    }
    const blade2 = () => {
      setBladeThickness(2.4)
      setSagSnitt(3.8)
      setOpenBladeThicknessChooser(false)
    }
    const blade3 = () => {
      setBladeThickness(2.6)
      setSagSnitt(4.0)
      setOpenBladeThicknessChooser(false)
    }
    const blade4 = () => {
      setBladeThickness(2.8)
      setSagSnitt(4.2)
      setOpenBladeThicknessChooser(false)
    }
    const blade5 = () => {
      setBladeThickness(3.0)
      setSagSnitt(4.4)
      setOpenBladeThicknessChooser(false)
    }
    const blade6 = () => {
      setBladeThickness(3.2)
      setSagSnitt(4.6)
      setOpenBladeThicknessChooser(false)
    }
  /*********************** Open and Close ***********************/
  const [sidebar, setSidebar] = useState(false);
  const [rawInputWindow, setRawInputWindow] = useState(false);
  const [startInputWindow, setStartInputWindow] = useState(false);
  const [endInputWindow, setEndInputWindow] = useState(false);

  const openCloseStartInputWindow = () => {
    setStartInputWindow(!startInputWindow);
    setRawInputWindow(false);
    setEndInputWindow(false);
    
  };
  const openCloseRawInputWindow = () => {
    setRawInputWindow(!rawInputWindow);
    setStartInputWindow(false);
    setEndInputWindow(false);
    setOpenRingList('ring-list-container hide-ring-list')
  };
  const openCloseEndInputWindow = () => {
    setEndInputWindow(!endInputWindow);
    setStartInputWindow(false);
    setRawInputWindow(false);
    
  };
  const openCloseBladeThicknessChooser = () => {
    setOpenBladeThicknessChooser(!openBladeThicknessChooser)
  }
  const testPost = () => {
    setStartRingInputData([
      { input: 1, id: uuid() },
      { input: 5, id: uuid() },
      { input: 40, id: uuid() },
      { input: 53.1, id: uuid() }
    ]);
    setEndRingInputData([
      { input: 66.4, id: uuid() },
      { input: 44.9, id: uuid() },
      { input: 10, id: uuid() },
      { input: 78.7, id: uuid() }
    ]);
    setRawInputData([
      { input: 51.7, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 51.7, id: uuid() }
    ]);
  };
  const masterDelete = () => {
    setStartRingInputData([]);
    setEndRingInputData([]);
    setRawInputData([]);
    setEndLabel(217.2);
    setStartLabel(200);
    setRawInputDataSum([0]);
    setRawInputDataSumForLabel([0]);
    setStartRingsumForLabel([0]);
    setSagSnittSumCalculated([0]);
    setSagSnittSum([0]);
  };
  

  return (
    <div className="app-container">
      <button
        onClick={() => setSidebar(!sidebar)}
        className="open-close-menu-btn"
      >
        {sidebar ? 'Lukk' : 'Åpne'}
      </button>
      
      <RingList openRingList={openRingList}/>
      <RawList openRawList={openRawList}/>
     
      {sidebar && (
        <SideBar
          openCloseRawInputWindow={openCloseRawInputWindow}
          openCloseStartInputWindow={openCloseStartInputWindow}
          openCloseEndInputWindow={openCloseEndInputWindow}
          masterDelete={masterDelete}
          testPost={testPost}
        />
      )}
      {startInputWindow && (
        <StartRingInput
          inputData={startRingInput}
          inputDataOnChange={getStartRingInput}
          submit={startRingInputSubmit}
          value={startRingInput}
        />
      )}
      {rawInputWindow && (
        <RawInput
          rawInputWindow={rawInput}
          getRawInput={getRawInput}
          rawInputDataSubmit={rawInputDataSubmit}
          value={rawInput}
        />
      )}
      {openBladeThicknessChooser &&
      <BladeThickChooser 
        blade1={blade1}
        blade2={blade2}
        blade3={blade3}
        blade4={blade4}
        blade5={blade5}
        blade6={blade6}
      />}

      {endInputWindow && (
        <EndRingInput
          inputData={endRingInput}
          inputDataOnChange={getEndRingInput}
          submit={endRingInputSubmit}
          value={endRingInput}
        />
      )}

      <div className="ring-component-container">
        <Hylse
          startLabel={(startLabel - bladeThickness / 2).toFixed(2)}
          endLabel={(endLabel - 1.4).toFixed(2)}
        />

        {startRingInputData.map(startRing => (
          <DistanceRing
            key={startRing.id}
            ringStyle={outerRings}
            ringValue={startRing.input}
          />
        ))}

        <div onClick={openCloseBladeThicknessChooser} className="blade">
          <div className="blade-thickness-top">{bladeThickness}</div>
          <div className="blade-thickness-bottom">{bladeThickness}</div>
        </div>

        {rawInputData.map(rawInputrings => (
          <DimensionRings
            key={rawInputrings.id}
            ringStyle={innerRing}
            bladeThickness={bladeThickness}
            ringValue={(Number(rawInputrings.input) + Number(vigg) * 2).toFixed(
              2
            )}
            rawValue={rawInputrings.input}
            openBladeThicknessChooser={openCloseBladeThicknessChooser}
          />
        ))}

        {endRingInputData.map(endRing => (
          <DistanceRing
            key={endRing.id}
            ringStyle={outerRingsEnd}
            ringValue={endRing.input}
          />
        ))}
      </div>

      {/*  <h1 style={{ color: 'white' }}>{lengthStartAxl}</h1>
      <h1 style={{ color: 'white' }}>{dimensionRingAddition}</h1> */}

      <style global jsx>{`
        .ring-component-container {
          display: flex;
          align-items: center;
          width: 100vw;
          justify-content: center;
          position: relative;

          margin: 100px 0;
        }
        .open-close-menu-btn {
          height: 3rem;
          width: 7vw;
          position: absolute;
          left: 2rem;
          bottom: 4rem;
          outline: none;
          border-radius: 10px;
          background-color: lightblue;
          font-size: 15px;
          color: rgb(42, 42, 83);
          z-index: 110;
        }
        .app-container {
          height: 100vh;
          display: flex;
          align-items: center;
        }

        .blade-supercontainer {
          display: inline-block;
        }
        .blade-container {
          position: relative;
          display: flex;
          align-items: center;
          color: var(--darker-bright);
        }
        .blade {
          height: 25rem;
          width: 0.4rem;
          background-color: var(--darker-bright);
          position: relative;
          cursor: pointer;
        }
        .blade-thickness-top {
          position: absolute;
          bottom: 25.2rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--darker-bright);
        }
        .blade-thickness-bottom {
          position: absolute;
          top: 25.2rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--darker-bright);
        }

        .raw-input-label {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0rem;
          border: 1px solid white;
          padding: 0.2rem;
          border-radius: 5px;
          color: white;
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default App;
