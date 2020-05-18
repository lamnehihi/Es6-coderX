function waitAndRun(ms, func) {
  setTimeout(func, ms);
}

function log() {
  console.log(`my name is Lam`)
}
let lam = waitAndRun(2000, log);