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
  /*********************** CSS Variables **************************/
  const [openRingList, setOpenRingList] = useState(
    'ring-list-container hide-ring-list'
  );
  const [openRawList, setOpenRawList] = useState(
    'raw-list-container hide-raw-list'
  );

  const [hideRawInputComponent, setHideRawInputComponent] = useState('');
  const [hideStartInputComponent, setHideStartInputComponent] = useState('');

  const [hideEndInputComponent, setHideEndInputComponent] = useState('');

  const [correctLabel, setCorrectLabel] = useState('');
  const [correctLabel2, setCorrectLabel2] = useState('');
  /**** Animation ****/

  const [bladeDelete, setBladeDelete] = useState('');
  const [ringDelete, setRingDelete] = useState('');
  const [startRingDelete, setStartRingDelete] = useState('');
  const [endRingDelete, setEndRingDelete] = useState('');

  /*********************** Blade **************************/
  const [bladeThickness, setBladeThickness] = useState(2.8);
  const [sagSnitt, setSagSnitt] = useState(4.2);
  const [sagSnittSum, setSagSnittSum] = useState([0]);
  const [sagSnittSumCalculated, setSagSnittSumCalculated] = useState([]);
  const vigg = 0.7;

  const [openBladeThicknessChooser, setOpenBladeThicknessChooser] = useState(
    false
  );

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
    } else if(rawInput === '') {
        alert('Du må skrive inn en verdi')
    } else {
      setRawInputData([...rawInputData, { input: rawInput, id: uuid() }]);
      setSagSnittSum([...sagSnittSum, sagSnitt]);
      setRawInput('');
    }
  };
  /************************** Lifecycle **********************/

  useEffect(() => {
    if (startRingInputData.length > 0) {
      setStartRingsumForLabel(
        startRingInputData.reduce(
          (num, { input }) => Number(num) + Number(input),
          0
        )
      );
    }
  });
  useEffect(() => {
    if (endRingInputData.length > 0) {
      setEndRingInputForLabel(
        endRingInputData.reduce(
          (num, { input }) => Number(num) + Number(input),
          0
        )
      );
    }
  });

  useEffect(() => {
    const calculations =
      Number(rawInputDataSum) + Number(sagSnittSumCalculated);
    const finalCalcLabel = calculations / 2;

    if (
      rawInputData.length > 0 ||
      startRingInputData.length > 0 ||
      endRingInput.length > 0
    ) {
      setRawInputDataSum(
        rawInputData.reduce((num, { input }) => Number(num) + Number(input), 0)
      );
      setRawInputDataSumForLabel(finalCalcLabel);

      setSagSnittSumCalculated(sagSnittSum.reduce((num1, num2) => num1 + num2));
      setStartLabel((200 - startRingsumForLabel - finalCalcLabel).toFixed(2));
      setEndLabel((217.2 - endRingInputForLabel - finalCalcLabel).toFixed(2));
    }
  });

  useEffect(() => {
    if (startInputWindow === true) {
      setOpenRingList('ring-list-container show-ring-list');
      setHideStartInputComponent('show-input-component');
    } else {
      setOpenRingList('ring-list-container hide-ring-list');
      setHideStartInputComponent('hide-input-component');
    }
  });
  useEffect(() => {
    if (rawInputWindow) {
      setOpenRawList('raw-list-container show-raw-list');
      setHideRawInputComponent('show-input-component');
    } else {
      setOpenRawList('raw-list-container hide-raw-list');
      setHideRawInputComponent('hide-input-component');
    }
  });
  useEffect(() => {
    if(endInputWindow) {
      setHideEndInputComponent('show-input-component')
      setOpenRingList('ring-list-container show-ring-list')
    } else {
      setHideEndInputComponent('hide-input-component')
      
    }
  })

  useEffect(() => {
    const endLabelCalc = Number(sagSnitt) + Number(endLabel);
    if (endLabelCalc <= 5.65 && endLabelCalc >= 5.55) {
      setCorrectLabel('label-container-correct');
    } else {
      setCorrectLabel('');
    }
    const startLabelCalc = Number(sagSnitt) + Number(startLabel);

    if (startLabelCalc <= 5.65 && startLabelCalc >= 5.55) {
      setCorrectLabel2('label-container-correct2');
    } else {
      setCorrectLabel2('');
    }
  });

  /*********************** EndRing input ***********************/
  const [endRingInput, setEndRingInput] = useState('');
  const [endRingInputData, setEndRingInputData] = useState([]);
  const [endRingInputForLabel, setEndRingInputForLabel] = useState([0]);

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
    setBladeThickness(2.2);
    setSagSnitt(3.6);
    setOpenBladeThicknessChooser(false);
  };
  const blade2 = () => {
    setBladeThickness(2.4);
    setSagSnitt(3.8);
    setOpenBladeThicknessChooser(false);
  };
  const blade3 = () => {
    setBladeThickness(2.6);
    setSagSnitt(4.0);
    setOpenBladeThicknessChooser(false);
  };
  const blade4 = () => {
    setBladeThickness(2.8);
    setSagSnitt(4.2);
    setOpenBladeThicknessChooser(false);
  };
  const blade5 = () => {
    setBladeThickness(3.0);
    setSagSnitt(4.4);
    setOpenBladeThicknessChooser(false);
  };
  const blade6 = () => {
    setBladeThickness(3.2);
    setSagSnitt(4.6);
    setOpenBladeThicknessChooser(false);
  };
  /*********************** Numbers from ring list ***********************/
  const getNumbersFromList = digits => {
    if (startInputWindow) {
      setStartRingInputData([
        ...startRingInputData,
        { input: digits, id: uuid() }
      ]);
    } else if (endInputWindow) {
      setEndRingInputData([...endRingInputData, { input: digits, id: uuid() }]);
    }
  };
  /*********************** Numbers from raw list ***********************/

  const getNumbersFromRawList = digit => {
    if (rawInputData.length > 7) {
      alert('Du kan ikke legge inn fler enn 8 plank');
    } else {
      setRawInputData([...rawInputData, { input: digit, id: uuid() }]);
      setSagSnittSum([...sagSnittSum, sagSnitt]);
      setRawInput('');
    }
  };

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
    ;
  };
  const openCloseEndInputWindow = () => {
    setEndInputWindow(!endInputWindow);
    setStartInputWindow(false);
    setRawInputWindow(false);
    
  };
  const openCloseBladeThicknessChooser = () => {
    setOpenBladeThicknessChooser(!openBladeThicknessChooser);
  };
  const testPost = () => {
    setStartRingInputData([
      { input: 1, id: uuid() },
      { input: 5, id: uuid() },
      { input: 40, id: uuid() },
      { input: 53.1, id: uuid() }
    ]);
    setEndRingInputData([
      { input: 40.8, id: uuid() },
      { input: 46.9, id: uuid() },
      { input: 1, id: uuid() },
      { input: 27.6, id: uuid() }
    ]);
    setRawInputData([
      { input: 51.7, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 39.4, id: uuid() },
      { input: 51.7, id: uuid() }
    ]);
    setSagSnittSum([4.2, 4.2, 4.2, 4.2]);
  };

  /*********************** Delete ***********************/
  const masterDelete = () => {
    setBladeDelete('blade-delete');
    setRingDelete('ring-delete');
    setStartRingDelete('start-delete');
    setEndRingDelete('end-delete');

    setTimeout(() => {
      setStartRingInputData([]);
      setEndRingInputData([]);
      setRawInputData([]);
      setRawInputDataSum([0]);
      setRawInputDataSumForLabel([0]);
      setStartRingsumForLabel([0]);
      setSagSnittSumCalculated([0]);
      setSagSnittSum([0]);
      setEndLabel([]);
      setEndRingInputData([]);
      setEndRingInputForLabel([0]);
      setEndLabel(217.2);
      setStartLabel(200);
      setBladeDelete('');
      setRingDelete('');
      setStartRingDelete('');
      setEndRingDelete('');
    }, 1000);
  };
  const allStartRingDelete = () => {
    setStartRingDelete('start-delete');
    setTimeout(() => {
      setStartRingInputData([]);
      setStartRingsumForLabel([0]);
      setStartRingDelete('');
    }, 1000);
  };
  const allRawInputDelete = () => {
    setBladeDelete('blade-delete');
    setRingDelete('ring-delete');
    setTimeout(() => {
      setRawInputData([]);
      setRawInputDataSum([0]);
      setRawInputDataSumForLabel([0]);
      setStartRingsumForLabel([0]);
      setSagSnittSumCalculated([0]);
      setSagSnittSum([0]);
      setEndLabel(217.2);
      setStartLabel(200);
      setBladeDelete('');
      setRingDelete('');
    }, 1000);
  };
  const allEndRingDelete = () => {
    setEndRingDelete('end-delete');
    setTimeout(() => {
      setEndRingInputData([]);
      setEndRingInputForLabel([0]);
      setEndRingDelete('');
    }, 1000);
  };

  return (
    <div className="app-container">
      <button
        onClick={() => setSidebar(!sidebar)}
        className="open-close-menu-btn"
      >
        {sidebar ? 'Lukk' : 'Åpne'}
      </button>

      <RingList openRingList={openRingList} getRings={getNumbersFromList} />
      <RawList openRawList={openRawList} getRaw={getNumbersFromRawList} />

      {sidebar && (
        <SideBar
          openCloseRawInputWindow={openCloseRawInputWindow}
          openCloseStartInputWindow={openCloseStartInputWindow}
          openCloseEndInputWindow={openCloseEndInputWindow}
          masterDelete={masterDelete}
          testPost={testPost}
        />
      )}

      <StartRingInput
        inputData={startRingInput}
        inputDataOnChange={getStartRingInput}
        submit={startRingInputSubmit}
        value={startRingInput}
        allStartRingDelete={allStartRingDelete}
        openCloseStartInputWindow={openCloseStartInputWindow}
        hideStartInputComponent={hideStartInputComponent}
      />

      <RawInput
        rawInputWindow={rawInput}
        getRawInput={getRawInput}
        rawInputDataSubmit={rawInputDataSubmit}
        value={rawInput}
        allRawInputDelete={allRawInputDelete}
        openCloseRawInputWindow={openCloseRawInputWindow}
        hideRawInputComponent={hideRawInputComponent}
      />

      {openBladeThicknessChooser && (
        <BladeThickChooser
          blade1={blade1}
          blade2={blade2}
          blade3={blade3}
          blade4={blade4}
          blade5={blade5}
          blade6={blade6}
        />
      )}

      <EndRingInput
        inputData={endRingInput}
        inputDataOnChange={getEndRingInput}
        submit={endRingInputSubmit}
        value={endRingInput}
        allEndRingDelete={allEndRingDelete}
        openCloseEndInputWindow={openCloseEndInputWindow}
        hideEndInputComponent={hideEndInputComponent}
      />

      <div className="ring-component-container">
        <Hylse
          startLabel={(startLabel - bladeThickness / 2).toFixed(2)}
          endLabel={(endLabel - bladeThickness / 2).toFixed(2)}
          correctLabel={correctLabel}
          correctLabel2={correctLabel2}
        />

        {startRingInputData.map(startRing => (
          <DistanceRing
            key={startRing.id}
            ringStyle={outerRings}
            ringValue={startRing.input}
            startRingDelete={startRingDelete}
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
            bladeDeleteAnimate={bladeDelete}
            deleteRing={ringDelete}
          />
        ))}

        {endRingInputData.map(endRing => (
          <DistanceRing
            key={endRing.id}
            ringStyle={outerRingsEnd}
            ringValue={endRing.input}
            endRingDelete={endRingDelete}
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
          border-radius: 5px;
          background-color: lightblue;
          font-size: 15px;
          color: rgb(42, 42, 83);
          z-index: 110;
          border: none;
          transition: .5s
        }
        .open-close-menu-btn:hover {
          background: #00CED1
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
          background-color: yellow;
          position: relative;
          cursor: pointer;
        }
        .blade-thickness-top {
          position: absolute;
          bottom: 25.2rem;
          left: 50%;
          transform: translateX(-50%);
          color: yellow;
        }
        .blade-thickness-bottom {
          position: absolute;
          top: 25.2rem;
          left: 50%;
          transform: translateX(-50%);
          color: yellow;
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
