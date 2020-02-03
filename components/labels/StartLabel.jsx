import React from 'react';

import LabelComponent from './LabelComponent';

const StartLabel = props => {
  return (
    <div>
      <LabelComponent css2={props.css2} value={props.value}  />
     
    </div>
  );
};

export default StartLabel;
