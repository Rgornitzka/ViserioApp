import React from 'react';
import SidebarWrapper from './components/Sidebar/Sidebar';
import useStore from './store';
import Timeline from "./components/Timeline/Timeline/Timeline";
import "./CSSFiles/Timeline/Timeline.css";

function App() {
  const { abilities } = useStore();

  return (
    <div className = "container">
      <SidebarWrapper abilities={abilities} />
      <Timeline />
    </div>
  );
}

export default App;
