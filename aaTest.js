console.log("START");

setTimeout(function cb() {
  console.log("CallBack");
}, 5000);

console.log("END");

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
console.log("while Expires");
