// NewPlayerInput.js
import React, { useState } from 'react';
import useStore from '../store';
import CLASSES from '../config/Classes';
import abilities from '../config/Abilities'; // Import your abilities

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Player name"
        required
      />
      <select
        value={playerClass}
        onChange={(e) => setPlayerClass(e.target.value)}
      >
        {Object.values(CLASSES).map((c) => (
          <option key={c} value={c}>{c}</option> // Add key here
        ))}
      </select>
      <button type="submit">Add Player</button>
    </form>
  );
}

export default NewPlayerInput;
