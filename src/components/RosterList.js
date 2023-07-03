import React from 'react';
import useStore from '../store';
import CLASSCOLORS from '../config/ClassColors';
import '../CSSFiles/RosterList.css';
import DeleteIcon from './DeleteIcon';
import '../CSSFiles/DeletePlayer.css';

function RosterList() {
  const { roster, removePlayerFromRoster, addPlayerFromRoster } = useStore();

  const handleDeleteClick = (playerName) => {
    removePlayerFromRoster(playerName);
  };

  const handlePlayerClick = (playerName) => {
    addPlayerFromRoster(playerName);
  }

  console.log('rosterlist', roster);
  return (
    <div className="roster">
      <h3>Roster</h3>
      {roster?.map((player, index) => {
        const playerColor = CLASSCOLORS[player.class.toUpperCase()]; // Get player's class color
        const [red, green, blue] = playerColor; // Destructure the RGB values
        const rgbaColor = `rgba(${red}, ${green}, ${blue}, 0.2)`; // Construct the RGBA color value

        return (
          <div
            key={index}
            style={{ backgroundColor: rgbaColor }}
            className="roosterPlayer"
            onClick={() => handlePlayerClick(player.name)}
          >
          <div key={index} style={{ backgroundColor: rgbaColor }} className="roosterPlayer">
            <div className="roosterPlayerHeader">
              <span>{player.name} - {player.class}</span>
              <DeleteIcon onClick={() => handleDeleteClick(player.name)} className="roster-delete-icon"/>
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default RosterList;
