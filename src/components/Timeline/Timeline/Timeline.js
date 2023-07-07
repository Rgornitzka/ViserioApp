import React, { useRef } from "react";
import TimeGrid from "./TimeGrid";
import "../../../CSSFiles/Timeline/Timeline.css";

/**
 * Component representing a timeline.
 */
function Timeline() {
  const panelRef = useRef(null);

  return (
    <div className="timeline-container">
      <div ref={panelRef} className="timeline-panel">
        <TimeGrid panelRef={panelRef} />
      </div>
    </div>
  );
}

export default Timeline;