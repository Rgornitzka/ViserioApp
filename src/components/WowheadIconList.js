import React from 'react';
import WowheadIcon from './WowheadIcon';
import CLASSES from '../config/Classes';

/**
 * Component representing a list of Wowhead icons.
 * @param {Object} props - Component props.
 * @param {Object[]} props.abilities - Array of abilities.
 * @param {Function} props.onIconClick - Function to handle icon click.
 */
function WowheadIconList({ abilities, onIconClick }) {
  return (
    <div className="icon-list">
      {/* Render WowheadIcon components */}
      {abilities[CLASSES.GENERAL].map((ability, index) => {
        return (
          <WowheadIcon
            key={index}
            name={ability.icon}
            alt={ability.name}
            onClick={() => onIconClick(ability)}
          />
        );
      })}
    </div>
  );
}

export default WowheadIconList;