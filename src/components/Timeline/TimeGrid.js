import React, { useEffect, useState } from "react";
import useStore from "../../store";
import '../../CSSFiles/TimeGrid.css';
import TimeIndicatorBar from './TimeIndicatorBar';
import TimeIndicatorLabel from './TimeIndicatorLabel';

function TimeGrid({ panelRef }) {
  const duration = useStore(state => state.duration);
  const [leftPosition, setLeftPosition] = useState(0);
  const [durationPosition, setDurationPosition] = useState(0);

  useEffect(() => {
    if (panelRef.current) {
      const panelWidth = panelRef.current.offsetWidth;
      console.log('panelWidth', panelWidth);
    }
  }, [panelRef]);

  const handleMouseMove = (e) => {
    const rect = panelRef.current.getBoundingClientRect();
    setLeftPosition(e.clientX - rect.left);
    const positionPercentage = (e.clientX - rect.left) / rect.width;
    setDurationPosition(positionPercentage * duration);
  }

  return (
    <div className="timeGrid" onMouseMove={handleMouseMove}>
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
      <TimeIndicatorBar leftPosition={leftPosition} durationPosition={durationPosition} />
      <TimeIndicatorLabel className="timeIndicatorLabelTop" leftPosition={leftPosition} durationPosition={durationPosition} />
      <TimeIndicatorLabel className="timeIndicatorLabelBottom" leftPosition={leftPosition} durationPosition={durationPosition} /> 
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
