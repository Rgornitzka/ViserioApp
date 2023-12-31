import React from "react";
import WowheadIcon from "../../Icons/WowheadIcon";
import "../../../CSSFiles/Timeline/bossAbilityRow.css";

function BossAbilityRow({ ability, pixelsPerSecond }) {
	const leftPosition = ability.time * pixelsPerSecond;

	return (
		<div className="bossAbility" style={{ left: `${leftPosition}px` }}>
			<WowheadIcon name={ability.icon} size="30px" />
		</div>
	);
}

export default BossAbilityRow;
