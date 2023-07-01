import React from 'react';
import CLASSCOLORS from '../../config/ClassColors';
import AbilityRow from './AbilityRow';
import '../../CSSFiles/PlayerRow.css';

function PlayerRow({ player, pixelsPerSecond }) {
  const playerColour = CLASSCOLORS[player.class.toUpperCase()];  // Get player's class color

  return (
    <div className="playerRow" style={{ backgroundColor: `#${playerColour}` }}>
      <h3 className="playerName">{player.name}</h3>
      {Array.isArray(player.selectedAbilities) && player.selectedAbilities.map((abilityGroup, index) => (
        <AbilityRow key={index} abilities={abilityGroup} pixelsPerSecond={pixelsPerSecond} />
      ))}
    </div>
  );
}

export default PlayerRow;