var name = 'lam';
var human = {
  name,
  run() {
    console.log(this.name + ' is running !')
  }
}
human.run();