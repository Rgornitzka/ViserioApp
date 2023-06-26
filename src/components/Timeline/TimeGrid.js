import React, { useEffect, useState } from "react";
import useStore from "../../store";
import '../../CSSFiles/TimeGrid.css';
import TimeIndicatorBar from './TimeIndicatorBar';

function TimeGrid({ panelRef }) {
  const duration = useStore(state => state.duration);
  const [leftPosition, setLeftPosition] = useState(0);

  useEffect(() => {
    if (panelRef.current) {
      const panelWidth = panelRef.current.offsetWidth;
      console.log('panelWidth', panelWidth);
    }
  }, [panelRef]);

  const handleMouseMove = (e) => {
    const rect = panelRef.current.getBoundingClientRect();
    setLeftPosition(e.clientX - rect.left);
  }

  return (
    <div className="timeGrid" onMouseMove={handleMouseMove}>
      {getCastTimes(10, duration).map((castTime, index) => {
        const isMinute = index % 6 === 0;
        const isHalfMinute = !isMinute && index % 3 === 0;
        const isTenSeconds = !isMinute && !isHalfMinute;
        let gridLineColor;
        if (isMinute) {
          gridLineColor = "#3a4652";
        } else if (isHalfMinute) {
          gridLineColor = "#2d313b";
        } else if (isTenSeconds) {
          gridLineColor = "#222c36";
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
      <TimeIndicatorBar leftPosition={leftPosition} />
    </div>
  );
}

function getCastTimes(timeSlice, totalTime) {
  const times = [...Array(Math.floor(totalTime / timeSlice) + 1)].map(
    (_, i) => timeSlice * i
  );
  return times;
}

export default TimeGrid;
