import React, { useEffect, useState } from "react";
import useStore from "../../store";
import '../../CSSFiles/TimeGrid.css';
import TimeIndicatorBar from './TimeIndicatorBar';
import TimeIndicatorLabel from './TimeIndicatorLabel';

/**
 * Component representing a time grid.
 * @param {Object} panelRef - Reference to the panel element.
 */
function TimeGrid({ panelRef }) {
  const duration = useStore(state => state.duration);
  const [leftPosition, setLeftPosition] = useState(0);
  const [durationPosition, setDurationPosition] = useState(0);

  useEffect(() => {
    // Calculate panel width when it's mounted or updated
    if (panelRef.current) {
      const panelWidth = panelRef.current.offsetWidth;
      console.log('panelWidth', panelWidth);
    }
  }, [panelRef]);

  /**
   * Handle mouse movement on the time grid.
   * @param {Event} e - Mouse move event object.
   */
  const handleMouseMove = (e) => {
    const rect = panelRef.current.getBoundingClientRect();
    setLeftPosition(e.clientX - rect.left);
    const positionPercentage = (e.clientX - rect.left) / rect.width;
    setDurationPosition(positionPercentage * duration);
  }

  return (
    <div className="timeGrid" onMouseMove={handleMouseMove}>
      {/* Generate grid lines */}
      {getCastTimes(10, duration).map((castTime, index) => {
        const isMinute = index % 6 === 0;
        const isHalfMinute = !isMinute && index % 3 === 0;
        let gridLineColor;
        if (isMinute) {
          gridLineColor = "#4f4f4f";
        } else if (isHalfMinute) {
          gridLineColor = "#3f3f3f";
        } else {
          gridLineColor = "#2f2f2f";
        }
        return (
          <div
            key={castTime}
            className="gridLine"
            style={{ 
              backgroundColor: gridLineColor,
              left: `${(castTime / duration) * 100}%` 
            }}
          />
        );
      })}
      {/* Display time indicator bar and labels */}
      <TimeIndicatorBar leftPosition={leftPosition} durationPosition={durationPosition} />
      <TimeIndicatorLabel className="timeIndicatorLabelTop" leftPosition={leftPosition} durationPosition={durationPosition} />
      <TimeIndicatorLabel className="timeIndicatorLabelBottom" leftPosition={leftPosition} durationPosition={durationPosition} /> 
    </div>
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

export default TimeGrid;
