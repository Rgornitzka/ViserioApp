import React from 'react';
import useStore from '../store';
import NewPlayerInput from './NewPlayerInput';
import WowheadIcon from './WowheadIcon';
import '../CSSFiles/Sidebar.css';
import CLASSCOLORS from '../config/ClassColors'; // Import the CLASSCOLORS config

function Sidebar() {
  const { players, addAbilityToPlayer } = useStore();

  const handleAbilityClick = (ability, player) => {
    addAbilityToPlayer(ability, player.name);
  }

  return (
    <div className="sidebar">
      <NewPlayerInput />
      {players.map((player) => {
        const playerColor = CLASSCOLORS[player.class.toUpperCase()]; // Get player's class color
        const [red, green, blue] = playerColor; // Destructure the RGB values
        const rgbaColor = `rgba(${red}, ${green}, ${blue}, 0.2)`; // Construct the RGBA color value

        return (
          <div key={player.name} style={{ backgroundColor: rgbaColor }} className="playerSection">
            <h2 className="playerName">{player.name}</h2>
            {player.abilities.map((ability, index) => (
              <WowheadIcon
                key={index}
                name={ability.icon}
                alt={ability.name}
                onClick={() => handleAbilityClick(ability, player)}
                className="playerAbilityIcon"
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
