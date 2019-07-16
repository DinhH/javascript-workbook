

// pure function
//higher order function
//at least 2 level of functions

// fat arrow function

// function(p1,p2)=>{statement}
// (p1,p2)=>{return statement}
// (p1,p2,...)=>{expression}

// single => {expression}
// ()=>{expression}

// function multiplier(y){
//   return function(x){
//     return (x * y);
//   }
// }

// function multiplier(y){
//   return x => console.log(x*y);
// }

// let double = multiplier(2);
// let triple = multiplier(3)
// triple(4)
// double(4);

// class CounterFactory{
//   constructor(start, end){
//     this.count = start;

//     setInterval (()=> {
//       this.count++;
//       document.getElementById("status").innerHTML = this.count;
//     },end);
//   }
// }



// let counter1 = new CounterFactory(10,1000);
// let counter2 = new CounterFactory(100,2000);
// let counter3 = new CounterFactory(50,100);
// let counter2 = new CounterFactory();
// let counter3 = new CounterFactory();

// counter1.counterClick();
// counter1.counterClick();
// counter1.counterClick();
// counter3.counterClick();
// counter2.counterClick();

//foreach
//map
// let arr = [1,2,3,4,5];
// // function double(x){
// //   return x * 2;
// // }
// // let arrDouble = arr.map(double)
// // console.log(arrDouble);

// let arrDouble = arr.map((x,index)=>{
//   return `${index} is = ${x * 2}`;
// })

// console.log(arrDouble);



//filter
// let arr = [1,2,3,4,5];
// function isEven(num){
//   return(num%2===0)
// }

// let evenArr = arr.filter(isEven)
// console.log(evenArr)

let str = "dinh   is awesome!"
let words = str.split(/\W+/).filter(x => x.length > 2);
console.log(words)

//fill
// let arr = new Array(50);
// arr = arr.fill(10).map(()=> Math.ceil(Math.random() * 10))
// console.log(arr)

//sort


let vals = [
  {
      x: 1,
      y: 76
  },
  {
      x:2,
      y:38
  }
];

function compare(a,b){
  return b.y- a.y
}

let result = vals.sort(compare)
console.log(result)

//reduce


// function multiplier(factor){
//   return x => x * factor;
// }

// let double = multiplier(2)
// console.log(double(4));

class Counter {
  constructor(start, wait) {
    this.count = start;
    console.log(this)

    setInterval(() => {
      this.count++;
      console.log(this)
      document.getElementById('status').innerHTML = this.count;
    }, wait);
  }
}

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
// let arr = [4,3,6,7,3,7,8,5,9,1,0];
// let str = "dinh   is awesome!"
// let words = str.split(/\W+/).filter(x => x.length).sort((a,b) =>
//   a.length - b.length);
// console.log(words)

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