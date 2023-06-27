import React from 'react';
import useStore from '../store';
import WowheadIconList from './WowheadIconList';
import '../CSSFiles/Sidebar.css';

/**
 * Sidebar component for displaying abilities and handling their addition.
 * @param {Object} props - Component props.
 * @param {Object[]} props.abilities - Array of abilities.
 * @param {Function} props.addAbility - Function to add an ability.
 */
class Sidebar extends React.Component {
  /**
   * Add an ability.
   * @param {Object} ability - The ability to add.
   */
  addAbility = (ability) => {
    this.props.addAbility(ability);
    console.log('Added ability', ability);
  }

  render() {
    const { abilities } = this.props; 
    return (
      <div className="sidebar">
        {/* Render the WowheadIconList component */}
        <WowheadIconList abilities={abilities} onIconClick={this.addAbility} />
      </div>
    );
  }
}

/**
 * Sidebar wrapper component for using the Sidebar with store hooks.
 */
const SidebarWrapper = () => {
  const { addIcon, abilities } = useStore();
  return <Sidebar abilities={abilities} addAbility={addIcon} />;
};

export default SidebarWrapper;
