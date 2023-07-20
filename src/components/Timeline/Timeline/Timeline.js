import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	useRef,
} from "react";
import TimeGrid from "./TimeGrid";
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
	const panelRef = useRef(null);
	const [panelWidth, setPanelWidth] = useState(0);

	// Get panel width when it is available
	useEffect(() => {
		if (panelRef.current) {
			setPanelWidth(panelRef.current.offsetWidth);
		}
    console.log("panelWidth", panelWidth);
	}, [panelRef]);

	const value = {
		panelRef,
		panelWidth,
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
