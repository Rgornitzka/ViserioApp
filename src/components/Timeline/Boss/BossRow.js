import React from "react";
import BossAbilityRow from "./BossAbilityRow";

//Currently not in use

function BossRow({ boss, pixelsPerSecond }) {
	console.log("boss:", boss); // Debugging line

	if (!boss || !boss.abilities) {
		return <div>No boss data available</div>;
	}

	return (
		<div className="boss-name-bar">
			<h3>{boss.name}</h3>
			{boss.abilities.map((ability, index) => (
				<BossAbilityRow
					key={index}
					abilities={ability}
					pixelsPerSecond={pixelsPerSecond}
				/>
			))}
		</div>
	);
}

export default BossRow;
