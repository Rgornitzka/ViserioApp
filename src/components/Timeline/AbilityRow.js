import React from 'react';
import WowheadIcon from '../WowheadIcon';
import '../../CSSFiles/AbilityRow.css';

function AbilityRow({ abilities, pixelsPerSecond }) {  
  // Ensure abilities is an array
  if (!Array.isArray(abilities)) {
    console.error('Abilities is not an array:', abilities);
    return null;
  }
  return (
    <div className="abilityRow">
      {abilities?.map((ability, index) => (
        <WowheadIcon
          key={index}
          name={ability.icon}
          alt={ability.name}
          size='30px'
          style={{ position: 'absolute', left: ability.time * pixelsPerSecond }}
        />
      ))}
    </div>
  );
}

export default AbilityRow;