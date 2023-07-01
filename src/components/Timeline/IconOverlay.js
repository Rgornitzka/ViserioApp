import React from 'react';
import WowheadIcon from '../WowheadIcon';
import '../../CSSFiles/IconOverlay.css';

function IconOverlay({ selectedIcons, pixelsPerSecond }) {
  const iconGroups = selectedIcons.reduce((groups, icon) => {
    if (!groups[icon.name]) {
      groups[icon.name] = [];
    }
    groups[icon.name].push(icon);
    return groups;
  }, {});

  return (
    <div className="iconOverlay">
      {Object.entries(iconGroups).map(([iconName, icons], index) => (
        <div key={index} className="iconRow" style={{ top: index * 50 }}>
          {icons.map((icon, index) => (
            <WowheadIcon
              key={index}
              name={icon.icon}
              alt={icon.name}
              style={{ position: 'absolute', left: icon.time * pixelsPerSecond }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default IconOverlay;
