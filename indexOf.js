// Create a function that searches for the index of a given item in an array. 
// if the item is present return the POSITION of the item

// If the item is not present, return -1.

// The given array is ordered.

// function search(arr, item) {
//     for(pos = 0; pos < arr.length; pos++){
//         let curentPos = arr[pos]
//         //console.log(curentPos)
//         if(curentPos === item){
//             return pos
//         }
//     }
//     return -1
// }
function search(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        let curentI = arr[i];
        if (curentI === item) {
            return i 
        }
        else{
            return -1
        }
        
    }
}
  
//   console.log(search([1,2,3,4],1))
   //console.log(search([1, 2, 3, 4], 3)) //➞ 2

  console.log(search([2, 4, 6, 8, 10], 8)) //➞ 3
 
// console.log(search([1, 3, 5, 7, 9], 11))   

console.log(search([5,7,3,9], 3)) // -


// first step
// 