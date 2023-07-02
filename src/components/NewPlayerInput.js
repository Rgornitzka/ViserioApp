import React, { useState } from 'react';
import useStore from '../store';
import CLASSES_SPECS_ROLES from '../config/ClassesSpecsRoles';
import abilities from '../config/Abilities'; 
import '../CSSFiles/NewPlayerInput.css'

function NewPlayerInput() {
  const defaultClass = Object.keys(CLASSES_SPECS_ROLES)[0];
  const defaultSpec = CLASSES_SPECS_ROLES[defaultClass].specs[0].name;
  const defaultRole = CLASSES_SPECS_ROLES[defaultClass].specs[0].role;

  const [name, setName] = useState('');
  const [playerClass, setPlayerClass] = useState(defaultClass);
  const [playerSpec, setPlayerSpec] = useState(defaultSpec);
  const [playerRole, setPlayerRole] = useState(defaultRole);
  const { addPlayer, addToRoster } = useStore();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const classAbilities = abilities[playerClass];
    if (!classAbilities) {
      alert(`Abilities not defined for ${playerClass}`);
      return;
    }

    const specAbilities = classAbilities[playerSpec];
    if (!specAbilities) {
      alert(`Abilities not defined for ${playerClass} - ${playerSpec}`);
      return;
    }

    addPlayer({ name, class: playerClass, spec: playerSpec, role: playerRole, abilities: specAbilities, selectedAbilities: [] });
  
    setName('');
    setPlayerClass(defaultClass);
    setPlayerSpec(defaultSpec);
    setPlayerRole(defaultRole);
  };

  const handleAddToRoster = () => {
    addToRoster({ name, class: playerClass, spec: playerSpec, role: playerRole });
  };

  const handleClassChange = (e) => {
    setPlayerClass(e.target.value);
    setPlayerSpec(CLASSES_SPECS_ROLES[e.target.value].specs[0].name);
    setPlayerRole(CLASSES_SPECS_ROLES[e.target.value].specs[0].role);
  }

  const handleSpecChange = (e) => {
    const selectedSpec = CLASSES_SPECS_ROLES[playerClass].specs.find(spec => spec.name === e.target.value);
    setPlayerSpec(selectedSpec.name);
    setPlayerRole(selectedSpec.role);
  }

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
        onChange={handleClassChange}
        className="player-select"
      >
        {Object.keys(CLASSES_SPECS_ROLES).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select
        value={playerSpec}
        onChange={handleSpecChange}
        className="player-select"
      >
        {CLASSES_SPECS_ROLES[playerClass].specs.map((spec) => (
          <option key={spec.name} value={spec.name}>{spec.name}</option>
        ))}
      </select>
      <button type="submit" className="player-button">Add Player</button>
      <button type="button" onClick={handleAddToRoster} className="player-button">Add To Roster</button>
    </form>
  );
}

export default NewPlayerInput;
