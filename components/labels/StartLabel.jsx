import React from 'react';

import LabelComponent from './LabelComponent';

const StartLabel = props => {
  return (
    <div>
      <LabelComponent css2={props.css2} value={props.value} focus={props.focus} greenFocus={props.greenFocus}/>
    </div>
  );
};

export default StartLabel;
