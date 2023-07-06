
const Bosses = {
	Boss1: {
		name: "Boss1",
		abilities: [
			{
				name: "Ability1",
				icon: "inv_cosmicvoid_debuff",
				timers: [10, 120, 230, 340, 450], // times in seconds
			},
			{
				name: "Ability2",
				icon: "ability_evoker_oppressingroar",
				timers: [40, 150, 270, 390, 470], // times in seconds
			},
			{
				name: "Ability3",
				icon: "ability_evoker_essenceburst2",
				timers: [40, 50, 170, 290, 370], // times in seconds
			},
			// Add more abilities as needed...
		],
	},
	// Add more bosses as needed...
};

export default Bosses;
