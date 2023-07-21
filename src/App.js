// App.js
import React, { createContext, useRef, useEffect } from "react";
import SidebarWrapper from "./components/Sidebar/Sidebar";
import { AbilitiesProvider } from "./components/AbilitiesContext";
import useStore from "./store";
import Timeline from "./components/Timeline/Timeline/Timeline";
import "./CSSFiles/Timeline/Timeline.css";

export const TimelineContext = createContext();

function TimelineProvider({ children }) {
	const { setPanelRef, setPanelWidth } = useStore();
	const panelRef = useRef(null);

	useEffect(() => {
		if (panelRef.current) {
			setPanelRef(panelRef.current);
			setPanelWidth(panelRef.current.offsetWidth);
		}
	}, [panelRef, setPanelRef, setPanelWidth]);

	const value = {
		panelRef,
		setPanelRef,
		setPanelWidth,
	};

	return (
		<TimelineContext.Provider value={value}>
			{children}
		</TimelineContext.Provider>
	);
}

function App() {
	return (
		<AbilitiesProvider>
			<TimelineProvider>
        <div className="container">
          <SidebarWrapper />
          <Timeline />
        </div>
			</TimelineProvider>
		</AbilitiesProvider>
	);
}

export default App;