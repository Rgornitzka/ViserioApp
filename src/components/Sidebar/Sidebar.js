import React from "react";
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

function Sidebar() {
	const { players, addAbilityToPlayer, addBossAbility, removePlayer } = useStore();

	const handleAbilityClick = (ability, player) => {
		addAbilityToPlayer(ability, player.name);
	};

  const handleBossAbilityClick = (ability) => {
		addBossAbility(ability);
	};

	const handleDeletePlayer = (playerName) => {
		removePlayer(playerName);
	};

	return (
		<div className="sidebar">
			<SidebarBossAbilities
				boss={Bosses["Boss1"]}
				onBossAbilityClick={handleBossAbilityClick}
			/>

			<details className="dropdown">
				<summary className="dropdown-title">Add New Player</summary>
				<NewPlayerInput />
				<RosterList />
			</details>
			{players?.map((player) => {
				const playerColor = CLASSCOLORS[player.class.toUpperCase()];
				const [red, green, blue] = playerColor;
				const rgbaColor = `rgba(${red}, ${green}, ${blue}, 0.2)`;

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
									name={ability.icon}
									alt={ability.name}
									size={"2rem"}
									onClick={() => handleAbilityClick(ability, player)}
									className="playerAbilityIcon"
								/>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Sidebar;
