import React, { useState } from "react";
import useStore from "../../../store";
import "../../../CSSFiles/Timeline/TimeGrid.css";
import TimeIndicatorBar from "./TimeIndicatorBar";
import TimeGridLines from "./TimeGridLines";
import PlayerRow from "../Player/PlayerRow";
import CLASSCOLORS from "../../../config/ClassColors";
import BossAbilityRow from "../Boss/BossAbilityRow";

// Auxiliary method for generating the RGBA color
function getRGBAColor(playerClass, alpha = 0.2) {
	const playerColour = CLASSCOLORS[playerClass.toUpperCase()]; // Get player's class color
	const [red, green, blue] = playerColour; // Destructure the RGB values
	return `rgba(${red}, ${green}, ${blue}, ${alpha})`; // Construct the RGBA color value
}

function TimeGrid({ panelRef }) {
	const { duration, players } = useStore((state) => state);
	const [leftPosition, setLeftPosition] = useState(0);
	const [durationPosition, setDurationPosition] = useState(0);
	const bossAbilities = useStore((state) => state.bossAbilities);

	const handleMouseMove = (e) => {
		const rect = panelRef.current.getBoundingClientRect();
		setLeftPosition(e.clientX - rect.left);
		const positionPercentage = (e.clientX - rect.left) / rect.width;
		setDurationPosition(positionPercentage * duration);
	};

	const pixelsPerSecond = panelRef.current
		? panelRef.current.offsetWidth / duration
		: 0;

	return (
		<div className="timeGrid" onMouseMove={handleMouseMove}>
			<div className="bossAbilityWrapper">
				{[...new Set(bossAbilities.map((ability) => ability.name))].map(
					(uniqueAbilityName, index) => {
						const abilityEvents = bossAbilities.filter(
							(ability) => ability.name === uniqueAbilityName
						);
						return (
							<div key={index} className="bossAbilityRow">
								{abilityEvents.map((abilityEvent, index) => (
									<BossAbilityRow
										key={index}
										ability={abilityEvent}
										pixelsPerSecond={pixelsPerSecond}
									/>
								))}
							</div>
						);
					}
				)}
			</div>
			<TimeGridLines duration={duration} />
			<TimeIndicatorBar
				leftPosition={leftPosition}
				durationPosition={durationPosition}
			/>
			{players.map((player, index) => {
				const rgbaColor = getRGBAColor(player.class);
				return (
					<PlayerRow
						key={index}
						player={player}
						pixelsPerSecond={pixelsPerSecond}
						style={{ backgroundColor: rgbaColor }}
					/>
				);
			})}
		</div>
	);
}

export default TimeGrid;
