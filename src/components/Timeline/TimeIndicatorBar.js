import React from 'react';
import '../../CSSFiles/TimeIndicatorBar.css';

const TimeIndicatorBar = ({ leftPosition }) => (
  <div
    className="timeIndicator"
    style={{
      left: `${leftPosition}px`,
    }}
  />
);

export default TimeIndicatorBar;
