import React, { useMemo, useContext } from "react";
import useResizeObserver from "use-resize-observer";

const TimelineContext = React.createContext(null);

export function TimelineContextProvider({ panelRef, children }) {
  const { width } = useResizeObserver({ ref: panelRef });

  const contextValue = useMemo(() => {
    return {
      panelRef,
      panelWidth: width,
    };
  }, [panelRef, width]);

  return (
    <TimelineContext.Provider value={contextValue}>
      {children}
    </TimelineContext.Provider>
  );
}

function useTimelineContext() {
  const timelineContext = useContext(TimelineContext);

  if (!timelineContext) {
    throw new Error(
      "useTimelineContext must be used within <TimelineContextProvider>"
    );
  }

  return timelineContext;
}

export default useTimelineContext;
