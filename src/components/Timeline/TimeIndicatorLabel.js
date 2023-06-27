import React from 'react';
import '../../CSSFiles/TimeIndicatorLabel.css';

function TimeIndicatorLabel({ className, leftPosition, durationPosition }) {
  return (
    <div className={`timeIndicatorLabel ${className}`} style={{ left: `${leftPosition}px` }}>
      {secondsToTime(durationPosition)}
    </div>
  );
}

function secondsToTime(duration) {
    let date = new Date(null);
    date.setSeconds(duration);
    let timeString = date.toISOString().substr(14, 5);
    return timeString;
}

export default TimeIndicatorLabel;
