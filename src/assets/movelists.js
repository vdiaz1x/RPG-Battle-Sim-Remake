/*
|--------------------------------------------------------------------------
| Move List
|--------------------------------------------------------------------------
*/

import elements from './elements';

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

export default movelist;
