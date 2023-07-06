import React, { useState } from "react";
import { motion } from "framer-motion";

function WowheadIcon({
	name,
	className,
	onClick,
	size,
	drag,
	constraintsRef,
	pixelsPerSecond,
}) {
	const [isDragging, setIsDragging] = useState(false);
	const handleDragStart = () => setIsDragging(true);
	const handleDragEnd = () => setIsDragging(false);

	return (
		<motion.img
			src={`https://wow.zamimg.com/images/wow/icons/medium/${name}.jpg`}
			style={{ width: size }}
			className={className}
			alt={name}
			onClick={onClick}
			onDragStart={handleDragStart}
			drag={drag ? "x" : false}
			dragElastic={0}
			dragMomentum={false}
			dragConstraints={constraintsRef}
			whileHover={{ scale: 1.2 }}
			transition={{ type: "spring", stiffness: 1000, damping: 20 }}
			onDragEnd={(event, info) => {
				handleDragEnd();
				// calculate new time based on pixelsPerSecond and save
			}}
		/>
	);
}

export default WowheadIcon;
