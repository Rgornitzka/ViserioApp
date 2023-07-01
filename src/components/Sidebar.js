// Sidebar.js
import React from 'react';
import useStore from '../store';
import NewPlayerInput from './NewPlayerInput';
import WowheadIcon from './WowheadIcon';
import '../CSSFiles/Sidebar.css';

function Sidebar() {
  const { players, addAbilityToPlayer } = useStore();

  const handleAbilityClick = (ability, player) => {
    addAbilityToPlayer(ability, player.name);
  }

  return (
    <div className="sidebar">
      <NewPlayerInput />
      {players.map((player) => (
        <div key={player.name}>
          <h2>{player.name}</h2>
          {/* Render player abilities here */}
          {player.abilities.map((ability, index) => (
            <WowheadIcon
              key={index}
              name={ability.icon}
              alt={ability.name}
              // Add other necessary props based on your WowheadIcon component
              onClick={() => handleAbilityClick(ability, player)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
