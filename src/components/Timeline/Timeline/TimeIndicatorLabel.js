import React from 'react';
//import '../../CSSFiles/TimeIndicatorBar.css';

/**
 * Component representing a time indicator label.
 * @param {Object} props - Component props.
 * @param {string} props.className - Additional class name for styling.
 * @param {number} props.leftPosition - Left position of the time indicator label.
 * @param {number} props.durationPosition - Duration position of the time indicator label.
 */
function TimeIndicatorLabel({ className, leftPosition, durationPosition }) {
  return (
    <div className={`timeIndicatorLabel ${className}`} style={{ left: `${leftPosition}px` }}>
      {secondsToTime(durationPosition)}
    </div>
  );
}

/**
 * Convert duration in seconds to a time string.
 * @param {number} duration - Duration in seconds.
 * @returns {string} - Formatted time string.
 */
function secondsToTime(duration) {
    let date = new Date(null);
    date.setSeconds(duration);
    let timeString = date.toISOString().substr(14, 5);
    return timeString;
}

export default TimeIndicatorLabel;
