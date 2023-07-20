import React, { useRef, useState, useEffect } from "react";
import WowheadIcon from "../../Icons/WowheadIcon";
import "../../../CSSFiles/Timeline/AbilityRow.css";

function AbilityRow({ abilities, pixelsPerSecond, durationPosition, leftPosition, setLeftPosition, player}) {
	const constraintsRef = useRef(null);

	// Use state to store the current position of the mouse
	const [mousePosition, setMousePosition] = useState(0);

	const handleMouseMove = (e) => {
		setMousePosition(e.clientX);
	};

	// Use the mouse move event to update the position
	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	// Ensure abilities is an array
	if (!Array.isArray(abilities)) {
		console.error("Abilities is not an array:", abilities);
		return null;
	}

	return (
		<div
			className="abilityRow"
			ref={constraintsRef}
			onMouseMove={handleMouseMove}
		>
			{abilities.map((ability, index) => (
				<WowheadIcon
					key={index}
					name={ability.name}
					icon={ability.icon}
					player={player.name}
					size="1rem"
					constraintsRef={constraintsRef}
					mousePosition={mousePosition}
					ability={ability}
					pixelsPerSecond={pixelsPerSecond}
					drag={true}
					leftPosition={leftPosition}
					durationPosition={durationPosition}
					setLeftPosition={setLeftPosition}
				/>
			))}
		</div>
	);
}

export default AbilityRow;
