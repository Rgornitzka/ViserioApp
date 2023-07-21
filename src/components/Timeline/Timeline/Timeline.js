// Timeline.js
import React, { useContext, useEffect } from "react";
import TimeGrid from "./TimeGrid";
import { TimelineContext } from "../../../App";
import "../../../CSSFiles/Timeline/Timeline.css";

function Timeline() {
	const { panelRef, setPanelWidth } = useContext(TimelineContext);

	// Get panel width when it is available
	useEffect(() => {
		if (panelRef.current) {
			setPanelWidth(panelRef.current.offsetWidth);
		}
	}, [panelRef, setPanelWidth]);

	return (
		<div className="timeline-container">
			<div ref={panelRef} className="timeline-panel">
				<TimeGrid />
			</div>
		</div>
	);
}

export default Timeline;
