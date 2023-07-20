import React from "react";
import TimeGrid from "./TimeGrid";
import WowheadIcon from "./WowheadIcon";
import useStore from "../store";

/**
 * REDUNDANT, TODO DELETE
 *
 * Component representing a container for the time grid and icon rows.
 */
function TimeGridContainer() {
	const { selectedIcons } = useStore((state) => ({
		selectedIcons: state.selectedIcons,
	}));

	// Group icons by their name
	const iconGroups = selectedIcons.reduce((groups, icon) => {
		if (!groups[icon.name]) {
			groups[icon.name] = [];
		}
		groups[icon.name].push(icon);
		return groups;
	}, {});

	return (
		<div className="timeGridContainer">
			{/* Render icon rows */}
			{Object.entries(iconGroups).map(([iconName, icons], index) => (
				<IconRow key={index} iconName={iconName} icons={icons} />
			))}
			{/* Render time grid */}
			<TimeGrid />
		</div>
	);
}

/**
 * Component representing a row of icons.
 * @param {Object} props - Component props.
 * @param {string} props.iconName - Name of the icon.
 * @param {Object[]} props.icons - Array of icon objects.
 */
function IconRow({ iconName, icons }) {
	return (
		<div className="iconRow" style={{ position: "relative", height: "64px" }}>
			{/* Render individual icons */}
			{icons.map((icon, index) => (
				<WowheadIcon
					key={index}
					name={icon.icon}
					alt={icon.name}
					style={{ position: "absolute", top: 0, left: index * 100 }}
				/>
			))}
		</div>
	);
}

export default TimeGridContainer;
