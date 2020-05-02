function reverseArray(arr) {
    let arr3 = []
    for (i = arr.length - 1; i >= 0; i--) {
        arr3.push(arr[i]);
    }
    return arr3
}
console.log(reverseArray([1, 2, 3, 4]))
console.log(reverseArray([9, 9, 2, 3, 4]))
console.log(reverseArray([]))