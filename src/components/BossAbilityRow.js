import React from "react";
import WowheadIcon from "./WowheadIcon";
import "../CSSFiles/bossAbilityRow.css";


function BossAbility({ ability, pixelsPerSecond }) {
	const leftPosition = ability.time * pixelsPerSecond;

	return (
		<div className="bossAbilityRow" style={{ left: `${leftPosition}px` }}>
			<WowheadIcon name={ability.icon} size="30px" />
		</div>
	);
}

export default BossAbility;
