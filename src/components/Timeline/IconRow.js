// IconRow.js
import React from 'react';
import WowheadIcon from '../WowheadIcon';

function IconRow({ icon, abilities, pixelsPerSecond }) {
  return (
    <div className="iconRow">
      <div className="iconName">{icon}</div>
      <div className="iconAbilities">
        {abilities.map((ability, index) => (
          <WowheadIcon
            key={index}
            name={ability.icon}
            alt={ability.name}
            style={{ position: 'absolute', left: ability.time * pixelsPerSecond }}
          />
        ))}
      </div>
    </div>
  );
}

export default IconRow;