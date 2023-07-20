import React, { useState, useEffect } from "react";
import { motion, useDragControls } from "framer-motion";
import { useAbilities } from "../AbilitiesContext";

function WowheadIcon({
	name,
	icon,
	player,
	className,
	onClick,
	size,
	drag,
	constraintsRef,
	pixelsPerSecond,
	durationPosition,
	setLeftPosition
}) {
	// eslint-disable-next-line
	const [isDragging, setIsDragging] = useState(false);
	const [initialPosition, setInitialPosition] = useState(0);
	const [time, setTime] = useState(false);
	const { abilities, setAbilities } = useAbilities();
	const controls = useDragControls();

	function startDrag(event) {
		controls.start(event, { snapToCursor: true });
	}

	const handleDragStart = (_, info) => {
		setIsDragging(true);
		setInitialPosition(info.point.x); 
		controls.start(info, { snapToCursor: true });
	};

	const handleDragEnd = (_, info) => {
		setIsDragging(false);
		const timeChangePixel = info.point.x - initialPosition; 
		const timeChangeSecond = Math.round(timeChangePixel / pixelsPerSecond);
		setLeftPosition(timeChangeSecond); 
		const timeSeconds = timeInSeconds(durationPosition);
		setTime(timeSeconds);
		const newAbilities = abilities.map((ability) => {
			if (
				ability.name === name &&
				ability.player.name === player 
				//ability.time === time
			) {
				return {
					...ability,
					time: timeSeconds,
				};
			}
			return ability;
		});
		setAbilities(newAbilities);
	};

	useEffect(() => {
		//console.log("final time " + time);
	}, [time]);

	return (
		<motion.img
			src={`https://wow.zamimg.com/images/wow/icons/medium/${icon}.jpg`}
			style={{ width: size }}
			className={className}
			alt={name}
			onClick={onClick}
			onDragStart={handleDragStart}
			onPointerDown = {startDrag}
			drag={drag ? "x" : false}
			dragControls={controls}
			dragElastic={0}
			dragMomentum={false}
			dragConstraints={constraintsRef}
			whileHover={{ scale: 1.2 }}
			transition={{ type: "spring", stiffness: 1000, damping: 20 }}
			onDragEnd={handleDragEnd}
		/>
	);
}

export default WowheadIcon;

function timeInSeconds(duration) {
	let date = new Date(null);
	date.setSeconds(duration);
	let timeString = date.toISOString().substr(14, 5);
	return timeString;
}
