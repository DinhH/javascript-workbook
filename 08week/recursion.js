// let min = function(...x){ //1234
//     let total = 0;
//     for(let i = 0; i < x.length; i++){
//         total += x[i];
//     }
//     return total/x.length;
// }
// let curry = function(func, ...n){
//     return function(...m){
//         return func.apply(this, n.concat(m))
//     }
// }
// let minCurry = curry(min, 1,2,3);

// console.log(minCurry(4)) //1232

// recursion:
    //base case need to break the loop
    //a "rule" to move along *recursion

// const fac= (n) =>{
//     if(n === 1){
//         return 1;
//     }else{
//         return n * fac(n-1)
//     }
// }
// console.log(fac(13))
//fac(3)
//3*fac(2)
//3*2*fac(1)
//3*2*1
//6

//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987

const fib = (n) =>{
    if(n <= 0 ){
        return 0;
    }if(n === 1){
        return 1;
    }else{
        return fib(n-1) + fib(n-2);
    }
}

// console.log(fib(45));

//recursive JavaScript program to compute the sum of an array of integers.
// let arr = [1, 2, 3, 4, 5, 6] //21
// const sum = (arr) =>{
//     if(arr.length == 1){
//         return arr[0];
//     }else{
//         return arr[0] + sum(arr.splice(1))
//         // return arr[0] + sum(arr.slice(1))
//     }
// }
// console.log(sum(arr))

// Sum triangle from array
// Given an array of integers, print a sum triangle from it such that the first level has all array elements. From then, at each level number of elements is one less than the previous level and elements at the level is be the Sum of consecutive two elements in the previous level.

// let arr = [1, 2, 3, 4, 5]
// [3,5,7,9]
// [8,12,16]
// [20,28]
// [48]

// const sumTrig = (arr) => {
//     if(arr.length == 1){
//         return arr;
//     }
//     let temp = new Array(arr.length - 1);
//     for(let i = 0; i < arr.length -1; i++){
//         let x = arr[i] + arr[i+1];
//         temp[i] = x;
//     }
//     return arr + " // " + sumTrig(temp)
// }

// console.log(sumTrig(arr));

// Recursive program to generate power set
let string = "abc"
// "a", "b", "c", "ab", "bc", "ac", "abc"
let set = "abcd"
//"a" "ab" "abc" "abcd" "abd" "ac" "acd"
// "ad" "b" "bc" "bcd" "bd" "c" "cd" "d"

let powerSet = (pre ,str) =>{
    if(str.length === 0){
        return [" "]
    }
    let result = [" "];
    for(let i = 0; i < str.length; i++){
        result.push(pre + str[i]);
        powerSet(pre + str[i], str.slice(i + 1))
        console.log(result);
    }
    return result;
}
powerSet(" ", string);
// console.log(powerSet("", string))