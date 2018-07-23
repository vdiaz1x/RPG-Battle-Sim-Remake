/*
|--------------------------------------------------------------------------
| Class for move
|--------------------------------------------------------------------------
*/

import { desc, flav, movelist } from './dictionary';

// what is a move?
// moves are actions that have various effects, like dealing damage, healing HP/MP, and buff/debuff stats

// move parameters
// index - the index number of the moves (all moves are part of a catalog)
// name - name of move
// value - number parameter of move
// cost - what the move costs to use in MP
// effect - ?
// target - who the move is targeting
// description - what the move does
// flavor - flavor text for worldbuilding
class Move {
  constructor(index, value, cost, effect, target) {
    this.index = index;
    this.name = movelist[this.index];
    this.value = value;
    this.cost = cost;
    this.effect = effect;
    this.target = target;
    this.description = desc[this.name];
    this.flavor = flav[this.name];
  }
}

const fire1 = new Move(0, 100, 10, 10, 'target');
const fire2 = new Move(1, 100, 10, 10, 'target');
const fire3 = new Move(2, 100, 10, 10, 'target');
const fire4 = new Move(3, 100, 10, 10, 'target');

export {
  fire1, fire2, fire3, fire4,
};
