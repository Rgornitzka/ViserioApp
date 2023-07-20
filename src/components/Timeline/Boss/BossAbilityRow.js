import React from "react";
import WowheadIcon from "../../Icons/WowheadIcon";
import "../../../CSSFiles/Timeline/bossAbilityRow.css";

function BossAbilityRow({ ability, pixelsPerSecond }) {
	const leftPosition = ability.time * pixelsPerSecond;

	return (
		<div className="bossAbility" style={{ left: `${leftPosition}px` }}>
			<WowheadIcon icon={ability.icon} size="1.5rem" />
		</div>
	);
}

export default BossAbilityRow;
