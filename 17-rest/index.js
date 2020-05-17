function run(a, ...nums) {
  console.log(a);
  console.log(nums);
}

//run(1, 2, 3, 4, 5);

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));

function concat(...nums) {
  return nums.join('.');
}

console.log(concat(1, 2, 3, 4));