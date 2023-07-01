import React, { useEffect, useState } from "react";
import useStore from "../../store";
import '../../CSSFiles/TimeGrid.css';
import TimeIndicatorBar from './TimeIndicatorBar';
import TimeIndicatorLabel from './TimeIndicatorLabel';
import IconOverlay from './IconOverlay';
import TimeGridLines from './TimeGridLines';  // Import GridLines component

/**
 * Component representing a time grid.
 * @param {Object} panelRef - Reference to the panel element.
 */
function TimeGrid({ panelRef }) {
  const { duration, selectedIcons } = useStore(state => ({ duration: state.duration, selectedIcons: state.selectedIcons })); // Get duration and selected icons from the store
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

  const pixelsPerSecond = panelRef.current ? panelRef.current.offsetWidth / duration : 0; // Calculate pixels per second

  return (
    <div className="timeGrid" onMouseMove={handleMouseMove}>
      {/* Render TimeGridLines component */}
      <TimeGridLines duration={duration} />

      {/* Display time indicator bar and labels */}
      <TimeIndicatorBar leftPosition={leftPosition} durationPosition={durationPosition} />
      <TimeIndicatorLabel className="timeIndicatorLabelTop" leftPosition={leftPosition} durationPosition={durationPosition} />
      <TimeIndicatorLabel className="timeIndicatorLabelBottom" leftPosition={leftPosition} durationPosition={durationPosition} /> 

      {/* Display selected icons overlay */}
      <IconOverlay selectedIcons={selectedIcons} pixelsPerSecond={pixelsPerSecond} />
    </div>
  );
}

export default TimeGrid;
