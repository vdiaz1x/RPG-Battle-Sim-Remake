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

// what is a move?
// moves are actions that have various effects, like dealing damage,
// healing HP/MP, and buff/debuff stats

// move parameters
// index - the index number of the moves (all moves are part of a catalog)
// the moves are in order, startig with the fire moves, and ending with all the enemy moves
// index number starts from 0 (array indexing)

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
  constructor(index, element, order, dmg, status, cost, effect, area, target) {
    // user input values
    this.index = index;
    this.element = element;
    this.order = order;
    this.dmg = dmg;
    this.status = status;
    this.cost = cost;
    this.effect = effect;
    this.area = area;
    this.target = target;

    // static values
    this.name = movelists[element][this.order];
    this.description = desc[element][this.order];
    this.flavor = flav[element][this.order];
  }
}

/*
|--------------------------------------------------------------------------
| List of Moves
|--------------------------------------------------------------------------
*/

// first two and last move are the damage moves, the third move is the status move (pattern)

// fire moves
const fire1 = new Move(0, elements[0], 0, 100, 0, 10, 10, 'single', 'enemy');
const fire2 = new Move(0, elements[0], 1, 100, 0, 10, 10, 'single', 'enemy');
const fire3 = new Move(0, elements[0], 2, 0, 0.20, 10, 10, 'single', 'ally');
const fire4 = new Move(0, elements[0], 3, 100, 0, 10, 10, 'single', 'enemy');

// water moves
const water1 = new Move(0, elements[1], 100, 0, 10, 10, 'single', 'enemy');
const water2 = new Move(1, elements[1], 100, 0, 10, 10, 'single', 'enemy');
const water3 = new Move(2, elements[1], 0, 0.20, 10, 10, 'single', 'ally');
const water4 = new Move(3, elements[1], 100, 0, 10, 10, 'single', 'enemy');

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

export default moves;
