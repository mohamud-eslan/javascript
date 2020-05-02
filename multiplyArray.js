
//conceptual solution
//put the array in a for look 
//multiply by two each index of the array

function getMultipler(arr1){
    for(i = 0; i<arr1.length; i++){
        arr1[i] = arr1[i] * 2;
    }
    return arr1
}
console.log(getMultipler([2, 5, 3]));
console.log(getMultipler([1, 86, -5]));
console.log(getMultipler([5, 382, 0]));