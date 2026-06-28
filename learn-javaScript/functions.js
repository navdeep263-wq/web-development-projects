//multiplication function

// function mul(a , b){
//     return a * b;
// }

//using arrow function

// const arrowMul = (a , b)=>{
//    console.log( a * b);
// }

//practice

// function countVowels(str){
//    let count = 0;
//    for(const char of str){
//     if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//         count++;
//     }
//    }
//   return count;
// }

//above same code write in arrow functions
// const arrowVowels = (str) => {
//     let count = 0;
//     for(const char of str){
//      if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//        count++;
// }
// }
// return count;
// }

//forEach

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){
//    console.log(val);
// });

//practice
let arr = [1,2,3,4,5,6];

// arr.forEach((val) =>{
//    console.log(val * val);
// });

//filter
// let evenArr = arr.filter((val)=>{
//    return val % 2 === 0;
// });

// console.log(evenArr);

const output = arr.reduce((res , curr) =>{
     return res + curr;
});

console.log(output);