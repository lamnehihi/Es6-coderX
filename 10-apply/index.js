function sum() {
  let numbers = Array.from(arguments)
  return numbers.reduce((sum, next) => sum + next, 0);
}

function average() {
  var total = sum.apply(null, arguments);
  return total/arguments.length;
}

var ave = average(1, 2);
console.log(ave);