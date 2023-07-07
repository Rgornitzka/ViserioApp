const Bosses = {
	Boss1: {
		name: "Sarkareth",
		difficulty: {
			heroic: {
				phases: [
					{
						name: "1",
						abilities: [
							{
								name: "Ability1",
								icon: "inv_cosmicvoid_debuff",
								timers: [10, 50, 90], // times in seconds for Phase 1
								dynamicTrigger: "value1",
							},
							// Add more abilities for Phase 1 as needed...
						],
					},
					{
						name: "1",
						abilities: [
							{
								name: "Ability2",
								icon: "ability_evoker_oppressingroar",
								timers: [20, 60, 80], // times in seconds for Phase 2
								dynamicTrigger: "value2",
							},
							// Add more abilities for Phase 2 as needed...
						],
					},
					// Add more phases for Heroic difficulty as needed...
				],
			},
			mythic: {
				phases: [
					{
						name: "1",
						abilities: [
							{
								name: "Ability1",
								icon: "inv_cosmicvoid_debuff",
								timers: [10, 50, 90], // times in seconds for Phase 1
								dynamicTrigger: "value1",
							},
							// Add more abilities for Phase 1 as needed...
						],
					},
					{
						name: "2",
						abilities: [
							{
								name: "Ability2",
								icon: "ability_evoker_oppressingroar",
								timers: [100, 150, 200, 250, 300], // times in seconds for Phase 2
								dynamicTrigger: "value2",
							},
							{
								name: "Ability3",
								icon: "spell_fire_moltenblood",
								timers: [120, 150, 180, 210, 240, 270, 300], // times in seconds for Phase 2
								dynamicTrigger: "value2",
							},
							// Add more abilities for Phase 2 as needed...
						],
					},
					{
						name: "3",
						abilities: [
							{
								name: "Ability4",
								icon: "ability_evoker_essenceburst2",
								timers: [320, 350, 370, 390, 410], // times in seconds for Phase 3
								dynamicTrigger: "value3",
							},
							// Add more abilities for Phase 3 as needed...
						],
					},
					// Add more phases for Mythic difficulty as needed...
				],
			},
			// Add more difficulties as needed...
		},
	},
	// Add more bosses as needed...
};

export default Bosses;
