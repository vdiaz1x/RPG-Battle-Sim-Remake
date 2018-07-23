/*
|--------------------------------------------------------------------------
| Dictionary
|--------------------------------------------------------------------------
*/

// move list
const movelist = [
  // fire spells
  'Flamberge', 'Magma Burst', 'Flame Starter', 'Inferno',
  // water spells
  'filler', 'filler', 'filler', 'filler',
  // air spells
  'filler', 'filler', 'filler', 'filler',
  // earth spells
  'filler', 'filler', 'filler', 'filler',
  // lightning spells
  'filler', 'filler', 'filler', 'filler',
  // ice spells
  'filler', 'filler', 'filler', 'filler',
  // wood spells
  'filler', 'filler', 'filler', 'filler',
  // metal spells
  'filler', 'filler', 'filler', 'filler',
  // light spells
  'filler', 'filler', 'filler', 'filler',
  // dark spells
  'filler', 'filler', 'filler', 'filler',
  // boss spells
  'filler', 'filler', 'filler', 'filler',
];

// description of moves
const desc = {
  [movelist[0]]: 'Basic fire attack',
  [movelist[1]]: 'A mid-tier fire spell',
  [movelist[2]]: 'Fire spell that boosts attack',
  [movelist[3]]: 'One of the strongest fire spells,',
};

// flavor text of moves
const flav = {
  [movelist[0]]: 'A simple fire attack made with a burning sword.',
  [movelist[1]]: 'A small reenactment of a volcanic eruption.',
  [movelist[2]]: 'An advanced fire spell that mages use to strengthen their other spells.',
  [movelist[3]]: 'A fire spell summoning the flames of Hell, burning the souls of saint and sinner alike.',
};

export { movelist, desc, flav };
