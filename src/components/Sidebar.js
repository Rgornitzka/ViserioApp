import React from 'react';
import useStore from '../store';
import WowheadIconList from './WowheadIconList';
import '../CSSFiles/Sidebar.css';

class Sidebar extends React.Component {
  render() {
    const { abilities, addAbility } = this.props; 
    return (
      <div className="sidebar">
        <WowheadIconList abilities={abilities} onIconClick={addAbility} />
      </div>
    );
  }
}

const SidebarWrapper = () => {
  const { addIcon, abilities } = useStore();
  return <Sidebar abilities={abilities} addAbility={addIcon} />;
};

export default SidebarWrapper;
