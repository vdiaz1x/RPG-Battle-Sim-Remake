/*
|--------------------------------------------------------------------------
| Class for Attack
|--------------------------------------------------------------------------
*/


class Attack {
  constructor(name, value, cost, effect, target, description, flavor) {
    this.name = name;
    this.value = value;
    this.cost = cost;
    this.effect = effect;
    this.target = target;
    this.description = description;
    this.flavor = flavor;
  }
}

const a1 = new Attack('Flamberge', 100, 10, 10, 'self', 'Basic fire attack', 'A simple fire attack made with a burning sword');

export {
  a1,
};
