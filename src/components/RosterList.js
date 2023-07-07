import React from 'react';
import useStore from '../store';
import CLASSCOLORS from '../config/ClassColors';
import DeleteIcon from './DeleteIcon';
import '../CSSFiles/RosterList.css';
import '../CSSFiles/DeletePlayer.css';

function RosterList() {
  const { roster, removePlayerFromRoster, addPlayerFromRoster } = useStore();

  const handleDeleteClick = (playerName) => {
    removePlayerFromRoster(playerName);
  };

  const handlePlayerClick = (playerName) => {
    addPlayerFromRoster(playerName);
  }

  return (
    <div className="roster">
      <div className="roster-title">Roster</div>
      {roster?.map((player, index) => {
        const playerColor = CLASSCOLORS[player.class.toUpperCase()]; // Get player's class color
        const [red, green, blue] = playerColor; // Destructure the RGB values
        const rgbaColor = `rgba(${red}, ${green}, ${blue}, 0.1)`; // Construct the RGBA color value

        return (
          <div
            key={index}
            style={{ backgroundColor: rgbaColor }}
            onClick={() => handlePlayerClick(player.name)}
          >
          <div key={index} style={{ backgroundColor: rgbaColor }} className="roster-player">
            <div className="roster-player-header">
              <span>{player.name}</span>
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
