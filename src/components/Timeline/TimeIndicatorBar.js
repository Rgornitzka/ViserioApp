import React from 'react';
import '../../CSSFiles/TimeIndicatorBar.css';
import TimeIndicatorLabel from './TimeIndicatorLabel';

function TimeIndicatorBar({ leftPosition, durationPosition }) {
  return (
    <div 
      style={{ left: `${leftPosition}px` }} 
      className="timeIndicatorContainer"
    >
      <TimeIndicatorLabel className="timeIndicatorLabelTop" durationPosition={durationPosition} />
      <div className="timeIndicatorBar" />
      <TimeIndicatorLabel className="timeIndicatorLabelBottom" durationPosition={durationPosition} />
    </div>
  );
}

export default TimeIndicatorBar;
