import React from "react";
import WowheadIcon from "../Icons/WowheadIcon";
import useStore from "../../store";
import "../../CSSFiles/Sidebar/SidebarBossAbilities.css";

function SidebarBossAbilities({ boss }) {
	const selectedDifficulty = "mythic";
	const toggleBossAbility = useStore((state) => state.toggleBossAbility);

	if (!boss || !boss.difficulty || !boss.difficulty[selectedDifficulty]) {
		return null;
	}

	const phases = boss.difficulty[selectedDifficulty].phases;

	return (
		<div className="sidebar-boss-abilities">
			{" "}
			{phases.map((phase, phaseIndex) => (
				<div key={phaseIndex} className="phase">
					<div className="phase-title">
						Phase {phase.name}
					</div>
					<div className="abilities">
						{phase.abilities.map((ability, index) => (
							<WowheadIcon
								key={index}
								name={ability.name}
								icon={ability.icon}
								alt={ability.name}
								drag={false}
								size={"1.5rem"}
								onClick={() => toggleBossAbility(ability, ability.timers)}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default SidebarBossAbilities;
