import { create } from 'zustand';
import abilities from './config/Abilities';

const useStore = create((set) => ({
  abilities,
  duration: 60 * 10,
  selectedIcons: [],
  currentTime: 0,
  players: [],
  roster: [], // Roster array
  addIcon: (icon) => 
    set((state) => ({ 
      selectedIcons: [...state.selectedIcons, { ...icon, time: state.currentTime }],
    })),
  setCurrentTime: (time) =>
    set(() => ({
      currentTime: time,
    })),
  addPlayer: (player) => 
    set((state) => ({
      players: [...state.players, player],
    })),
  addToRoster: (player) =>
    set((state) => {
      let sortedRoster = [...state.roster, player];
      sortedRoster.sort((a, b) => {
        const roleOrder = ["healer", "tank", "melee", "range"];
        return roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role);
      });
      return { roster: sortedRoster };
    }),
  addAbilityToPlayer: (ability, playerName) => 
    set((state) => {
      const updatedPlayers = state.players.map(player => {
        if (player.name === playerName) {
          return { ...player, selectedAbilities: [...player.selectedAbilities, { ...ability, time: state.currentTime }] };
        }
        return player;
      });
      return { players: updatedPlayers };
    }),
  removePlayerFromRoster: (name) => {
    set((state) => {
      // Filter out the player to delete from the roster array
      const updatedRoster = state.roster.filter((player) => player.name !== name);
      return { ...state, roster: updatedRoster };
    });
  },
  removePlayer: (name) => {
    set((state) => {
      // Filter out the player to delete from the players array
      const updatedPlayers = state.players.filter((player) => player.name !== name);
      return { ...state, players: updatedPlayers };
    });
  },
}));

export default useStore;
