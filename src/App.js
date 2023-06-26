// App.js
import React from 'react';
import SidebarWrapper from './components/Sidebar';
import useStore from './store';

function App() {
  const { abilities } = useStore();

  return (
    <div>
      <SidebarWrapper abilities={abilities} />
    </div>
  );
}


export default App;
