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

function Being(name, race, type) {
  this.name = name;
  this.race = race;
  this.type = type;
}

Being.prototype.whoAreYou = function () {
  console.log(`This is ${this.name} and it is ${this.type} type of character`);
};

function Monster(name, race, type, className, immune, sensitive, _loot) {
  Being.call(this, name, race, type);
  this.className = className;
  this.immune = immune;
  this.sensitive = sensitive;
  this._loot = _loot;
}

Monster.prototype = Object.create(Being.prototype);

Monster.prototype.setImmunity = function (immune) {
  this.immune = immune;
};
Monster.prototype.getImmunity = function () {
  console.log(`${this.name} is resistant to ${this.immune}`);
};

Monster.prototype.setSensitivity = function (sensitive) {
  this.sensitive = sensitive;
};
Monster.prototype.getSensitivity = function () {
  console.log(`${this.name} is vulnerable to: ${this.sensitive}`);
};

Monster.prototype.setReward = function (_loot) {
  this._loot = _loot;
};
Monster.prototype.getReward = function () {
  console.log(
    `When ${this.name} is killed, player will be able to collect ${this._loot}`
  );
};

function CursedOne(
  name,
  race,
  type,
  className,
  immune,
  sensitive,
  _loot,
  tactics
) {
  Monster.call(this, name, race, type, className, immune, sensitive, _loot);
  this.tactics = tactics;
}

CursedOne.prototype = Object.create(Monster.prototype);

CursedOne.prototype.getOrigin = function () {
  console.log(
    `${this.name} is created as a result of curse, often from human or humanoid specimens`
  );
};

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

werewolve.getOrigin();
werewolve.getSensitivity();
werewolve.getReward();
console.log(werewolve.tactics);

function Necrophage(
  name,
  race,
  type,
  className,
  immune,
  sensitive,
  _loot,
  location
) {
  Monster.call(this, name, race, type, className, immune, sensitive, _loot);
  this.location = location;
}

Necrophage.prototype = Object.create(Monster.prototype);

Necrophage.prototype.getAppearance = function () {
  console.log(`${this.name} generally haunt ${this.location}`);
};

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
ghoul.getImmunity();
ghoul.getSensitivity();
ghoul.getAppearance();
ghoul.getReward();

function Character(name, race, type, _birthYear, profession, gender, children) {
  Being.call(this, name, race, type);
  this._birthYear = _birthYear;
  this.profession = profession;
  this.gender = gender;
  this.children = children;
}

Character.prototype = Object.create(Being.prototype);

Character.prototype.setChildren = function (children) {
  this.children = children;
};
Character.prototype.getChildren = function () {
  let childrenValue = 'no children';
  if (this.children.length > 1) {
    childrenValue = `${this.children.length} children`;
  } else if (this.children.length === 1) {
    childrenValue = `${this.children.length} child`;
  }
  console.log(`${this.name} has ${childrenValue}`);
};

function Witcher(
  name,
  race,
  type,
  _birthYear,
  profession,
  gender,
  children,
  abilities
) {
  Character.call(
    this,
    name,
    race,
    type,
    _birthYear,
    profession,
    gender,
    children
  );
  this.abilities = abilities;
}

Witcher.prototype = Object.create(Character.prototype);

Witcher.prototype.canDo = function () {
  console.log(`${this.name} has following abilities: ${this.abilities}`);
};

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
geralt.getChildren();

function Witch(
  name,
  race,
  type,
  _birthYear,
  profession,
  gender,
  children,
  wish
) {
  Character.call(
    this,
    name,
    race,
    type,
    _birthYear,
    profession,
    gender,
    children
  );
  this.wish = wish;
}

Witch.prototype = Object.create(Character.prototype);

Witch.prototype.sacredWish = function () {
  console.log(`${this.name}'s sacred wish is: ${this.wish}`);
};

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
