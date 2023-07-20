import { create } from "zustand";
import abilities from "./config/Abilities";
import bosses from "./config/Bosses";

const useStore = create((set) => ({
	abilities,
	fightDurationInSeconds: 60 * 10,
	selectedIcons: [],
	currentTime: 0,
	players: [],
	roster: [],
	bosses,
	selectedBossAbilities: [],
	bossAbilities: [],
	positionTimes: {},
	panelRef: null,
	panelWidth: 0,
	setPanelRef: (ref) => set(() => ({ panelRef: ref })),
	setPanelWidth: (width) => set(() => ({ panelWidth: width })),

	addIcon: (icon) =>
		set((state) => ({
			selectedIcons: [
				...state.selectedIcons,
				{ ...icon, time: state.currentTime },
			],
		})),
	setCurrentTime: (time) =>
		set(() => ({
			currentTime: time,
		})),
	addPlayer: (player) =>
		set((state) => ({
			players: [
				...state.players,
				{ ...player, selectedAbilities: player.selectedAbilities || [] },
			],
		})),
	addToRoster: (player) =>
		set((state) => {
			const specAbilities = generateAbilities(player.class, player.spec);
			let sortedRoster = [
				...state.roster,
				{ ...player, abilities: specAbilities },
			];
			sortedRoster.sort((a, b) => {
				const roleOrder = ["healer", "tank", "melee", "range"];
				return roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role);
			});
			return { roster: sortedRoster };
		}),
	addPlayerFromRoster: (playerName) =>
		set((state) => {
			const playerToAdd = state.roster.find(
				(player) => player.name === playerName
			);
			if (playerToAdd) {
				return { players: [...state.players, playerToAdd] };
			}
			return state;
		}),
	addAbilityToPlayer: (ability, playerName) =>
		set((state) => {
			const updatedPlayers = state.players.map((player) => {
				if (player.name === playerName) {
					// Ensure selectedAbilities is always an array
					const selectedAbilities = Array.isArray(player.selectedAbilities)
						? player.selectedAbilities
						: [];
					// Add the new ability to the list and sort it based on the cooldown
					const updatedAbilities = [...selectedAbilities, { ...ability }];
					return {
						...player,
						selectedAbilities: updatedAbilities,
					};
				}
				return player;
			});
			return { players: updatedPlayers };
		}),
	removePlayerFromRoster: (name) => {
		set((state) => {
			// Filter out the player to delete from the roster array
			const updatedRoster = state.roster.filter(
				(player) => player.name !== name
			);
			return { ...state, roster: updatedRoster };
		});
	},
	removePlayer: (name) => {
		set((state) => {
			// Filter out the player to delete from the players array
			const updatedPlayers = state.players.filter(
				(player) => player.name !== name
			);
			return { ...state, players: updatedPlayers };
		});
	},
	addBossAbility: (bossAbility, times = []) =>
		set((state) => ({
			bossAbilities: [
				...state.bossAbilities,
				...times.map((time) => ({ ...bossAbility, time })),
			],
		})),
	toggleBossAbility: (bossAbility, times = []) =>
		set((state) => {
			const abilityExists = state.bossAbilities.some(
				(ability) => ability.name === bossAbility.name
			);

			if (abilityExists) {
				return {
					bossAbilities: state.bossAbilities.filter(
						(ability) => ability.name !== bossAbility.name
					),
				};
			} else {
				return {
					bossAbilities: [
						...state.bossAbilities,
						...times.map((time) => ({ ...bossAbility, time })),
					],
				};
			}
		}),
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
