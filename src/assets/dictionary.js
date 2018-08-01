/*
|--------------------------------------------------------------------------
| Dictionary
|--------------------------------------------------------------------------
*/

// this file will have the text for the moves and beings

/*
|--------------------------------------------------------------------------
| Elements
|--------------------------------------------------------------------------
*/

// elements in an array for easy indexing
const elements = [
  'Fire', 'Water', 'Air', 'Earth', 'Thunder', 'Ice', 'Wood', 'Metal', 'Light', 'Dark', 'Chaos', 'Fallen', 'Magick', 'Evil', 'Death', 'End',
];

/*
|--------------------------------------------------------------------------
| Names
|--------------------------------------------------------------------------
*/

// list of names
const beings = {
  [elements[0]]: 'Fire',
  [elements[1]]: 'Water',
  [elements[2]]: 'Air',
  [elements[3]]: 'Earth',
  [elements[4]]: 'Thunder',
  [elements[5]]: 'Ice',
  [elements[6]]: 'Wood',
  [elements[7]]: 'Metal',
  [elements[8]]: 'Light',
  [elements[9]]: 'Dark',
  [elements[10]]: 'Abraxes',
  [elements[11]]: 'Demiurge',
  [elements[12]]: 'Goetia',
  [elements[13]]: 'Angra Mainyu',
  [elements[14]]: 'The Beast',
  [elements[15]]: 'Armageddon',
};

/*
|--------------------------------------------------------------------------
| Move List
|--------------------------------------------------------------------------
*/

const movelist = {
  // fire spells
  [elements[0]]: ['Flamberge', 'Magma Burst', 'Flame Starter', 'Inferno'],
  // water spells
  [elements[1]]: ['Wave Hammer', 'Aqua Burst', 'Cleaning Water', 'Tsunami'],
  // air spells
  [elements[2]]: ['Air Blade', 'Aero Burst', 'Refresh Breeze', 'Hurricane'],
  // earth spells
  [elements[3]]: ['Ground Mace', 'Landslide', 'Petrify', 'Earthquake'],
  // lightning spells
  [elements[4]]: ['Zap Lance', 'Bolt Burst', 'Stormblast', 'Thunder'],
  // ice spells
  [elements[5]]: ['Frost Javelin', 'Icicle', 'Cold Shock', 'Niflheim'],
  // wood spells
  [elements[6]]: ['Leaf Dagger', 'Petal Storm', 'Lifespring', 'Yggdrasil'],
  // metal spells
  [elements[7]]: ['Steel Wall', 'Iron Tower', 'Luster Purge', 'Metallurge'],
  // light spells
  [elements[8]]: ['light1', 'light2', 'light3', 'Eclipse'],
  // dark spells
  [elements[9]]: ['dark1', 'dark2', 'dark3', 'Blackout'],
  // boss spells
  [elements[10]]: ['Dark Pulse', 'Encroaching Death', 'Demon Flare', 'Gehenna'],
};

/*
|--------------------------------------------------------------------------
| Move Description
|--------------------------------------------------------------------------
*/

const desc = {
  // fire spells
  [elements[0]]: [
    'Basic fire attack in the shape of a greatsword',
    'A mid-tier fire spell',
    'Fire spell that boosts attack',
    'One of the strongest fire spells,',
  ],
  // water spells
  [elements[1]]: [
    'water',
    'filler',
    'filler',
    'filler',
  ],
  // air spells
  [elements[2]]: [
    'air',
    'filler',
    'filler',
    'filler',
  ],
  // earth spells
  [elements[3]]: [
    'earth',
    'filler',
    'filler',
    'filler',
  ],
  // lightning spells
  [elements[4]]: [
    'filler',
    'filler',
    'filler',
    'filler',
  ],
  // ice spells
  [elements[5]]: [
    'filler',
    'filler',
    'filler',
    'filler',
  ],
  // wood spells
  [elements[6]]: [
    'filler',
    'filler',
    'filler',
    'filler',
  ],
  // metal spells
  [elements[7]]: [
    'filler',
    'filler',
    'filler',
    'filler',
  ],
  // light spells
  [elements[8]]: [
    'filler',
    'filler',
    'filler',
    'filler',
  ],
  // dark spells
  [elements[9]]: [
    'filler',
    'filler',
    'filler',
    'filler',
  ],
  // boss spells
  [elements[10]]: [
    'filler',
    'filler',
    'filler',
    'filler',
  ],
};

console.log('test', desc);

/*
|--------------------------------------------------------------------------
| Move Flavor Text
|--------------------------------------------------------------------------
*/

const flav = {
  // fire spells
  [elements[0]]: [
    'A simple fire attack made with a burning sword.',
    'A small reenactment of a volcanic eruption.',
    'An advanced fire spell that mages use to strengthen their other spells.',
    'A fire spell summoning the flames of Hell, burning the souls of saint and sinner alike.',
  ],
  // water spells
  [elements[1]]: [
    'water',
    'filler',
    'filler',
    'filler',
  ],
  // air spells
  [elements[2]]: [
    'air',
    'filler',
    'filler',
    'filler',
  ],
  // earth spells
  [elements[3]]: [
    'earth',
    'filler',
    'filler',
    'filler',
  ],
  // lightning spells
  [elements[4]]: [
    'thunder',
    'filler',
    'filler',
    'filler',
  ],
  // ice spells
  [elements[5]]: [
    'ice',
    'filler',
    'filler',
    'filler',
  ],
  // wood spells
  [elements[6]]: [
    'wood',
    'filler',
    'filler',
    'filler',
  ],
  // metal spells
  [elements[7]]: [
    'metal',
    'filler',
    'filler',
    'filler',
  ],
  // light spells
  [elements[8]]: [
    'light',
    'filler',
    'filler',
    'filler',
  ],
  // dark spells
  [elements[9]]: [
    'dark',
    'filler',
    'filler',
    'filler',
  ],
  // boss spells
  [elements[10]]: [
    'thing',
    'filler',
    'filler',
    'filler',
  ],
};

export {
  elements, beings, movelist, desc, flav,
};
