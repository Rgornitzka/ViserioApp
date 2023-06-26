import React from 'react';
import useStore from '../store';
import CLASSES from '../config/Classes';
import WowheadIcon from './WowheadIcon';
import '../CSSFiles/Sidebar.css';

class Sidebar extends React.Component {
  addAbility = (ability) => {
    this.props.addAbility(ability);
  }

  render() {
    const { abilities } = this.props;   // accept abilities from props
    return (
      <div className="sidebar">
        {abilities[CLASSES.GENERAL].map((ability, index) => {
          return (
            <WowheadIcon
              key={index}
              name={ability.icon}
              alt={ability.name}
              onClick={() => this.addAbility(ability)}
            />
          );
        })}
      </div>
    );
  }
}

const SidebarWrapper = () => {
  const { addIcon, abilities } = useStore();
  return <Sidebar abilities={abilities} addAbility={addIcon} />;
};


export default SidebarWrapper;
