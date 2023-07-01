class Ability {
  constructor() {
    // Initialize properties
    this.icon = '';
    this.cooldown = 0;
    this.spellId = 0;
    this.shortName = '';
    this.name = '';
    this.wowheadLink = '';
  }

  /**
   * Set the cooldown of the ability.
   * @param {number} cd - Cooldown value in seconds.
   * @returns {Ability} - The updated Ability instance.
   */
  setCooldown(cd) {
    this.cooldown = cd;
    return this;
  }

  /**
   * Set the icon of the ability.
   * @param {string} icon - Icon name or URL.
   * @returns {Ability} - The updated Ability instance.
   */
  setIcon(icon) {
    this.icon = icon;
    return this;
  }

  /**
   * Set the spell ID of the ability.
   * @param {number} spellId - Spell ID value.
   * @returns {Ability} - The updated Ability instance.
   */
  setSpellId(spellId) {
    this.spellId = spellId;
    return this;
  }

  /**
   * Set the name of the ability.
   * @param {string} name - Full name of the ability.
   * @returns {Ability} - The updated Ability instance.
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Set the short name of the ability.
   * @param {string} shortName - Short name or description of the ability.
   * @returns {Ability} - The updated Ability instance.
   */
  setShortName(shortName) {
    this.shortName = shortName;
    return this;
  }

  /**
   * Set the Wowhead link of the ability.
   * @param {string} wowheadLink - Wowhead link for the ability.
   * @returns {Ability} - The updated Ability instance.
   */
  setWowheadLink(wowheadLink) {
    this.wowheadLink = wowheadLink;
    return this;
  }
}

export default Ability;