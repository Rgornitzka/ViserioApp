import React from 'react';
import SidebarWrapper from './components/Sidebar';
import useStore from './store';
import Timeline from './components/Timeline/Timeline';
import './CSSFiles/Timeline.css';

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
