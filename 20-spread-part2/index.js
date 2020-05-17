var objA = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 10,
  },
};
//Shadow clone 
var objB = {...objA};

var objC = {};
for ( var key in objA) {
  objC[key] = objA[key];
}

var objE = Object.assign({}, objA);
//console.log({objA, objB, objC});

//Deep clone
var objD = JSON.parse(JSON.stringify(objA));
objD.d.e = 20;

console.log({objA, objD});
