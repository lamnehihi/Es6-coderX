class Pokemon {
  constructor(name, hp, damage) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }

  getDamage(damage) {
    this.hp -= damage;
  }

  attack(enemy) {
    enemy.getDamage(this.damage);
  }
}

class MysteryPokemon extends Pokemon{
  constructor(name, hp, damage, cb) {
    super(name, hp, damage);
    cb.call(this);
  }

  attack(enemy) {
    super.attack(enemy);
    this.hp += 2;
  }
}

var healing = function() {
  console.log(`With power of the king. ${this.name} get 200 hp !`)
  this.hp += 200;
}

var pikachu = new MysteryPokemon("pika", 100, 20, healing);
var rock = new Pokemon("rock", 300, 5);
console.log({ pikachu, rock });
pikachu.attack(rock);
console.log({ pikachu, rock });