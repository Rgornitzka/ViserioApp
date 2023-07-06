import React from "react";
import CLASSCOLORS from "../../config/ClassColors";
import AbilityRow from "./AbilityRow";
import "../../CSSFiles/PlayerRow.css";

function PlayerRow({ player, pixelsPerSecond, style }) {
	const alpha = 0.5;
	const playerColour = CLASSCOLORS[player.class.toUpperCase()];
	const [red, green, blue] = playerColour;
	const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

	const uniqueAbilities = player.selectedAbilities
		? Array.from(new Set(player.selectedAbilities.map((a) => a.name)))
		: [];

	return (
		<div className="playerRow" style={{ ...style }}>
			<h3 className="playerName">{player.name}</h3>
			{uniqueAbilities.map((abilityName, index) => {
				const abilities = player.selectedAbilities.filter(
					(a) => a.name === abilityName
				);
				return (
					<AbilityRow
						key={index}
						abilities={abilities}
						pixelsPerSecond={pixelsPerSecond}
						backgroundColor={rgbaColor}
					/>
				);
			})}
		</div>
	);
}

export default PlayerRow;
