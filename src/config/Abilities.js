import Ability from './Ability';
import CLASSES from './Classes';

// Define abilities object
const abilities = {
  [CLASSES.EVERYONE]: [
    new Ability()
    .setCooldown(120)
    .setDuration()
    .setName('Personals')
    .setShortName()
    .setIcon('inv_shield_06'),
  
    new Ability()
    .setCooldown(5940)
    .setDuration()
    .setName('Healthstone')
    .setShortName()
    .setSpellId(6262)
    .setIcon('warlock_-healthstone')
    .setWowheadLink('https://www.wowhead.com/item=5512/healthstone'),
  
    new Ability()
    .setCooldown(300)
    .setDuration()
    .setName('Healing Potion')
    .setShortName()
    .setSpellId(441)
    .setIcon('inv_potion_51')
    .setWowheadLink('https://www.wowhead.com/item=187802/cosmic-healing-potion'),
  
    new Ability()
    .setCooldown(90)
    .setDuration()
    .setName('Gateway')
    .setShortName()
    .setSpellId(111771)
    .setIcon('spell_warlock_demonicportal_green')
    .setWowheadLink('https://www.wowhead.com/spell=111771/demonic-gateway'),
  
  ],
  [CLASSES.DEATHKNIGHT]: [
    new Ability()
    .setCooldown(120)
    .setDuration()
    .setName('Anti Magic Zone')
    .setShortName()
    .setSpellId(51052)
    .setIcon('spell_deathknight_antimagiczone')
    .setWowheadLink('https://www.wowhead.com/spell=51052/anti-magic-zone'),
    new Ability()
    .setCooldown(60)
    .setDuration()
    .setName('Anti-Magic Shell')
    .setShortName()
    .setSpellId(48707)
    .setIcon('spell_shadow_antimagicshell')
    .setWowheadLink('https://www.wowhead.com/spell=48707/anti-magic-shell'),
    new Ability()
    .setCooldown(60)
    .setDuration()
    .setName('Anti-Magic Shell')
    .setShortName()
    .setSpellId(48707)
    .setIcon('spell_shadow_antimagicshell')
    .setWowheadLink('https://www.wowhead.com/wotlk/spell=48707/anti-magic-shell'),
  

  ],
  [CLASSES.DEMONHUNTER]: [
    new Ability()
      .setCooldown(180)
      .setDuration()
      .setName('Darkness')
      .setShortName('')
      .setSpellId(196718)
      .setIcon('ability_demonhunter_darkness')
      .setWowheadLink('https://www.wowhead.com/spell=196718/darkness'),    
      new Ability()
      .setCooldown(180)
      .setDuration()
      .setName('Netherwalk')
      .setShortName()
      .setSpellId(196555)
      .setIcon('spell_warlock_demonsoul')
      .setWowheadLink('https://www.wowhead.com/spell=196555/netherwalk'),
    

  ],
  [CLASSES.DRUID]: [
    new Ability()
    .setCooldown(60)
    .setDuration()
    .setName('Convoke the Spirits')
    .setShortName()
    .setSpellId(323764)
    .setIcon('ability_ardenweald_druid')
    .setWowheadLink('https://www.wowhead.com/spell=323764/convoke-the-spirits#icon:ability_ardenweald_druid'),
    new Ability()
    .setCooldown(90)
    .setDuration()
    .setName('Flourish')
    .setShortName()
    .setSpellId(197721)
    .setIcon('spell_druid_wildburst')
    .setWowheadLink('https://www.wowhead.com/spell=197721/flourish'),
    new Ability()
      .setCooldown(120)
      .setDuration()
      .setName('Tranquility')
      .setShortName('2m')
      .setSpellId(740)
      .setIcon('spell_nature_tranquility')
      .setWowheadLink('https://www.wowhead.com/spell=740/tranquility'),
    new Ability()
      .setCooldown(180)
      .setDuration()
      .setName('Incarnation: Tree of Life')
      .setShortName()
      .setSpellId(33891)
      .setIcon('ability_druid_improvedtreeform')
      .setWowheadLink('https://www.wowhead.com/spell=33891/incarnation-tree-of-life'),
      new Ability()
      .setCooldown(90)
      .setDuration()
      .setName('Ironbark')
      .setShortName()
      .setSpellId(102342)
      .setIcon('spell_druid_ironbark')
      .setWowheadLink('https://www.wowhead.com/spell=102342/ironbark'),
      new Ability()
      .setCooldown(60)
      .setDuration()
      .setName('Stampeding Roar')
      .setShortName()
      .setSpellId(77764)
      .setIcon('spell_druid_stampedingroar_cat')
      .setWowheadLink('https://www.wowhead.com/spell=77764/stampeding-roar'),
    
  ],
  [CLASSES.EVOKER]: [
    new Ability()
      .setCooldown(120)
      .setName('Rewind 3 min')
      .setShortName('Rewind')
      .setSpellId(363534)
      .setIcon('ability_evoker_rewind')
      .setWowheadLink('https://www.wowhead.com/beta/spell=363534/rewind'), 
    new Ability()
      .setCooldown(90)
      .setDuration()
      .setName('Natures Vigil')
      .setShortName()
      .setSpellId(124974)
      .setIcon('achievement_zone_feralas')
      .setWowheadLink('https://www.wowhead.com/beta/spell=124974/natures-vigil'),
    new Ability()
      .setCooldown(300)
      .setDuration()
      .setName('Heart of the Wild')
      .setShortName()
      .setSpellId(319454)
      .setIcon('spell_holy_blessingofagility')
      .setWowheadLink('https://www.wowhead.com/spell=319454/heart-of-the-wild'),
      new Ability()
      .setCooldown(60)
      .setDuration()
      .setName('Time Dilation')
      .setShortName()
      .setSpellId(357170)
      .setIcon('ability_evoker_timedilation')
      .setWowheadLink('https://www.wowhead.com/beta/spell=357170/time-dilation'),
      new Ability()
      .setCooldown(60)
      .setDuration()
      .setName('Rescue')
      .setShortName()
      .setSpellId(370665)
      .setIcon('ability_evoker_flywithme')
      .setWowheadLink('https://www.wowhead.com/spell=370665/rescue'),
      new Ability()
      .setCooldown(120)
      .setDuration()
      .setName('Time Spiral')
      .setShortName()
      .setSpellId(374968)
      .setIcon('ability_evoker_timespiral')
      .setWowheadLink('https://www.wowhead.com/beta/spell=374968/time-spiral'),
      new Ability()
      .setCooldown(1800)
      .setDuration()
      .setName('Ebon Might')
      .setShortName()
      .setSpellId(404269)
      .setIcon('spell_sarkareth')
      .setWowheadLink('https://www.wowhead.com/spell=404269/ebon-might'),
      new Ability()
      .setCooldown(120)
      .setDuration()
      .setName('Breath of Eons')
      .setShortName()
      .setSpellId(403631)
      .setIcon('ability_evoker_breathofeons')
      .setWowheadLink('https://www.wowhead.com/ptr-2/spell=403631/breath-of-eons'),
      new Ability()
      .setCooldown(1800)
      .setDuration()
      .setName('Blistering Scales')
      .setShortName()
      .setSpellId(360827)
      .setIcon('ability_evoker_blisteringscales')
      .setWowheadLink('https://www.wowhead.com/ptr-2/spell=360827/blistering-scales'),
      new Ability()
      .setCooldown(120)
      .setDuration()
      .setName('Bestow Weyrnstone')
      .setShortName()
      .setSpellId(408233)
      .setIcon('ability_evoker_bestowweyrnstone')
      .setWowheadLink('https://www.wowhead.com/ptr-2/spell=408233/bestow-weyrnstone'),
      new Ability()
      .setCooldown(180)
      .setDuration()
      .setName('Time Skip')
      .setShortName()
      .setSpellId(404977)
      .setIcon('ability_evoker_timeskip')
      .setWowheadLink('https://www.wowhead.com/ptr-2/spell=404977/time-skip'),
      new Ability()
      .setCooldown(720)
      .setDuration()
      .setName('Prescience')
      .setShortName()
      .setSpellId(409311)
      .setIcon('ability_evoker_prescience')
      .setWowheadLink('https://www.wowhead.com/ptr-2/spell=409311/prescience'),
      new Ability()
      .setCooldown(120)
      .setDuration()
      .setName('Spatial Paradox')
      .setShortName()
      .setSpellId(406732)
      .setIcon('ability_evoker_stretchtime')
      .setWowheadLink('https://www.wowhead.com/ptr-2/spell=406732/spatial-paradox'),
    
    ],
  [CLASSES.HUNTER]: [
    new Ability()
    .setCooldown(180)
    .setDuration()
    .setName('Aspect of the Turtle')
    .setShortName()
    .setSpellId(186265)
    .setIcon('ability_hunter_pet_turtle')
    .setWowheadLink('https://www.wowhead.com/spell=186265/aspect-of-the-turtle'),

  ],
  [CLASSES.MAGE]: [
new Ability()
  .setCooldown(240)
  .setDuration()
  .setName('Ice Block')
  .setShortName()
  .setSpellId(45438)
  .setIcon('spell_frost_frost')
  .setWowheadLink('https://www.wowhead.com/spell=45438/ice-block'),
  
  ],
  [CLASSES.MONK]: [
  new Ability()
    .setCooldown(165)
    .setDuration()
    .setName('Revival')
    .setShortName()
    .setSpellId(115310)
    .setIcon('spell_monk_revival')
    .setWowheadLink('https://www.wowhead.com/spell=115310/revival'),
  new Ability()
    .setCooldown(60)
    .setDuration()
    .setName('Invoke Yu\'lon')
    .setShortName('1m')
    .setSpellId(322118)
    .setIcon('ability_monk_dragonkick'),
  new Ability()
    .setCooldown(60)
    .setDuration()
    .setName('Invoke Chi-Ji')
    .setShortName('1m')
    .setSpellId(325197)
    .setIcon('inv_pet_cranegod')
    .setWowheadLink('https://www.wowhead.com/spell=325197/invoke-chi-ji-the-red-crane'),
  new Ability()
    .setCooldown(60)
    .setDuration()
    .setName('Bonedust Brew')
    .setShortName()
    .setSpellId(325216)
    .setIcon('ability_maldraxxus_monk')
    .setWowheadLink('https://www.wowhead.com/spell=325216/bonedust-brew'),
    new Ability()
    .setCooldown(180)
    .setDuration()
    .setName('Life Cocoon')
    .setShortName()
    .setSpellId(116849)
    .setIcon('ability_monk_chicocoon')
    .setWowheadLink('https://www.wowhead.com/spell=116849/life-cocoon'),
    new Ability()
    .setCooldown(180)
    .setDuration()
    .setName("Tiger's Lust")
    .setShortName()
    .setSpellId(116841)
    .setIcon('ability_monk_tigerslust')
    .setWowheadLink('https://www.wowhead.com/spell=116841/tigers-lust'),
  
  ],
  [CLASSES.PALADIN]: [
    new Ability()
    .setCooldown(300)
    .setDuration()
    .setName('Spellwarding')
    .setShortName()
    .setSpellId(204018)
    .setIcon('spell_holy_blessingofprotection')
    .setWowheadLink('https://www.wowhead.com/spell=204018/blessing-of-spellwarding'),
    new Ability()
    .setCooldown(300)
    .setDuration()
    .setName('Lay on Hands')
    .setShortName()
    .setSpellId(633)
    .setIcon('spell_holy_layonhands')
    .setWowheadLink('https://www.wowhead.com/spell=633/lay-on-hands'),
    new Ability()
    .setCooldown(60)
    .setDuration()
    .setName('Blessing of Sacrifice')
    .setShortName()
    .setSpellId(199448)
    .setIcon('spell_holy_sealofsacrifice')
    .setWowheadLink('https://www.wowhead.com/spell=199448/blessing-of-sacrifice'),
    new Ability()
    .setCooldown(300)
    .setDuration()
    .setName('Blessing of Protection')
    .setShortName()
    .setSpellId(1022)
    .setIcon('spell_holy_sealofprotection')
    .setWowheadLink('https://www.wowhead.com/spell=1022/blessing-of-protection'),
    new Ability()
    .setCooldown(300)
    .setDuration()
    .setName('Blessing of Freedom')
    .setShortName()
    .setSpellId(1044)
    .setIcon('spell_holy_sealofvalor')
    .setWowheadLink('https://www.wowhead.com/spell=1044/blessing-of-freedom'),
    new Ability()
    .setCooldown(300)
    .setDuration()
    .setName('Divine Shield')
    .setShortName()
    .setSpellId(642)
    .setIcon('spell_holy_divineshield')
    .setWowheadLink('https://www.wowhead.com/spell=642/divine-shield'),
  
  ],
  [CLASSES.PRIEST]: [
    new Ability()
    .setCooldown(180)
    .setDuration()
    .setName('Pain Suppression')
    .setShortName()
    .setSpellId(33206)
    .setIcon('spell_holy_painsupression')
    .setWowheadLink('https://www.wowhead.com/spell=69910/pain-suppression'),
    new Ability()
    .setCooldown(180)
    .setDuration()
    .setName('Guardian Spirit')
    .setShortName()
    .setSpellId(47788)
    .setIcon('spell_holy_guardianspirit')
    .setWowheadLink('https://www.wowhead.com/spell=47788/guardian-spirit'),
    new Ability()
    .setCooldown(90)
    .setDuration()
    .setName('Leap of Faith')
    .setShortName()
    .setSpellId(73325)
    .setIcon('priest_spell_leapoffaith_a')
    .setWowheadLink('https://www.wowhead.com/spell=73325/leap-of-faith'),
  
  ],
  [CLASSES.ROGUE]: [
    new Ability()
    .setCooldown(120)
    .setDuration()
    .setName('Cloak of Shadows')
    .setShortName()
    .setSpellId(31224)
    .setIcon('spell_shadow_nethercloak')
    .setWowheadLink('https://www.wowhead.com/spell=31224/cloak-of-shadows'),
  
  ],
  [CLASSES.SHAMAN]: [
    new Ability()
      .setCooldown(120)
      .setDuration()
      .setName('Ancestral Guidance')
      .setShortName()
      .setSpellId(108281)
      .setIcon('ability_shaman_ancestralguidance')
      .setWowheadLink('https://www.wowhead.com/spell=108281/ancestral-guidance'),
    new Ability()
      .setCooldown(180)
      .setDuration()
      .setName('Mana Tide Totem')
      .setShortName()
      .setSpellId(16191)
      .setIcon('spell_frost_summonwaterelemental')
      .setWowheadLink('https://www.wowhead.com/spell=16191/mana-tide-totem'),
    new Ability()
      .setCooldown(45)
      .setDuration()
      .setName('Cloudburst Totem')
      .setShortName()
      .setSpellId(157153)
      .setIcon('ability_shaman_condensationtotem')
      .setWowheadLink('https://www.wowhead.com/spell=/cloudburst-totem'),
      new Ability()
      .setCooldown(120)
      .setDuration()
      .setName('Wind Rush Totem')
      .setShortName()
      .setSpellId(192077)
      .setIcon('ability_shaman_windwalktotem')
      .setWowheadLink('https://www.wowhead.com/spell=192077/wind-rush-totem'),
    
  ],
  [CLASSES.WARRIOR]: [
  new Ability()
    .setCooldown(180)
    .setDuration()
    .setName('Rallying Cry')
    .setShortName()
    .setSpellId(97462)
    .setIcon('ability_warrior_rallyingcry')
    .setWowheadLink('https://www.wowhead.com/spell=97462/rallying-cry'),
    new Ability()
    .setCooldown(1500)
    .setDuration()
    .setName('Spell Reflection')
    .setShortName()
    .setSpellId(23920)
    .setIcon('ability_warrior_shieldreflection')
    .setWowheadLink('https://www.wowhead.com/spell=23920/spell-reflection'),
  
  ],

  [CLASSES.WARLOCK]: [
    new Ability()
    .setCooldown(90)
    .setDuration()
    .setName('Gateway')
    .setShortName()
    .setSpellId(111771)
    .setIcon('spell_warlock_demonicportal_green')
    .setWowheadLink('https://www.wowhead.com/spell=111771/demonic-gateway'),
  
    ],

  // ...additional classes
};

export default abilities;