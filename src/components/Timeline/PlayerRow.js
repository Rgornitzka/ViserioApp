import React from 'react';
import CLASSCOLORS from '../../config/ClassColors';
import AbilityRow from './AbilityRow';
import '../../CSSFiles/PlayerRow.css';

function PlayerRow({ player, pixelsPerSecond}) {
  const alpha = 0.2 
  const playerColour = CLASSCOLORS[player.class.toUpperCase()]; // Get player's class color
  const [red, green, blue] = playerColour; // Destructure the RGB values
  const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`; // Construct the RGBA color value

  return (
    <div className="playerRow" style={{ backgroundColor: rgbaColor }}>
      <h3 className="playerName">{player.name}</h3>
      {Array.isArray(player.selectedAbilities) &&
        player.selectedAbilities.map((abilityGroup, index) => (
          <AbilityRow key={index} abilities={abilityGroup} pixelsPerSecond={pixelsPerSecond}/>
        ))}
    </div>
  );
}


export default PlayerRow;