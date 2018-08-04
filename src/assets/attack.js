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

// first two and last move are the damage moves, the third move is the status move (pattern)

// fire moves
const fire1 = new Move(0, 0);
const fire2 = new Move(0, 1);
const fire3 = new Move(0, 2);
const fire4 = new Move(0, 3);

// water moves
const water1 = new Move(1, 0);
const water2 = new Move(1, 1);
const water3 = new Move(1, 2);
const water4 = new Move(1, 3);

// adding moves to lists
const firelist = [fire1, fire2, fire3, fire4];
const waterlist = [water1, water2, water3, water4];
const airlist = [];
const earthlist = [];
const thunderlist = [];
const icelist = [];
const woodlist = [];
const metallist = [];
const lightlist = [];
const darklist = [];
const chaoslist = [];
const fallenlist = [];
const magicklist = [];
const evillist = [];
const deathlist = [];
const endlist = [];

// list of moveslists
const moves = {
  [elements[0]]: firelist,
  [elements[1]]: waterlist,
  [elements[2]]: airlist,
  [elements[3]]: earthlist,
  [elements[4]]: thunderlist,
  [elements[5]]: icelist,
  [elements[6]]: woodlist,
  [elements[7]]: metallist,
  [elements[8]]: lightlist,
  [elements[9]]: darklist,
  [elements[10]]: chaoslist,
  [elements[11]]: fallenlist,
  [elements[12]]: magicklist,
  [elements[13]]: evillist,
  [elements[14]]: deathlist,
  [elements[15]]: endlist,
};

console.log(moves);

export default moves;
