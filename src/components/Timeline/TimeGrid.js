import React, { useEffect, useState } from "react";
import useStore from "../../store";
import '../../CSSFiles/TimeGrid.css';
import TimeIndicatorBar from './TimeIndicatorBar';
import IconOverlay from './IconOverlay';
import TimeGridLines from './TimeGridLines';
import AbilityRow from "./AbilityRow";
import PlayerRow from "./PlayerRow";
import CLASSCOLORS from '../../config/ClassColors';

function TimeGrid({ panelRef }) {
  const { duration, selectedIcons, players } = useStore(state => state);
  const [leftPosition, setLeftPosition] = useState(0);
  const [durationPosition, setDurationPosition] = useState(0);

  useEffect(() => {
    if (panelRef.current) {
      const panelWidth = panelRef.current.offsetWidth;
      console.log('panelWidth', panelWidth);
    }
  }, [panelRef]);

  const handleMouseMove = (e) => {
    const rect = panelRef.current.getBoundingClientRect();
    setLeftPosition(e.clientX - rect.left);
    const positionPercentage = (e.clientX - rect.left) / rect.width;
    setDurationPosition(positionPercentage * duration);
  }

  const pixelsPerSecond = panelRef.current ? panelRef.current.offsetWidth / duration : 0;

  return (
    <div className="timeGrid" onMouseMove={handleMouseMove}>
      <TimeGridLines duration={duration} />
      <TimeIndicatorBar leftPosition={leftPosition} durationPosition={durationPosition} />
      {players.map((player, index) => {
        const uniqueAbilities = Array.from(new Set(player.selectedAbilities.map(a => a.name)));

        return (
          <div key={index} style={{backgroundColor: `#${CLASSCOLORS[player.class.toUpperCase()]}`}}>
            <PlayerRow player={player} />
            {uniqueAbilities.map((abilityName, i) => {
              const abilities = player.selectedAbilities.filter(a => a.name === abilityName);
              return <AbilityRow key={i} abilities={abilities} pixelsPerSecond={pixelsPerSecond} />;
            })}
          </div>
        );
      })}
      <IconOverlay selectedIcons={selectedIcons} pixelsPerSecond={pixelsPerSecond} />
    </div>
  );
}

export default TimeGrid;
