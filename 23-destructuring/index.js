const x = [1, 2, 3, 4, 5];

let [a, , , b, d] = x;
console.log(a, b, d);

const obj = {
  g : 1,
  h : 2,
  k : 3
}

const {g : q, h : w, k : e} = obj;
console.log(q, w, e);