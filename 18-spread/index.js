var a = [0, 1, 2, 3, 4];

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(...a));
