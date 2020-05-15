class animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + ' is eating ...');
  }
}

class bird extends animal {
  fly() {
    console.log(this.name + ' is flying ...');
  }
}

const lam = new bird('Lam');
lam.eat();
lam.fly();