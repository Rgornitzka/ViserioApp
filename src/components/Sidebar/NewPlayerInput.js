import React, { useState } from "react";
import useStore from "../../store";
import CLASSES_SPECS_ROLES from "../../config/ClassesSpecsRoles";
import abilities from "../../config/Abilities";
import "../../CSSFiles/Sidebar/NewPlayerInput.css";
import CLASSCOLORS from "../../config/ClassColors";

function NewPlayerInput() {
	const defaultClass = Object.keys(CLASSES_SPECS_ROLES)[0];
	const defaultSpec = CLASSES_SPECS_ROLES[defaultClass].specs[0].name;
	const defaultRole = CLASSES_SPECS_ROLES[defaultClass].specs[0].role;

	const [name, setName] = useState("");
	const [playerClass, setPlayerClass] = useState(defaultClass);
	const [playerSpec, setPlayerSpec] = useState(defaultSpec);
	const [playerRole, setPlayerRole] = useState(defaultRole);
	const { addPlayer, addToRoster } = useStore();

	// Generate abilities based on player class and spec
	const generateAbilities = (playerClass, playerSpec) => {
		const classAbilities = abilities[playerClass];
		if (!classAbilities) {
			alert(`Abilities not defined for ${playerClass}`);
			return [];
		}

		const specAbilities = classAbilities[playerSpec];
		if (!specAbilities) {
			alert(`Abilities not defined for ${playerClass} - ${playerSpec}`);
			return [];
		}

		return specAbilities;
	};

	// Handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();

		const specAbilities = generateAbilities(playerClass, playerSpec);
		if (specAbilities.length === 0) {
			return;
		}

		const playerData = {
			name,
			class: playerClass,
			spec: playerSpec,
			role: playerRole,
			abilities: specAbilities,
			selectedAbilities: [],
		};

		addPlayer(playerData);

		resetForm();
	};

	// Handle adding player to roster
	const handleAddToRoster = () => {
		if (!name) {
			alert("Player name is required");
			return;
		}

		const specAbilities = generateAbilities(playerClass, playerSpec);
		if (specAbilities.length === 0) {
			return;
		}

		const playerData = {
			name,
			class: playerClass,
			spec: playerSpec,
			role: playerRole,
			abilities: specAbilities,
		};

		addToRoster(playerData);

		resetForm();
	};

	// Handle class selection change
	const handleClassChange = (e) => {
		const selectedClass = e.target.value;
		setPlayerClass(selectedClass);
		setPlayerSpec(CLASSES_SPECS_ROLES[selectedClass].specs[0].name);
		setPlayerRole(CLASSES_SPECS_ROLES[selectedClass].specs[0].role);
	};

	// Handle spec selection change
	const handleSpecChange = (e) => {
		const selectedSpecName = e.target.value;
		const selectedSpec = CLASSES_SPECS_ROLES[playerClass].specs.find(
			(spec) => spec.name === selectedSpecName
		);
		setPlayerSpec(selectedSpec.name);
		setPlayerRole(selectedSpec.role);
	};

	// Reset the form fields
	const resetForm = () => {
		setName("");
		setPlayerClass(defaultClass);
		setPlayerSpec(defaultSpec);
		setPlayerRole(defaultRole);
	};

	return (
		<form onSubmit={handleSubmit} className="player-form">
			{/* Player Name Input */}
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Player Name"
				required
				className="player-input"
			/>
			{/* Player Class Selection */}
			<select
				value={playerClass}
				onChange={handleClassChange}
				className="player-select"
			>
				{Object.keys(CLASSES_SPECS_ROLES).map((className) => {
					const classColor = CLASSCOLORS[className].join(",");
					return (
						<option
							key={className}
							value={className}
							style={{
								fontWeight: "bold",
								backgroundColor: `rgb(${classColor})`,
							}}
						>
							{className}
						</option>
					);
				})}
			</select>
			{/* Player Spec Selection */}
			<select
				value={playerSpec}
				onChange={handleSpecChange}
				className="player-select"
			>
				{CLASSES_SPECS_ROLES[playerClass].specs.map((spec) => {
					const classColor = CLASSCOLORS[playerClass].join(",");
					return (
						<option
							key={spec.name}
							value={spec.name}
							style={{
								fontWeight: "bold",
								backgroundColor: `rgb(${classColor})`,
							}}
						>
							{spec.name}
						</option>
					);
				})}
			</select>
			{/* Add Player Button */}
			<button
				type="submit"
				className="player-button"
				style={{
					fontWeight: "bold",
				}}
			>
				Add Player
			</button>
			{/* Add to Roster Button */}
			<button
				type="button"
				onClick={handleAddToRoster}
				className="player-button"
				style={{
					fontWeight: "bold",
				}}
			>
				Add To Roster
			</button>
		</form>
	);
}

export default NewPlayerInput;
