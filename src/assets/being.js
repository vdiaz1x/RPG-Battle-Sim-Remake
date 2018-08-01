/*
|--------------------------------------------------------------------------
| Class for Being (Ally/Enemy)
|--------------------------------------------------------------------------
*/

import { firelist, waterlist } from './attack';
import { beings } from './dictionary';

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
  constructor(index, name, element, moves, avatar, sigil) {
    // user input values
    this.index = index;
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
// allies
const fire = new Being(0, beings[0], 'fire', firelist, avatars.circle, sigils.fire);
const water = new Being(1, beings[1], 'water', waterlist, avatars.circle, sigils.water);

const allyRoster = { fire, water };

// enemies
const abraxes = new Being(10, beings[10], 'abraxes', firelist, avatars.circle, sigils.fire);

const enemyRoster = { abraxes };

export {
  allyRoster, enemyRoster,
};
