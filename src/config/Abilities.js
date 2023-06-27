import Ability from './Ability';
import CLASSES from './Classes';

// Define abilities object
const abilities = {
  [CLASSES.GENERAL]: [
    new Ability()
      .setCooldown(60)
      .setName('1 Minute Cooldown')
      .setShortName('Defensive(1:00)')
      .setSpellId(323764)
      .setIcon('ability_ardenweald_druid')
      .setWowheadLink('https://www.wowhead.com/spell=323764/convoke-the-spirits#icon:ability_ardenweald_druid'),

    new Ability()
      .setCooldown(120)
      .setName('Rewind 3 min')
      .setShortName('Rewind')
      .setSpellId(363534)
      .setIcon('ability_evoker_rewind')
      .setWowheadLink('https://www.wowhead.com/beta/spell=363534/rewind'),
    // ...additional abilities
  ],
  // ...additional classes
};

export default abilities;
