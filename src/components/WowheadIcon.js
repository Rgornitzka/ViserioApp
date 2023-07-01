import React from "react";

/**
 * Component representing a Wowhead icon.
 * @param {Object} props - Component props.
 * @param {string} props.name - Name of the icon.
 * @param {string} props.className - Additional class name for styling.
 * @param {string} props.size - Size of the icon.
 * @param {Function} props.onClick - Function to handle icon click.
 */
function WowheadIcon({ name, className, onClick, size}) {
  console.log(name);

  return (
    <img
      src={`https://wow.zamimg.com/images/wow/icons/medium/${name}.jpg`}
      style={{ width: size }}
      className={className}
      alt={name}
      onClick={onClick}
    />
  );
}

export default WowheadIcon;
