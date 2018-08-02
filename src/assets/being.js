/*
|--------------------------------------------------------------------------
| Class for Being (Ally/Enemy)
|--------------------------------------------------------------------------
*/

import elements from './elements';
import moves from './attack';
import names from './names';
import avatars from './avatars';
import sigils from './sigils';
import HP from './HP';
import MP from './MP';

// what is a being?
// a being is any entity that can make a move
// two types of beings - ally and enemy

// ally- player controlled characters
// enemy- boss

// being parameters
// HP/MP = hit points and mana points for ally/enemy
// name = name of ally/enemy
// element = element type of ally/enemy. determines strong/weak against
// moves = set of 4 moves for ally/enemy
// avatar = image for the ally/enemy avatar
// sigil = image for the ally/enemy sigil

class Being {
  constructor(index) {
    // user input values
    this.index = index;

    // static values
    this.element = elements[index];
    this.name = names[this.element];
    this.movelist = moves[this.element];
    this.avatar = avatars[this.element];
    this.sigil = sigils[this.element];
    this.maxHP = HP[this.element];
    this.currentHP = this.maxHP;
    this.maxMP = MP[this.element];
    this.currentMP = this.maxMP;
  }
}

/*
|--------------------------------------------------------------------------
| Being List
|--------------------------------------------------------------------------
*/
// allies
// const fire = new Being(0);
// const water = new Being(1);
// const air = new Being(2);
// const earth = new Being(3);
// const thunder = new Being(4);
// const ice = new Being(5);
// const wood = new Being(6);
// const metal = new Being(7);
// const light = new Being(8);
// const dark = new Being(9);

// const allyRoster = {
//   fire, water, air, earth, thunder, ice, wood, metal, light, dark,
// };

const list = elements.map((elem, i) => {
  const being = new Being(i);
  return being;
});

// console.log(list);

const allyRoster = list.slice(0, 10);
const enemyRoster = list.slice(10, -1);

// console.log(allyRoster, enemyRoster);

// enemies
// const abraxes = new Being(10);
// const demiurge = new Being(11);
// const goetia = new Being(12);
// const angra = new Being(13);
// const beast = new Being(14);
// const armageddon = new Being(15);

// const enemyRoster = {
//   abraxes, demiurge, goetia, angra, beast, armageddon,
// };

export default {
  // allyRoster, enemyRoster,
  list,
};
