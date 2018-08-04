/*
|--------------------------------------------------------------------------
| Move Description
|--------------------------------------------------------------------------
*/

import elements from './elements';

const effects = {
  // fire spells
  [elements[0]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  // water spells: 100,
  [elements[1]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  // air spells
  [elements[2]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  // earth spells
  [elements[3]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  // lightning spells
  [elements[4]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  // ice spells
  [elements[5]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  // wood spells
  [elements[6]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  // metal spells
  [elements[7]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  // light spells
  [elements[8]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  // dark spells
  [elements[9]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  // boss spells
  [elements[10]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  [elements[11]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  [elements[12]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  [elements[13]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  [elements[14]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
  [elements[15]]: [
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'none', area: false, target: 'enemy' },
    { effect: 'buff', area: false, target: 'ally' },
    { effect: 'none', area: false, target: 'enemy' },
  ],
};

export default effects;
