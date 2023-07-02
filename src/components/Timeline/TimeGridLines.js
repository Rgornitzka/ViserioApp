import React from 'react';
import '../../CSSFiles/TimeGridLines.css';

/**
 * Component representing the grid lines in the time grid.
 * @param {Object} props - Component props.
 * @param {number} props.duration - The total time duration.
 */
function TimeGridLines({ duration }) {
  return (
    <React.Fragment>
      {/* Generate grid lines */}
      {getCastTimes(10, duration).map((castTime, index) => {
        const isMinute = index % 6 === 0;
        const isHalfMinute = !isMinute && index % 3 === 0;
        let gridLineClass;
        if (isMinute) {
          gridLineClass = "gridLineMinute";
        } else if (isHalfMinute) {
          gridLineClass = "gridLineHalfMinute";
        } else {
          gridLineClass = "gridLine";
        }
        return (
          <div
            key={castTime}
            className={gridLineClass}
            style={{ 
              left: `${(castTime / duration) * 100}%` 
            }}
          />
        );
      })}
    </React.Fragment>
  );
}

/**
 * Get an array of cast times based on the given time slice and total time.
 * @param {number} timeSlice - Time slice value.
 * @param {number} totalTime - Total time value.
 * @returns {number[]} - Array of cast times.
 */
function getCastTimes(timeSlice, totalTime) {
  const times = [...Array(Math.floor(totalTime / timeSlice) + 1)].map(
    (_, i) => timeSlice * i
  );
  return times;
}

export default TimeGridLines;
