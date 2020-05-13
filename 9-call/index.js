function a() {
  console.log(`Hi, my name is ${this.name}, I am ${this.age} years old`)
}

var b = {
  name : "Lam",
  age : 20
}

a.call(b)