/*
|--------------------------------------------------------------------------
| Class for Ally/Enemy
|--------------------------------------------------------------------------
*/

import {
  fire1, fire2, fire3, fire4,
} from './attack';

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
  constructor(name, element, moves, avatar, sigil) {
    // static values
    this.HP = 999;
    this.MP = 999;
    // dynamic values
    this.name = name;
    this.element = element;
    this.moves = moves;
    this.avatar = avatar;
    this.sigil = sigil;
  }
}

const b1 = new Being('flame king', 'fire', [fire1, fire2, fire3, fire4], 'avatar', 'sigil');
// const b2 = new Being('two');

export {
  b1,
};
