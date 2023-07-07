import React from "react";
import WowheadIcon from "./WowheadIcon";
import useStore from "../store";

function SidebarBossAbilities({ boss }) {
	const selectedDifficulty = "mythic"; // set the difficulty here, this can be state based on user input
	const toggleBossAbility = useStore((state) => state.toggleBossAbility);

	if (!boss || !boss.difficulty || !boss.difficulty[selectedDifficulty]) {
		return null;
	}

	const phases = boss.difficulty[selectedDifficulty].phases;

	return (
		<div>
			{phases.map((phase, phaseIndex) => (
				<div key={phaseIndex}>
					<h3>Phase {phase.name}</h3>
					<div>
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
