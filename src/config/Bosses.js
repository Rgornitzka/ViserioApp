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
								timers: [10, 120, 230], // times in seconds for Phase 1
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
								timers: [40, 150, 270], // times in seconds for Phase 2
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
								timers: [10, 120, 230, 340, 450], // times in seconds for Phase 1
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
								timers: [40, 150, 270, 390, 470], // times in seconds for Phase 2
								dynamicTrigger: "value2",
							},
							{
								name: "Ability3",
								icon: "spell_fire_moltenblood",
								timers: [40, 150, 270], // times in seconds for Phase 2
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
								timers: [40, 50, 170, 290, 370], // times in seconds for Phase 3
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
