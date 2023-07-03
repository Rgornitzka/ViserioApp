import { create } from 'zustand';
import abilities from './config/Abilities';

const useStore = create((set) => ({
  abilities,
  duration: 60 * 10,
  selectedIcons: [],
  currentTime: 0,
  players: [],
  roster: [],
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
      players: [...state.players, { ...player, selectedAbilities: player.selectedAbilities || [] }],
    })),
    addToRoster: (player) =>
    set((state) => {
      const specAbilities = generateAbilities(player.class, player.spec);
      let sortedRoster = [...state.roster, { ...player, abilities: specAbilities }];
      sortedRoster.sort((a, b) => {
        const roleOrder = ["healer", "tank", "melee", "range"];
        return roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role);
      });
      return { roster: sortedRoster };
    }),
    addPlayerFromRoster: (playerName) =>
      set((state) => {
        const playerToAdd = state.roster.find(player => player.name === playerName);
        if (playerToAdd) {
          return { players: [...state.players, playerToAdd] };
        }
        return state;
      }),
    addAbilityToPlayer: (ability, playerName) => 
      set((state) => {
        const updatedPlayers = state.players.map(player => {
          if (player.name === playerName) {
            // Ensure selectedAbilities is always an array
            const selectedAbilities = Array.isArray(player.selectedAbilities) ? player.selectedAbilities : [];
            return { ...player, selectedAbilities: [...selectedAbilities, { ...ability, time: state.currentTime }] };
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


const generateAbilities = (playerClass, playerSpec) => {
  const classAbilities = abilities[playerClass];
  if (!classAbilities) {
    alert(`Abilities not defined for ${playerClass}`);
    return [];
  }

  const specAbilities = classAbilities[playerSpec];
  if (!specAbilities) {
    alert(`Abilities not defined for ${playerClass} - ${playerSpec}`);
    return [];
  }

  return specAbilities;
};

export default useStore;