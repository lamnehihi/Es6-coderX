class Laptop {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log('starting window 10');
  }
}

class MacBook extends Laptop {
  run() {
    console.log('starting macosX');
  }
}

var macPro2015 = new MacBook('Mac cua Lam');
macPro2015.run();