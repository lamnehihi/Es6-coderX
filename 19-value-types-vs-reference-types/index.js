let a = 1;
let b = 1;

let objA = { a: 1 };
let objB = { a: 1 };

console.log(a == b);
console.log(objA == objB); // it's compare the address of object, not the value;

var c = b;
c = 2;
console.log(b);
var objC = objB;
objC.a = 2;
console.log(objB);//objB change because objC and objB has the same address;