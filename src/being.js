// file for all the ally and boss classes info

// class for the ally and boss characters
class Being {
  constructor(name) {
    this.HP = 100;
    this.MP = 10;
    this.name = name;
  }
}

// class for the attacks
class Attack {
  constructor(name) {
    this.name = name;
  }
}

const b1 = new Being('one');
const b2 = new Being('two');

const a1 = new Attack('name');

export {
  b1, b2, a1,
};
