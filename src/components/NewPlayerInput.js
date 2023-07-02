// NewPlayerInput.js
import React, { useState } from 'react';
import useStore from '../store';
import CLASSES from '../config/Classes';
import abilities from '../config/Abilities'; 
import '../CSSFiles/NewPlayerInput.css'

function NewPlayerInput() {
  const [name, setName] = useState('');
  const [playerClass, setPlayerClass] = useState(CLASSES.EVERYONE);
  const { addPlayer } = useStore();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Fetch abilities of selected class
    const classAbilities = abilities[playerClass];
    
    // Add new player with abilities of selected class and no selected abilities
    addPlayer({ name, class: playerClass, abilities: classAbilities, selectedAbilities: [] });

    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="player-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Player name"
        required
        className="player-input"
      />
      <select
        value={playerClass}
        onChange={(e) => setPlayerClass(e.target.value)}
        className="player-select"
      >
        {Object.values(CLASSES).map((c) => (
          <option key={c} value={c}>{c}</option> // Add key here
        ))}
      </select>
      <button type="submit" className="player-button">Add Player</button>
    </form>
  );
}

export default NewPlayerInput;
