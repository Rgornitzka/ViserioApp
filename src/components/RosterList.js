import React from 'react';
import useStore from '../store';
import CLASSCOLORS from '../config/ClassColors';
import '../CSSFiles/RosterList.css';

function RosterList() {
    const { roster } = useStore();
  
    return (
      <div>
        <h3>Roster:</h3>
        {roster.map((player, index) => {
          const playerColor = CLASSCOLORS[player.class.toUpperCase()]; // Get player's class color
          const [red, green, blue] = playerColor; // Destructure the RGB values
          const rgbaColor = `rgba(${red}, ${green}, ${blue}, 0.2)`; // Construct the RGBA color value
  
          return (
            <p key={index} style={{ backgroundColor: rgbaColor }} className="rosterPlayer">
              {player.name} - {player.class}
            </p>
          );
        })}
      </div>
    );
  }
  
  export default RosterList;