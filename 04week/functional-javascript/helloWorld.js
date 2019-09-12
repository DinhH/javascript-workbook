
let vals = [
  {
      x: 1,
      y: 100
  },
  {
      x:2,
      y:50
  }
];

function compare(a,b) {
  return a.y - b.y;
}

let test = vals.sort(compare)
console.log(test)

let test = vals.sort((a,b) =>
  a.y - b.y);
console.log(test)



