/*
|--------------------------------------------------------------------------
| Class for Being (Ally/Enemy)
|--------------------------------------------------------------------------
*/

import movelists from './attack';
import { elements, names } from './dictionary';

import avatars from './avatars';
import sigils from './sigils';

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
    this.movelist = movelists[this.element];
    this.avatar = avatars[this.element];
    this.sigil = sigils[this.element];
    this.maxHP = 999;
    this.currentHP = this.maxHP;
    this.maxMP = 999;
    this.currentMP = this.maxMP;
  }
}

/*
|--------------------------------------------------------------------------
| Being List
|--------------------------------------------------------------------------
*/
// allies
const fire = new Being(0);
const water = new Being(1);

const allyRoster = { fire, water };

// enemies
const abraxes = new Being(10);

const enemyRoster = { abraxes };

export {
  allyRoster, enemyRoster,
};
