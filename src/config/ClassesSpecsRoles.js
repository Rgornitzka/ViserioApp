  const CLASSES_SPECS_ROLES = {
    EVERYONE: {
      specs: [
        { name: "EVERYONE", role: "everyone", icon: "" }
      ]
    },
    DEATHKNIGHT: {
      specs: [
        { name: "BLOOD", role: "tank", icon: "blood.png" },
        { name: "FROST", role: "melee", icon: "frost.png" },
        { name: "UNHOLY", role: "melee", icon: "unholy.png" }
      ]
    },
    DEMONHUNTER: {
      specs: [
        { name: "HAVOC", role: "melee", icon: "havoc.png" },
        { name: "VENGEANCE", role: "tank", icon: "vengeance.png" }
      ]
    },
    DRUID: {
      specs: [
        { name: "RESTORATION", role: "healer", icon: "restoration.png" },
        { name: "GUARDIAN", role: "tank", icon: "guardian.png" },
        { name: "FERAL", role: "melee", icon: "feral.png" },
        { name: "BALANCE", role: "range", icon: "balance.png" }
      ]
    },
    EVOKER: {
        specs: [
          { name: "PRESERVATION", role: "healer", icon: "preservation.png" },
          { name: "AUGMENTATION", role: "range", icon: "augmentation.png" },
          { name: "DEVASTATION", role: "range", icon: "devastation.png" }
        ]
      },
      HUNTER: {
        specs: [
          { name: "BEASTMASTERY", role: "range", icon: "beastmastery.png" },
          { name: "MARKSMANSHIP", role: "range", icon: "marksmanship.png" },
          { name: "SURVIVAL", role: "melee", icon: "survival.png" }
        ]
      },
      MAGE: {
        specs: [
          { name: "ARCANE", role: "range", icon: "arcane.png" },
          { name: "FIRE", role: "range", icon: "fire.png" },
          { name: "FROST", role: "range", icon: "frost.png" }
        ]
      },
      MONK: {
        specs: [
          { name: "MISTWEAVER", role: "healer", icon: "mistweaver.png" },
          { name: "BREWMASTER", role: "tank", icon: "brewmaster.png" },
          { name: "WINDWALKER", role: "melee", icon: "windwalker.png" }
        ]
      },
      PALADIN: {
        specs: [
          { name: "HOLY", role: "healer", icon: "holy.png" },
          { name: "PROTECTION", role: "tank", icon: "protection.png" },
          { name: "RETRIBUTION", role: "melee", icon: "retribution.png" }
        ]
      },
      PRIEST: {
        specs: [
          { name: "DISCIPLINE", role: "healer", icon: "discipline.png" },
          { name: "HOLY", role: "healer", icon: "holy.png" },
          { name: "SHADOW", role: "range", icon: "shadow.png" }
        ]
      },
      ROGUE: {
        specs: [
          { name: "ASSASSINATION", role: "melee", icon: "assassination.png" },
          { name: "OUTLAW", role: "melee", icon: "outlaw.png" },
          { name: "SUBTLETY", role: "melee", icon: "subtlety.png" }
        ]
      },
      SHAMAN: {
        specs: [
          { name: "RESTORATION", role: "healer", icon: "restoration.png" },
          { name: "ENHANCEMENT", role: "melee", icon: "enhancement.png" },
          { name: "ELEMENTAL", role: "range", icon: "elemental.png" }
        ]
      },
      WARLOCK: {
        specs: [
          { name: "AFFLICTION", role: "range", icon: "affliction.png" },
          { name: "DEMONOLOGY", role: "range", icon: "demonology.png" },
          { name: "DESTRUCTION", role: "range", icon: "destruction.png" }
        ]
      },
      WARRIOR: {
        specs: [
          { name: "PROTECTION", role: "tank", icon: "protection.png" },
          { name: "ARMS", role: "melee", icon: "arms.png" },
          { name: "FURY", role: "melee", icon: "fury.png" }
        ]
      },
    };
  
  export default CLASSES_SPECS_ROLES;
  