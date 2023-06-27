import React from 'react';
import '../../CSSFiles/TimeIndicatorBar.css';
import TimeIndicatorLabel from './TimeIndicatorLabel';

/**
 * Component representing a time indicator bar.
 * @param {Object} props - Component props.
 * @param {number} props.leftPosition - Left position of the time indicator bar.
 * @param {number} props.durationPosition - Duration position of the time indicator bar.
 */
function TimeIndicatorBar({ leftPosition, durationPosition }) {
  return (
    <div 
      style={{ left: `${leftPosition}px` }} 
      className="timeIndicatorContainer"
    >
      <div className="timeIndicatorBar" />
      {/* Display time indicator labels */}
      <TimeIndicatorLabel className="timeIndicatorLabelTop" durationPosition={durationPosition} />
      <TimeIndicatorLabel className="timeIndicatorLabelBottom" durationPosition={durationPosition} />
    </div>
  );
}

export default TimeIndicatorBar;
