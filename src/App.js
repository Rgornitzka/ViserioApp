import React from 'react';
import SidebarWrapper from './components/Sidebar/Sidebar';
import { AbilitiesProvider } from './components/AbilitiesContext';
import useStore from './store';
import Timeline from "./components/Timeline/Timeline/Timeline";
import "./CSSFiles/Timeline/Timeline.css";

function App() {
  const { abilities } = useStore();

  return (
    <AbilitiesProvider>
      <div className = "container">
        <SidebarWrapper abilities={abilities} />
        <Timeline />
      </div>
    </AbilitiesProvider>
  );
}

export default App;
