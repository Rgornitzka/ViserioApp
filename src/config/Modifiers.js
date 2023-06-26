const modifiers = {
    setCooldown: function(cd) {
      return function(icon) {
        icon.cooldown = cd;
        return icon;
      };
    },
    setPath: function(path) {
      return function(icon) {
        icon.path = path;
        return icon;
      };
    },
    setName: function(name) {
      return function(icon) {
        icon.name = name;
        return icon;
      };
    },
    setSpellId: function(spellId) {
      return function(icon) {
        icon.spellId = spellId;
        return icon;
      };
    },
    setShortName: function(shortName) {
      return function(icon) {
        icon.shortName = shortName;
        return icon;
      };
    },
    setWowheadLink: function(wowheadLink) {
      return function(icon) {
        icon.wowheadLink = wowheadLink;
        return icon;
      };
    },
  };
  
  export default modifiers;
  