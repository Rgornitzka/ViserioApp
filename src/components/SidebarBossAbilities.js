import React from "react";
import WowheadIcon from "./WowheadIcon";
import useStore from "../store";
import "../CSSFiles/SidebarBossAbilities.css"; // Import your custom CSS file

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
			{/* Apply a CSS class name to the outermost div */}
			{phases.map((phase, phaseIndex) => (
				<div key={phaseIndex} className="phase">
					<div className="phase-title">
						Phase {phase.name}
					</div>
					<div className="abilities">
						{phase.abilities.map((ability, index) => (
							<WowheadIcon
								key={index}
								name={ability.icon}
								alt={ability.name}
								size={"2rem"}
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
