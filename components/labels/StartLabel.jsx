import React from 'react';

import LabelComponent from './LabelComponent';

const StartLabel = props => {
  return (
    <div>
      <LabelComponent value={props.value} />
    </div>
  );
};

export default StartLabel;
