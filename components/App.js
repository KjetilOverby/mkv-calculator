import React, { useState, useEffect, useContext, createContext } from 'react';
import Hylse2 from './hylse/hylse2';
import Hylse from './hylse/hylse';
import Hylse3 from './hylse/hylse3';
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
import Modal from './modal/Modal';
import TooMany from './modal/TooMany';
import WriteValue from './modal/WriteValue';
import TooHigh from './modal/TooHigh';
import TooLow from './modal/TooLow';
import Settings from './settings/settings';
import SearchPostInput from './input-components/SearchPostInput';
import SearchList from './ringList/SearchList';
import DataPost from '../PostArkiv';
import TypeDisplay from './TypeDisplay/TypeDisplay';
import postArkiv40 from '../poster/postArkiv4.0';
import SearchFilterPostInput from './input-components/SearchFilterPostInput';
import ShimsCalculator from './shims-calculator/ShimsCalculator';

const App = props => {
  /*********************** CSS Variables **************************/
  const [deleteTransition, setDeleteTransition] = useState('');
  const [openRingList, setOpenRingList] = useState(
    'ring-list-container hide-ring-list'
  );
  const [openRawList, setOpenRawList] = useState(
    'raw-list-container hide-raw-list'
  );
  const [openSearchList, setOpenSearchList] = useState(
    'search-post-container hide-search-list'
  );

  const [hideSettings, setHideSettings] = useState('');

  const [hideSearchPostInput, setHideSearchPostInput] = useState('');
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
  const [BladeThicknessHalf, setBladeThicknessHalf] = useState(bladeThickness / 2)
  const [bladeThicknesSum, setBladeThicknesSum] = useState([bladeThickness]);

  const [sagSnitt, setSagSnitt] = useState(4.2);

  const [sagSnittSum, setSagSnittSum] = useState([0]);
  const [sagSnittSumCalculated, setSagSnittSumCalculated] = useState([0]);
  const vigg = 0.7;

  const [openBladeThicknessChooser, setOpenBladeThicknessChooser] = useState(
    false
  );
 
 




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
    if (startRingInput > 80) {
      setTooHighModal(true);
    } else if (startRingInput === '') {
      setWriteValModal(true);
    } else {
      setStartRingInputData([
        ...startRingInputData,
        { input: startRingInput, id: uuid() }
      ]);
      setSagSnittSum([...sagSnittSum, sagSnitt]);
     

      setStartRingInput('');
      setPostIndex();
    }
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
      setModalOpen(true);
    } else if (rawInput === '') {
      setWriteValModal(true);
    } else if (rawInput > 120) {
      setTooHighModal(true);
    } else if (rawInput < 20) {
      setTooLowModal(true);
    } else {
      setRawInputData([...rawInputData, { input: rawInput, id: uuid() }]);
     
      setRawInput('');
      setPostIndex();
    }
  };

  /************************** Lifecycle **********************/

  useEffect(() => {
    //setStartRingInputData([]);
    setEndRingInputData([]);
    setRawInputData([]);
    //setRawInputDataSum([0]);
    //setRawInputDataSumForLabel([0]);
    //setStartRingsumForLabel([0]);
    //setSagSnittSumCalculated([0]);
    //setSagSnittSum([0]);
    setEndLabel([]);
    setEndRingInputData([]);
    //setEndRingInputForLabel([0]);
    //setEndLabel(217.2);
    //setStartLabel(200);
    setBladeDelete('');
    setRingDelete('');
    setStartRingDelete('');
    setEndRingDelete('');
    setDeleteTransition('');
    //setSagSnittSum([sagSnitt]);
    setHideSettings('hide-settings');
   
  }, []);

  const [finalCalcLabel, setFinalCalcLabel] = useState('');
  useEffect(() => {
    setStartLabelStatic(startRingsumForLabel);
  });
 


  /***************Start ring sum calculations *******************/
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

  /*******************Sagsnitt sum calculations *******************/
  useEffect(() => {
   
    setRawInputDataSum(
      rawInputData.reduce((num, { input }) => Number(num) + Number(input), 0)
    );
    
    setSagSnittSum([...sagSnittSum, sagSnitt]);
    setSagSnittSumCalculated(sagSnittSum.reduce((num1, num2) => num1 + num2));
    
    
  }, [rawInputData])

  
  
 


  /***************** Set labels **********************/


  const [fillValueStartStatic, setFillValueStartStatic] = useState()
  const [fillEndValueStatic, setFillEndValueStatic] = useState()
 

  useEffect(() => {
    const dividedBladeThickness = bladeThickness/2
    const ringValue = rawInputDataSum + sagSnittSumCalculated
    const minusOnStartLabel = (ringValue) / 2;
    

    const BladesAndRawRingSum = Number(ringValue) + Number(bladeThickness)
    const BladesAndRawRingSumDivided = BladesAndRawRingSum / 2

   
    
    const singleBlade = (bladeThickness + 1.4)
    const restBlades = rawInputData.length * singleBlade
   const valueBetweenBlades = Number(rawInputDataSum) + Number(restBlades) + Number(singleBlade)
   const valueBetweenBladesDivided = valueBetweenBlades / 2


   const fillValueStart = 200 - valueBetweenBladesDivided + .7;
   const fillValueStartSaved = 200 - (minusOnStartLabel + dividedBladeThickness).toFixed(2);
   
   const fillValueEnd = 217.2 - valueBetweenBladesDivided + .7;
   const fillValueEndSaved = 217.2 - (minusOnStartLabel + dividedBladeThickness).toFixed(2);

   const calcForSavedPostFirst = fillValueStartSaved <= startRingsumForLabel

if(calcForSavedPostFirst) {
    setStartLabel(0)
    setFillValueStartStatic(fillValueStartSaved.toFixed(2))
} else  {
  setStartLabel((fillValueStart - startRingsumForLabel).toFixed(2));
  setFillValueStartStatic(fillValueStart.toFixed(2))
} 
  
  


   if(fillValueEndSaved <= endRingInputForLabel ) {
     setEndLabel(0)
     setFillEndValueStatic(fillValueEndSaved.toFixed(2))
   } else {
    setEndLabel((fillValueEnd - endRingInputForLabel).toFixed(2));
    setFillEndValueStatic(fillValueEnd.toFixed(2))
   }

   
  

 
  });

 
  
  

  useEffect(() => {
   

    if (sagSnittSum.length > 0) {
      setSagSnittSumCalculated(sagSnittSum.reduce((num1, num2) => num1 + num2));
    }
    setSagSnittSum([0]);
  }, [sagSnitt]);
/************* Labels rawInput ********************/

const [xInput, setxInput] = useState()
useEffect(() => {
  setxInput(rawInputData.length)
  
})
 

  /*************************************************** */
  useEffect(() => {
    if (searchPostWindow === true) {
      setHideSearchPostInput('show-input-component');
      setOpenSearchList('search-post-container show-search-list');
    } else {
      setHideSearchPostInput('hide-input-component');
      setOpenSearchList('search-post-container hide-search-list');
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
    if (endInputWindow) {
      setHideEndInputComponent('show-input-component');
      setOpenRingList('ring-list-container show-ring-list');
    } else {
      setHideEndInputComponent('hide-input-component');
    }
  });

  useEffect(() => {
    const endLabelCalc = Number(sagSnitt) + Number(endLabel);

    if (endLabel <= 0.05 && endLabel >= -0.05) {
      setCorrectLabel('label-container-correct');
    } else {
      setCorrectLabel('');
    }
    const startLabelCalc = Number(sagSnitt) + Number(startLabel);

    if (startLabel <= 0.05 && startLabel >= -0.05) {
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
    if (endRingInput > 80) {
      setTooHighModal(true);
    } else if (endRingInput === '') {
      setWriteValModal(true);
    } else {
      setEndRingInputData([
        ...endRingInputData,
        { input: endRingInput, id: uuid() }
      ]);
      setEndRingInput('');
    }
  };

  /*********************** Labels ***********************/
  const [startLabel, setStartLabel] = useState(200);
  const [endLabel, setEndLabel] = useState();
  const [startLabelStatic, setStartLabelStatic] = useState();

  /*********************** SawBlade thickness ***********************/
 
  const blade1 = () => {
    setBladeThicknessHalf(2.2/2)
    setBladeThickness(2.2);
    setSagSnitt(3.6);
    if (rawInputData) {
      let blade1 = new Array(rawInputData.length).fill(3.6);
      setSagSnittSum(blade1);
      setPostIndex();
    }
    setOpenBladeThicknessChooser(false);
  };
  const blade2 = () => {
    setBladeThicknessHalf(2.4/2)
    setBladeThickness(2.4);
    setSagSnitt(3.8);
    if (rawInputData) {
      let blade2 = new Array(rawInputData.length).fill(3.8);
      setSagSnittSum(blade2);
      setPostIndex();
    }
    setOpenBladeThicknessChooser(false);
  };
  const blade3 = () => {
    setBladeThicknessHalf(2.6 / 2)
    setBladeThickness(2.6);
    setSagSnitt((4.0).toFixed(1));
    if (rawInputData) {
      let blade3 = new Array(rawInputData.length).fill(4.0);
      setSagSnittSum(blade3);
      setPostIndex();
    }
    setOpenBladeThicknessChooser(false);
  };
  const blade4 = () => {
   setBladeThicknessHalf(2.8/2)
    setBladeThickness(2.8);
    setSagSnitt(4.2);
    if (rawInputData) {
      let blade4 = new Array(rawInputData.length).fill(4.2);
      setSagSnittSum(blade4);
    
     
      setPostIndex();
      
    } 
    setOpenBladeThicknessChooser(false);
  };
  const blade5 = () => {
    setBladeThicknessHalf(3.0/2)
    setBladeThickness((3.0).toFixed(1));
    setSagSnitt(4.4);
    if (rawInputData) {
      let blade5 = new Array(rawInputData.length).fill(4.4);
      setSagSnittSum(blade5);
      setPostIndex();
    }
    setOpenBladeThicknessChooser(false);
  };
  const blade6 = () => {
    setBladeThicknessHalf(3.2/2)
    setBladeThickness(3.2);
    setSagSnitt(4.6);
    if (rawInputData) {
      let blade6 = new Array(rawInputData.length).fill(4.6);
      setSagSnittSum(blade6);
      setPostIndex();
    }
    setOpenBladeThicknessChooser(false);
  };
  /*********************** Numbers from ring list ***********************/
  const getNumbersFromList = digits => {
    if (startInputWindow) {
      setStartRingInputData([
        ...startRingInputData,
        { input: digits, id: uuid() }
      ]);
      setTypeDisplayMove('stay-down');
    } else if (endInputWindow) {
      setEndRingInputData([...endRingInputData, { input: digits, id: uuid() }]);
      setTypeDisplayMove('stay-down');
    }
  };
  /*********************** Numbers from raw list ***********************/

  const getNumbersFromRawList = digit => {
    if (rawInputData.length > 7) {
      setModalOpen(true);
    } else {
      setRawInputData([...rawInputData, { input: digit, id: uuid() }]);

      setRawInput('');
      setPostIndex();
    }
  };

  /*********************** Open and Close ***********************/

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [openShimsCalculator, setOpenShimsCalculator] = useState(false)

  const openCloseShimsCalculator = () => {
    setOpenShimsCalculator(!openShimsCalculator)
    
     setStartInputWindow(true)
     setEndInputWindow(false)
     setRawInputWindow(false)
     setSearchPostWindow(false)
     
     
  }

  const closeSettings = () => {
    setHideSettings('hide-settings');
  };
  const openSettings = () => {
    setHideSettings('show-settings');
    if(rawInputWindow) {
      setTypeDisplayMove('stay-down')
    } else if(startInputWindow) {
      setTypeDisplayMove('stay-down')
    } else if (searchPostWindow) {
      setTypeDisplayMove('stay-down')
    } else if(endInputWindow) {
      setTypeDisplayMove('stay-down')
    } else {
      setTypeDisplayMove('stay-up')
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', openCloseWriteValueModal);
  }, []);
  /*********************** Modals ***********************/
  const [modalOpen, setModalOpen] = useState(false);
  const [writeValModal, setWriteValModal] = useState(false);
  const [tooHighModal, setTooHighModal] = useState(false);
  const [tooLowModal, setTooLowModal] = useState(false);

  const openCloseModal = e => {
    setModalOpen(false);
  };
  const openCloseWriteValueModal = e => {
    setWriteValModal(false);
    if (e.keyCode === 13) {
      setWriteValModal(false);
    }
  };
  const openCloseTooHigh = () => {
    setTooHighModal(false);
  };
  const openCloseTooLow = () => {
    setTooLowModal(false);
  };

  const [sidebar, setSidebar] = useState(false);
  const [rawInputWindow, setRawInputWindow] = useState(false);
  const [startInputWindow, setStartInputWindow] = useState(false);
  const [endInputWindow, setEndInputWindow] = useState(false);
  const [searchPostWindow, setSearchPostWindow] = useState(false);
  const [typeDisplayMove, setTypeDisplayMove] = useState('');

  const openCloseSidebar = () => {
    setSidebar(!sidebar);

    if (
      rawInputWindow ||
      startInputWindow ||
      endInputWindow ||
      searchPostWindow
    ) {
      setTypeDisplayMove('stay-down');
    } else {
      setTypeDisplayMove('stay-up');
    }
  };

  const openCloseSearchPostInput = () => {
    setSearchPostWindow(!searchPostWindow);
    setRawInputWindow(false);
    setEndInputWindow(false);
    setStartInputWindow(false);
    setgetSearchPostArkivInput('');
    setOpenShimsCalculator(false)
    if (rawInputWindow) {
      setTypeDisplayMove('stay-down');
    } else if (endInputWindow) {
      setTypeDisplayMove('stay-down');
    } else if (startInputWindow) {
      setTypeDisplayMove('stay-down');
    } else if (searchPostWindow) {
      setTypeDisplayMove('movingTypeDisplayUp');
    } else {
      if (searchPostWindow === false) {
        setTypeDisplayMove('movingTypeDisplayDown');
      }
    }
  };
  const openCloseStartInputWindow = () => {
    setStartInputWindow(!startInputWindow);
    setRawInputWindow(false);
    setEndInputWindow(false);
    setSearchPostWindow(false);
    if (rawInputWindow) {
      setTypeDisplayMove('stay-down');
    } else if (endInputWindow) {
      setTypeDisplayMove('stay-down');
    } else if (searchPostWindow) {
      setTypeDisplayMove('stay-down');
    } else if (startInputWindow) {
      setTypeDisplayMove('movingTypeDisplayUp');
    } else if (!startInputWindow) {
      setTypeDisplayMove('movingTypeDisplayDown');
    }
  };
  
  const openCloseRawInputWindow = () => {
    setRawInputWindow(!rawInputWindow);
    setStartInputWindow(false);
    setEndInputWindow(false);
    setSearchPostWindow(false);

    if (startInputWindow) {
      setTypeDisplayMove('stay-down');
    } else if (endInputWindow) {
      setTypeDisplayMove('stay-down');
    } else if (searchPostWindow) {
      setTypeDisplayMove('stay-down');
    } else if (rawInputWindow) {
      setTypeDisplayMove('movingTypeDisplayUp');
    } else {
      setTypeDisplayMove('movingTypeDisplayDown');
    }
  };
  const openCloseEndInputWindow = () => {
    setEndInputWindow(!endInputWindow);
    setStartInputWindow(false);
    setRawInputWindow(false);
    setSearchPostWindow(false);
    if (rawInputWindow) {
      setTypeDisplayMove('stay-down');
    } else if (startInputWindow) {
      setTypeDisplayMove('stay-down');
    } else if (searchPostWindow) {
      setTypeDisplayMove('stay-down');
    } else if (endInputWindow) {
      setTypeDisplayMove('movingTypeDisplayUp');
    } else {
      setTypeDisplayMove('movingTypeDisplayDown');
    }
  };
  const openCloseBladeThicknessChooser = () => {
    setOpenBladeThicknessChooser(!openBladeThicknessChooser);
  };

  /*********************** Delete ***********************/

 
  const masterDelete = () => {

    allStartRingDelete()
    allRawInputDelete()
    allEndRingDelete()
    blade4()
      
  };

  const allStartRingDelete = () => {
    setStartRingDelete('start-delete');
    setTypeDisplayMove('stay-down');
    setTimeout(() => {
      setStartRingInputData([]);
      setStartRingsumForLabel([0]);
      setStartRingDelete('');
    }, 1000);
  };
  const allRawInputDelete = () => {
    setTimeout(() => {
      setDeleteTransition('delete-transition');
    }, 600);
    setBladeDelete('blade-delete');
    setRingDelete('ring-delete');
    setPostIndex();
    setTimeout(() => {
      setRawInputData([]);
      setRawInputDataSum([0]);
      setRawInputDataSumForLabel([0]);
      setStartRingsumForLabel([0]);
      setSagSnittSumCalculated([0]);
      setSagSnittSum([sagSnitt]);
      setEndLabel(217.2);
      //setStartLabel(200);
      setBladeDelete('');
      setRingDelete('');
      setDeleteTransition('');
    }, 1000);
  };
  const allEndRingDelete = () => {
    setEndRingDelete('end-delete');
    setTypeDisplayMove('stay-down');

    setTimeout(() => {
      setEndRingInputData([]);
      setEndRingInputForLabel([0]);
      setEndRingDelete('');
    }, 1000);
  };

  const startRingSingleDelete = id => {
    const updateStartRingList = startRingInputData.filter(
      item => item.id !== id
    );
    setStartRingInputData(updateStartRingList);
  };
  const rawSingleRingDelete = id => {
    const updateRawRingList = rawInputData.filter(item => item.id !== id);
    setRawInputData(updateRawRingList);
    setPostIndex();
  };

  const endSingleDeleteRing = id => {
    const updateEndRingList = endRingInputData.filter(item => item.id !== id);
    setEndRingInputData(updateEndRingList);
  };
  /*********************** SearchList ***********************/
  const [testingContext, setTestingContext] = useState(false);

  const [postIndex, setPostIndex] = useState();

  const poster = useContext(DataPost);

  const [sortPost, setSortPost] = useState(
    poster.sort((a, b) => a.type.name > b.type.name)
  );

  /********************** FILTRERING OG SØK ****************/
  const [sortOut40, setSortOut40] = useState(false);
  const [sortOut42, setSortOut42] = useState(false);
  const [x2, setX2] = useState(false);

  const allhandler = () => {
    setSortPost(poster.filter(post => post.type.name.length > 0));
  };
  const sortOut40handler = () => {
    setSortPost(poster.filter(post => post.bladType == '2.6 - 4.0'));
  };
  const sortOut42handler = () => {
    setSortPost(poster.filter(postr => postr.bladType == '2.8 - 4.2'));
  };
  const x2Handler = () => {
    setSortPost(poster.filter(post => post.type.name[0] == 2));
  };

  const [getSearchPostArkivInput, setgetSearchPostArkivInput] = useState('');
  const [searchResult, setSearchResult] = useState()

  const searchPostArkivInputFunc = e => {
    setgetSearchPostArkivInput(e.target.value);
    setTypeDisplayMove('stay-down');
  };
  useEffect(() => {
    setSortPost(
      poster.filter(post => post.type.name.includes(getSearchPostArkivInput))
    );
 
  
    
  }, [getSearchPostArkivInput]);

  useEffect(() => {

    if(getSearchPostArkivInput === ''){
     
      setSearchResult('Ingen søk')
    } else {
    setSearchResult(poster.filter(post => post.type.name.includes(getSearchPostArkivInput)).length)
    
    }
  })

  useEffect(() => {
    if (postIndex === undefined) {
      props.faneTitle('Mkv calculator');
    } else if (postIndex) {
      props.faneTitle(poster[postIndex].type.name);
    }
  });

  const [clickIndexPost, setClickIndexPost] = useState();

  return (
    <div className="app-container">
      <TypeDisplay typeDisplayMove={typeDisplayMove} postIndex={postIndex} />

      {poster.map(function(post, index) {
        useEffect(() => {
          if (testingContext === true && index === postIndex) {
            setSagSnitt(post.sagSnitt);
            setBladeThickness(post.bladeThickness);
            setEndRingInputData([...post.endRings]);
            setStartRingInputData([...post.startRings]);
            setRawInputData([...post.rawInput]);
            setSagSnittSum([...post.sagsnitt]);

            setTestingContext(false);
          }
        }, [testingContext]);
      })}

      <SearchFilterPostInput
        OpenCloseSearchPostInput={openCloseSearchPostInput}
        hideSearchPostInput={hideSearchPostInput}
        openSearchList={openSearchList}
        sortOut42handler={sortOut42handler}
        sortOut40handler={sortOut40handler}
        allhandler={allhandler}
        x2Handler={x2Handler}
        getSearchPostArkivInput={getSearchPostArkivInput}
        searchPostArkivInputFunc={searchPostArkivInputFunc}
        searchInput={getSearchPostArkivInput}
        searchResult={searchResult}
      />

      {modalOpen && <TooMany openCloseModal={openCloseModal} />}
      {writeValModal && (
        <WriteValue openCloseWriteValueModal={openCloseWriteValueModal} />
      )}
      {tooHighModal && <TooHigh openCloseTooHigh={openCloseTooHigh} />}
      {tooLowModal && <TooLow openCloseTooLow={openCloseTooLow} />}

      <button onClick={openCloseSidebar} className="open-close-menu-btn">
        {sidebar ? 'Lukk' : 'Åpne'}
      </button>

      <RingList openRingList={openRingList} getRings={getNumbersFromList} />
      <RawList openRawList={openRawList} getRaw={getNumbersFromRawList} />
      <SearchList
        openSearchList={openSearchList}
        testingContext={setTestingContext}
        testingContextVal={testingContext}
        OpenCloseSearchPostInput={openCloseSearchPostInput}
        postIndex={setPostIndex}
        sortPost={sortPost}
        display={setTypeDisplayMove}
        clickIndexPost={setClickIndexPost}
      />

      <Settings
        settingsOpen={setSettingsOpen}
        closeSettings={closeSettings}
        class={hideSettings}
        wallpaperValue={props.wallpaperValue}
        innerRing={props.innerRing}
        outerRings={props.outerRings}

        inputOuterRings={props.inputOuterRings}
        titleInnerRings={props.titleInnerRings}
        titleOuterRings={props.titleOuterRings}
        inputInnerRings={props.inputInnerRings}
        searchBg={props.searchBg}
        searchPostBtn={props.searchPostBtn}
        searchPostBtnHover={props.searchPostBtnHover}
        sidebarBg={props.sidebarBg}
        postListHover={props.postListHover}
        deleteBtn={props.deleteBtn}
        deleteBtnHover={props.deleteBtnHover}

      />
      {sidebar && (
        <SideBar
          openCloseRawInputWindow={openCloseRawInputWindow}
          openCloseStartInputWindow={openCloseStartInputWindow}
          openCloseEndInputWindow={openCloseEndInputWindow}
          openCloseSearchPostInput={openCloseSearchPostInput}
          openCloseShimsCalculator={openCloseShimsCalculator}
          masterDelete={masterDelete}
          openSettings={openSettings}
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
        startInputWindowForRef={startInputWindow}

      />

      <RawInput
        rawInputWindow={rawInput}
        getRawInput={getRawInput}
        rawInputDataSubmit={rawInputDataSubmit}
        value={rawInput}
        allRawInputDelete={allRawInputDelete}
        openCloseRawInputWindow={openCloseRawInputWindow}
        hideRawInputComponent={hideRawInputComponent}
        xInput={xInput}
        rawInputWindowForRef={rawInputWindow}

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
        endInputWindowForRef={endInputWindow}
      />

      <div className="ring-component-container">
        <Hylse3
          startLabelStatic={fillValueStartStatic}
          EndLabelStatic={fillEndValueStatic}
          startLabel={startLabel}
          endLabel={endLabel}
          correctLabel={correctLabel}
          correctLabel2={correctLabel2}
        />

        {startRingInputData.map(startRing => (
          <DistanceRing
            key={startRing.id}
            ringStyle={outerRings}
            ringValue={startRing.input}
            startRingDelete={startRingDelete}
            deleteTransition={deleteTransition}
            singleRingDelete={() => startRingSingleDelete(startRing.id)}
            startInputWindow={startInputWindow}
          />
        ))}

        <div onClick={openCloseBladeThicknessChooser} className={`blade`}>
          <div className="blade-thickness-top">{sagSnitt}</div>
          <div className="blade-thickness-bottom">{bladeThickness}</div>
        </div>

        {rawInputData.map(rawInputrings => (
          <DimensionRings
            key={rawInputrings.id}
            ringStyle={innerRing}
            bladeThickness={bladeThickness}
            bladeThicknessTop={sagSnitt}
            ringValue={(Number(rawInputrings.input) + Number(vigg) * 2).toFixed(
              1
            )}
            rawInputWindow={rawInputWindow}
            rawValue={rawInputrings.input}
            openBladeThicknessChooser={openCloseBladeThicknessChooser}
            bladeDeleteAnimate={bladeDelete}
            deleteRing={ringDelete}
            deleteTransition={deleteTransition}
            singleRingDelete={() => rawSingleRingDelete(rawInputrings.id)}
            clickIndexPost={clickIndexPost}
            rawShims={rawInputrings.shims}
            ringShims={rawInputrings.ring}
            rawShims2={rawInputrings.shims2}
            rawShims3={rawInputrings.shims3}
          />
        ))}

        {endRingInputData.map(endRing => (
          <DistanceRing
            key={endRing.id}
            ringStyle={outerRingsEnd}
            ringValue={endRing.input}
            endRingDelete={endRingDelete}
            deleteTransition={deleteTransition}
            singleRingDelete={() => endSingleDeleteRing(endRing.id)}
            endInputWindow={endInputWindow}
          />
        ))}

        {openShimsCalculator &&  <ShimsCalculator openShimsCalculator={openShimsCalculator} />}


        


      </div>

 


      

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
          width: 8vw;
          position: absolute;
          left: 2rem;
          bottom: 4rem;
          outline: none;

          background-color: var(--input-title-outer-rings);
          font-size: 15px;
          color: var(--input-title-outer-rings);
          z-index: 110;
          border: none;
          transition: background 0.5s, color 0.5s;
          background: linear-gradient(120deg, var(--input-title-inner-rings) 50%, var(--input-title-outer-rings) 50%);
          background-size: 220%;
        }
        .open-close-menu-btn:hover {
          color: var(--input-title-inner-rings);
          background-position: 100%;
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
          height: 30rem;
          width: 0.4rem;
          background-color: yellow;
          position: relative;
          cursor: pointer;
          z-index: 12;
          margin-right: .3em;
          margin-top: 1.5rem
        }

        .blade-thickness-top {
          position: absolute;
          bottom: 30.2rem;
          left: 50%;
          transform: translateX(-50%);
          color: yellow;
        }
        .blade-thickness-bottom {
          position: absolute;
          top: 30.2rem;
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
