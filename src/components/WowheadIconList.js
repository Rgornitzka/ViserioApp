import React from 'react';
import WowheadIcon from './WowheadIcon';
import CLASSES from '../config/Classes';

function WowheadIconList({ abilities, onIconClick }) {
  return (
    <div className="icon-list">
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
