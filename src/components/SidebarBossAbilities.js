import React from "react";
import useStore from "../store";
import WowheadIcon from "./WowheadIcon";

function SidebarBossAbilities() {
	const bosses = useStore((state) => state.bosses);
	const toggleBossAbility = useStore((state) => state.toggleBossAbility);

	return (
		<div>
			{Object.values(bosses).map((boss) => (
				<div key={boss.name} className="boss-section">
					<h3 className="boss-name">{boss.name}</h3>
					<div className="boss-abilities">
						{boss.abilities.map((ability) => (
							<WowheadIcon
								key={ability.name}
								name={ability.icon}
								size="30px"
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
