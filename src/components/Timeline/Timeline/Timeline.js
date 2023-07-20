import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
} from "react";
import TimeGrid from "./TimeGrid";
import useStore from "../../../store";
import "../../../CSSFiles/Timeline/Timeline.css";

// Create the context
const TimelineContext = createContext();

// Create a custom hook for accessing the context
export function useTimeline() {
	const context = useContext(TimelineContext);
	if (!context) {
		throw new Error("useTimeline must be used within a TimelineProvider");
	}
	return context;
}

/**
 * Component representing a timeline.
 */
function Timeline() {
	const { setPanelRef, setPanelWidth } = useStore();
  const panelRef = useRef(null);


	// Get panel width when it is available
	useEffect(() => {
		if (panelRef.current) {
			setPanelRef(panelRef.current);
			setPanelWidth(panelRef.current.offsetWidth);
		}
	}, [panelRef]);

	const value = {
		panelRef,
		setPanelRef,
		setPanelWidth,
	};

	return (
		<TimelineContext.Provider value={value}>
			<div className="timeline-container">
				<div ref={panelRef} className="timeline-panel">
					<TimeGrid />
				</div>
			</div>
		</TimelineContext.Provider>
	);
}

export default Timeline;
