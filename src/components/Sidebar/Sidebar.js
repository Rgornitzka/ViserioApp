import React, { useEffect } from "react";
import useStore from "../../store";
import NewPlayerInput from "./NewPlayerInput";
import RosterList from "./RosterList";
import WowheadIcon from "./../Icons/WowheadIcon";
import CLASSCOLORS from "../../config/ClassColors";
import DeleteIcon from "./DeleteIcon";
import SidebarBossAbilities from "./../Sidebar/SidebarBossAbilities";
import Bosses from "../../config/Bosses";
import "../../CSSFiles/Sidebar/Sidebar.css";
import "../../CSSFiles/Sidebar/NewPlayerDropdown.css";
import { useAbilities } from "../AbilitiesContext";
import { useTimeline } from "../Timeline/Timeline/Timeline";

function Sidebar() {
	const { abilities, setAbilities } = useAbilities();
	const { players, addAbilityToPlayer, addBossAbility, removePlayer, fightDurationInSeconds} =
		useStore();
	const { panelRef, panelWidth } = useStore();
	const pixelsPerSecond = ( panelRef?.current?.offsetWidth ||0 ) / fightDurationInSeconds;

	const calculateLatestAbilityPosition = (ability, player) => {
		return Math.max(
			...abilities
				.filter((a) => a.name === ability.name && a.player.name === player.name)
				.map((a) => {
					let parts = a.time.split(":");
					let minutes = parseInt(parts[0], 10);
					let seconds = parseInt(parts[1], 10);
					return minutes * 60 + seconds;
				}),
			null
		);
	};

	const calculateNewAbilityTimer = (latestAbilityPosition, abilityCooldown) => {
		let newAbilityTimer = timeInSeconds(0);
		if (latestAbilityPosition !== null) {
			newAbilityTimer = timeInSeconds(latestAbilityPosition + abilityCooldown);
		}
		return newAbilityTimer;
	};

	const handleAbilityClick = (ability, player) => {
		const latestAbilityPosition = calculateLatestAbilityPosition(
			ability,
			player
		);
		const newAbilityTimer = calculateNewAbilityTimer(
			latestAbilityPosition,
			ability.cooldown
		);

		addAbilityToPlayer(ability, player.name);

		const newAbility = {
			...ability,
			player: player,
			time: newAbilityTimer,
		};
		setAbilities((prevAbilities) => [...prevAbilities, newAbility]);
	};

	const handleBossAbilityClick = (ability) => {
		addBossAbility(ability);
	};

	const handleDeletePlayer = (playerName) => {
		removePlayer(playerName);
	};

	const handleButtonClick = () => {
		console.log(abilities);
	};

	useEffect(() => {
		console.log("Abilities:", abilities);
	}, [abilities]);

	const renderPlayerSection = (player) => {
		const playerColor = CLASSCOLORS[player.class.toUpperCase()];
		const [red, green, blue] = playerColor;
		const rgbaColor = `rgba(${red}, ${green}, ${blue}, 0.2)`;

		const iconGap = 500;

		return (
			<div
				key={player.name}
				style={{ backgroundColor: rgbaColor }}
				className="playerSection"
			>
				<div className="playerHeader">
					<h2 className="playerName">{player.name}</h2>
					<DeleteIcon
						className="player-delete-icon"
						onClick={() => handleDeletePlayer(player.name)}
					/>
				</div>
				<div className="abilityIcons">
					{player.abilities?.map((ability, index) => (
						<WowheadIcon
							key={index}
							name={ability.name}
							icon={ability.icon}
							alt={ability.name}
							size={"2rem"}
							onClick={() => handleAbilityClick(ability, player)}
							className="playerAbilityIcon"
							player={player.name}
							style={{ maginLeft: iconGap }}
						/>
					))}
				</div>
			</div>
		);
	};

	return (
		<div className="sidebar">
			<div>
				<button onClick={handleButtonClick}>Print Abilities</button>
			</div>
			<SidebarBossAbilities
				boss={Bosses["Boss1"]}
				onBossAbilityClick={handleBossAbilityClick}
			/>

			<details className="dropdown">
				<summary className="dropdown-title">Add New Player</summary>
				<NewPlayerInput />
				<RosterList />
			</details>
			{players?.map(renderPlayerSection)}
		</div>
	);
}

export default Sidebar;

function timeInSeconds(duration) {
	let date = new Date(null);
	date.setSeconds(duration);
	let timeString = date.toISOString().substr(14, 5);
	return timeString;
}
