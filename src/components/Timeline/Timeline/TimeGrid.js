import React, { useState, useEffect } from "react";
import useStore from "../../../store";
import "../../../CSSFiles/Timeline/TimeGrid.css";
import TimeIndicatorBar from "./TimeIndicatorBar";
import TimeGridLines from "./TimeGridLines";
import PlayerRow from "../Player/PlayerRow";
import CLASSCOLORS from "../../../config/ClassColors";
import BossAbilityRow from "../Boss/BossAbilityRow";


function getRGBAColor(playerClass, alpha = 0.2) {
	const playerColour = CLASSCOLORS[playerClass.toUpperCase()]; 
	const [red, green, blue] = playerColour; 
	return `rgba(${red}, ${green}, ${blue}, ${alpha})`; 
}

function TimeGrid({ panelRef }) {
	const { fightDurationInSeconds, players } = useStore((state) => state);
	const [leftPosition, setLeftPosition] = useState(0);
	const [durationPosition, setDurationPosition] = useState(0);
	const bossAbilities = useStore((state) => state.bossAbilities);

	const handleMouseMove = (e) => {
		const rect = panelRef.current.getBoundingClientRect();
		setLeftPosition(e.clientX - rect.left);
		const positionPercentage = (e.clientX - rect.left) / rect.width;
		setDurationPosition(positionPercentage * fightDurationInSeconds);
	};

	useEffect(() => {
		if (panelRef.current) {
			setLeftPosition(panelRef.current.offsetLeft);
		}
		console.log('leftpos', {setLeftPosition});
	}, [panelRef]);

	const pixelsPerSecond = panelRef.current
		? panelRef.current.offsetWidth / fightDurationInSeconds
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
			<TimeGridLines fightDurationInSeconds={fightDurationInSeconds} />
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
						durationPosition={durationPosition}
						leftPosition={leftPosition}
						setLeftPosition={setLeftPosition}
						style={{ backgroundColor: rgbaColor }}
					/>
				);
			})}
		</div>
	);
}

export default TimeGrid;
