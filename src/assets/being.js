/*
|--------------------------------------------------------------------------
| Class for Ally/Enemy
|--------------------------------------------------------------------------
*/

import { firelist, waterlist } from './attack';
import img from './avatars/circle.png';
import mars from './sigils/mars.png';
import nep from './sigils/neptune.png';

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
    // user input values
    this.name = name;
    this.element = element;
    this.moves = moves;
    this.avatar = avatar;
    this.sigil = sigil;
    // static values
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

const fire = new Being('flame king', 'fire', firelist, img, mars);
const water = new Being('wave king', 'water', waterlist, img, nep);

export {
  fire, water,
};
