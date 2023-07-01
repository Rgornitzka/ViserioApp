import { create } from 'zustand';
import abilities from './config/Abilities';

const useStore = create((set) => ({
  abilities,
  duration: 60 * 10,
  selectedIcons: [],
  currentTime: 0,
  players: [], // Add players array to your store
  addIcon: (icon) => 
    set((state) => ({ 
      selectedIcons: [...state.selectedIcons, { ...icon, time: state.currentTime }],
    })),
  setCurrentTime: (time) =>
    set(() => ({
      currentTime: time,
    })),
  addPlayer: (player) => // Add addPlayer function to your store
    set((state) => ({
      players: [...state.players, player],
    })),

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
}));

export default useStore;
