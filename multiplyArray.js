
//conceptual solution
//put the array in a for loop 
//multiply by two each index of the array

// function getMultipler(arr1){
//     for(i = 0; i<arr1.length; i++){
//         arr1[i] = arr1[i] * 2;
//     }
//     return arr1
// }

function getMultipler(arr2){
    for(i = 0; i<arr2.length; i++){
        arr2[i] = arr2[i] * 4;
    }
    return arr2;
}
console.log(getMultipler([2, 5, 3]));
console.log(getMultipler([1, 8, -5]));
console.log(getMultipler([5, 38, 1]));
