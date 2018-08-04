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
    this.movelist = moves[this.index];
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

// loop over the list of elements to create all the beings
// and put them in an array
const roster = elements.map((element, index) => new Being(index));

// split the list into
const allies = roster.slice(0, 10);
const enemies = roster.slice(10, 16);

export default {
  allies, enemies,
};
