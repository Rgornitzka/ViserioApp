import React, { useRef, useEffect } from "react";
import TimeGrid from "./TimeGrid";
import '../../CSSFiles/Timeline.css';

function Timeline() {
  const panelRef = useRef(null);

  useEffect(() => {
    console.log('currnet ref', panelRef.current);
  }, []);

  return (
    <div className="timeline-container">
      <div ref={panelRef} className="timeline-panel">
        <TimeGrid panelRef={panelRef} />
      </div>
    </div>
  );
}

export default Timeline;