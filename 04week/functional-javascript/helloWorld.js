// (param1, param2) => {statement}
// (param1, param2) => expression
// (param1, param2) => return statement

// (param1, param2, paramN) => expression

// (single) => {statement}
// single => expression

// () => {statement}
// () => expression
// () => return statement

// function multiplier(factor){
//   return x => x * factor;
// }

// let double = multiplier(2)
// console.log(double(4));

// class Counter {
//   constructor(start, wait) {
//     this.count = start;
//     console.log(this)

//     setInterval(() => {
//       this.count++;
//       console.log(this)
//       document.getElementById('status').innerHTML = this.count;
//     }, wait);
//   }
// }

// let counter1 = new Counter(10, 1000);
// let counter2 = new Counter(20, 1000);

// counter1.counterClick();
// counter1.counterClick();
// counter1.counterClick();

//forEach()
// let arr = ["a", "b", "c", "d"]

// // arr.forEach(function(item, index, array){
// //   console.log(`at index ${index} is = ${item}`)
// // })

// function forEach(array, runFunction){
//   for(let i = 0; i < array.length; i++){
//     runFunction(array[i], i, array);
//   }
// }

// function runFunction(item, index, array){
//   console.log(`at index ${index} is = ${item} testing`)
// }

// forEach(arr, runFunction);

//map(value, index, array)

// let arr = [1,2,3,4,5];
// // function double(x){
// //   return x*2
// // }

// let retDouble = arr.map((x, index)=> {
//   x = x*2;
//   return `${index} is = ${x}`
//   }
// );
// console.log(retDouble);

//fill()
// let arr = new Array(50);
// arr = arr.fill(0).map(()=> Math.round(Math.random() * 10));
// console.log(arr);

//filter()
// let arr = [1,undefined,3,undefined,2,4, null,5];

// function isEven(num){
//  return (num % 2 === 0)  
// }
// function isValid(c){
//   return c
// }
// let retArr = arr.filter(c => c);
// console.log(retArr);

// let str = "dinh   is awesome!"
// let words = str.split(/\W+/).filter(x => x.length > 2);
// console.log(words)

//sort();
let arr = [4,3,6,7,3,7,8,5,9,1,0];
let str = "dinh   is awesome!"
let words = str.split(/\W+/).filter(x => x.length).sort((a,b) =>
  a.length - b.length);
console.log(words)

// let vals = [
//   {
//     x: 1,
//     y: 100
//   },
//   {
//     x: 2,
//     y:50
//   }
// ]

// function compare(a,b){
//   return a.y - b.y;
// }

// let test = vals.sort(compare)
// console.log(test)
