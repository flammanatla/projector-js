'use strict';
/*
Реалізуйте наступну систему, схожу до розглянутої на вебінарі:

1) чотири класи для створення об'єктів-сутностей (це можуть бути тварини, покемони, раси і т.д. - проявіть фантазію)
2) у кожного класу має бути мінімум 3 властивості та мінімум 3 методи(але можна й більше)
3) у кожного класу має бути своя унікальна властивість
4) у кожного класу має бути приватна властивість
4) у двох класів має бути спільний предок та спільний метод характерний тільки для них
5) у всіх чотирьох класів має бути один (крім проміжних) клас-предок
*/

class Being {
  constructor(name, race, type) {
    this.name = name;
    this.race = race;
    this.type = type;
  }
  whoAreYou = () =>
    console.log(
      `This is ${this.name} and it is ${this.type} type of character`
    );
}

class Monster extends Being {
  #loot;
  constructor(name, race, type, className, immune, sensitive, loot) {
    super(name, race, type);
    this.className = className;
    this.immune = immune;
    this.sensitive = sensitive;
    this.#loot = loot;
  }
  immunity = () => console.log(`${this.name} is resistant to ${this.immune}`);
  sensitivity = () =>
    console.log(`${this.name} is vulnerable to: ${this.sensitive}`);
  reward = () =>
    console.log(
      `When ${this.name} is killed, player will be able to collect ${
        this.#loot
      }`
    );
}

class CursedOne extends Monster {
  constructor(name, race, type, className, immune, sensitive, loot, tactics) {
    super(name, race, type, className, immune, sensitive, loot);
    this.tactics = tactics;
  }
  origin = () =>
    console.log(
      `${this.name} is created as a result of curse, often from human or humanoid specimens`
    );
}

class Necrophage extends Monster {
  constructor(name, race, type, className, immune, sensitive, loot, location) {
    super(name, race, type, className, immune, sensitive, loot);
    this.location = location;
  }
  appearance = () =>
    console.log(`${this.name} generally haunt ${this.location}`);
}

const ghoul = new Necrophage(
  'Ghoul',
  'Monster',
  'NPC',
  'Necrophage',
  'Poison',
  'Necrophage oil',
  'Ghoul blood',
  'Battlefields and cemeteries, places where dead bodies lay'
);
ghoul.whoAreYou();
ghoul.immunity();
ghoul.sensitivity();
ghoul.appearance();
ghoul.reward();

const werewolve = new CursedOne(
  'Werewolve',
  'Monster',
  'NPC',
  'Cursed One',
  'Steel',
  'Cursed oil, Silver sword',
  'Wolf skin',
  'Confident of their resistance to conventional weapons'
);
werewolve.origin();
werewolve.sensitivity();
werewolve.reward();
console.log(werewolve.tactics);

class Character extends Being {
  #birthYear;
  constructor(name, race, type, birthYear, profession, gender, children) {
    super(name, race, type);
    this.#birthYear = birthYear;
    this.profession = profession;
    this.gender = gender;
    this.children = children;
  }
  hasChildren = () => {
    let childrenValue = 'no children';
    if (this.children.length > 1) {
      childrenValue = `${this.children.length} children`;
    } else if (this.children.length === 1) {
      childrenValue = `${this.children.length} child`;
    }
    console.log(`${this.name} has ${childrenValue}`);
  };
}

class Witcher extends Character {
  constructor(
    name,
    race,
    type,
    birthYear,
    profession,
    gender,
    children,
    abilities
  ) {
    super(name, race, type, birthYear, profession, gender, children);
    this.abilities = abilities;
  }
  canDo = () =>
    console.log(`${this.name} has following abilities: ${this.abilities}`);
}

const geralt = new Witcher(
  'Geralt',
  'Human',
  'Player',
  900,
  'Witcher',
  'male',
  ['Ciri'],
  ['Swordsmanship', 'Alchemy', 'Signs']
);

const ciri = new Witcher(
  'Ciri',
  'Human',
  'Player',
  1256,
  'Witcher',
  'female',
  [],
  ['Swordsmanship', 'Magic']
);

ciri.canDo();
geralt.canDo();
geralt.hasChildren();

class Witch extends Character {
  constructor(name, race, type, birthYear, profession, gender, children, wish) {
    super(name, race, type, birthYear, profession, gender, children);
    this.wish = wish;
  }
  sacredWish = () => console.log(`${this.name}'s sacred wish is: ${this.wish}`);
}

const yennefer = new Witch(
  'Yennefer',
  'Human',
  'NPC',
  1173,
  'Mage',
  'female',
  ['Ciri'],
  'own blood child'
);
yennefer.sacredWish();
