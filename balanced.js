/*We can assign a value to each character in a word, 
based on their position in the alphabet (a = 1, b = 2, ... , z = 26). 
A balanced word is one where the sum of values on the left-hand side of the word 
equals the sum of values on the right-hand side. For odd length words, 
the middle character (balance point) is ignored.

Write a function that returns true if the word is balanced, and false if it's not.
*/
//balanced("zips") //➞ true
// "zi ps" = "zi|ps" = 26+9|16+19 = 35|35 = true

//balanced("brake") // ➞ false
// "brake" = "br|ke" = 2+18|11+5 = 20|16 = false

// divide string into two parts.
    // if odd num of chars remove the middle charactor and divide it into 2 parts
// calculate sum of each part
// compare sums of the two parts
// if they are equal return true else return false

// function balanced(word) {
//     let divided = divideString(word)
//     let sums = calculateSum(divided)
//     if(sums.part1Sum === sums.part2Sum){
//         return true
//     }
//     return false
// }

//    console.log(balanced("zips"))//➞ true
//     // "zi ps" = "zi|ps" = 26+9|16+19 = 35|35 = true

//     console.log(balanced("aiyh")) //➞ false
//     // "brake" = "br|ke" = 2+18|11+5 = 20|16 = false

// function getSum(str) {
//     let alpha ={
//         a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, 
//         g: 7, h: 8, i: 9, j: 10, k: 11, l: 12,
//         m: 13, n: 14, 0: 15, p: 16, q: 17, r: 18,
//         s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
//     }

//     let sum = 0
//     for (let i = 0; i < str.length; i++) {
//         let item = str[i]
//         let numb = alpha[item]
//         sum = sum + numb
//     }
//     return sum
// }
// function calculateSum(res) {
//     let part1Sum = getSum(res.part1)
//     let part2Sum = getSum(res.part2)

//     let sums = {part1Sum, part2Sum }
//     return sums
// }

// function divideString(name) {
//     if (name.length % 2 !== 0) {
//         name = name.substring(0,name.length/2) + name.substring(name.length/2 +1, name.length)
//     }
//     let part1 = name.substring(0, name.length/2)
//     let part2 = name.substring(name.length/2, name.length)
//     let res = {part1, part2}
    
//     return res
// }

function balanced(string) {
    let leftSide = string.substring(0, string.length / 2)
    let rightSide = string.substring(string.length / 2, string.length)
  
    if (string.length % 2 !== 0) {
      string = string.substring(0, string.length / 2) + string.substring(string.length / 2 + 1, string.length)
      leftSide = string.substring(0, string.length / 2)
      rightSide = string.substring(string.length / 2, string.length)
    }
  
    let leftSideCounter = 0;
    let rightSideCounter = 0;
  
    for (let i = 0; i < leftSide.length; i++) {
      leftSideCounter += leftSide.toLowerCase().charCodeAt(i) - 97 + 1
    }
    for (let i = 0; i < rightSide.length; i++) {
      rightSideCounter += rightSide.toLowerCase().charCodeAt(i) - 97 + 1
    }
  
    return leftSideCounter === rightSideCounter
  
  }
  
  console.log(balanced('zips'));
  