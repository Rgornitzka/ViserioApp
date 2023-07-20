class Ability {
	constructor() {
		this.icon = "";
		this.cooldown = 0;
		this.duration = 0;
		this.spellId = 0;
		this.shortName = "";
		this.name = "";
		this.wowheadLink = "";
		this.time = null; 
		this.player = ""; 
	}

	setCooldown(cd) {
		this.cooldown = cd;
		return this;
	}

	setDuration(duration) {
		this.duration = duration;
		return this;
	}

	setIcon(icon) {
		this.icon = icon;
		return this;
	}

	setSpellId(spellId) {
		this.spellId = spellId;
		return this;
	}

	setName(name) {
		this.name = name;
		return this;
	}

	setShortName(shortName) {
		this.shortName = shortName;
		return this;
	}

	setWowheadLink(wowheadLink) {
		this.wowheadLink = wowheadLink;
		return this;
	}

	setTime(time) {
		this.time = time;
		return this;
	}

	setPlayer(player) {
		this.player = player;
		return this;
	}
}

export default Ability;
