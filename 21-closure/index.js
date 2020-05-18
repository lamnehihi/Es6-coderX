function myName(name) {
  return function(age) {
    console.log(`Hi, my name is ${name}, I'm ${age} years old !`)
  }
}

var Lam = myName('Lam');
var sayHi = Lam(20);