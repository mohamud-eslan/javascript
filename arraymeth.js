let arr = ['mango', 'banana', 'zaytun', 'avacado']
// console.log(arr)
arr[2] = 'corn';
// console.log(arr)
arr.push('juice');
// console.log(arr)
// console.log(arr);
let numbers = [1,3,5,8,7]
// console.log(numbers)
let newArray = arr.concat(numbers);
// console.log(newArray)
let arr3 = [...arr,...numbers];
// console.log(arr3)

let newNums = numbers.slice(2,4);
//console.log(newNums)
console.log(numbers[1]);