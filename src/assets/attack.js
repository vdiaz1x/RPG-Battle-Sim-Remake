/*
|--------------------------------------------------------------------------
| Class for Move
|--------------------------------------------------------------------------
*/

// importing movelist, descriptions, and flavor text
import elements from './elements';
import movelists from './movelists';
import desc from './description';
import flav from './flavor';
import values from './values';
import effects from './effects';

// what is a move?
// moves are actions that have various effects, like dealing damage,
// healing HP/MP, and buff/debuff stats

// move parameters
// index - the index number of the element (this helps in referencing the other properties)
// index number starts from 0 (array indexing)

// order- the order in which the attack appears in the collection of attacks for that element

// name - name of move

// value - number parameter of move
// this number is used for either damage or status calc

// cost - what the move costs to use in MP

// effect - what the move is supposed to
// this determines what the effect of the move is, if it is a status move

// area - how large the move is
// this determines if the attack is either an area of effect or a single target

// target - who the move is targeting
// who the move will affect (enemy, ally, self, target)

// description - what the move does
// game effect description

// flavor - flavor text
// game lore text (worldbuilding)

class Move {
  constructor(index, order) {
    // user input values
    this.index = index;
    this.order = order;

    // static values
    this.element = elements[this.index];
    this.name = movelists[this.element][this.order];
    this.cost = values[this.element][this.order].cost;
    this.dmg = values[this.element][this.order].dmg;
    this.status = values[this.element][this.order].status;
    this.effect = effects[this.element][this.order].effect;
    this.area = effects[this.element][this.order].area;
    this.target = effects[this.element][this.order].target;
    this.description = desc[this.element][this.order];
    this.flavor = flav[this.element][this.order];
  }
}

/*
|--------------------------------------------------------------------------
| List of Moves
|--------------------------------------------------------------------------
*/

// loop over the list of moves to create all the attacks
// first loops over each element, and then loops over
// the names of the attacks for each element
const moves = elements.map(
  (element, index) => movelists[element].map(
    (move, order) => new Move(index, order),
  ),
);

export default moves;
