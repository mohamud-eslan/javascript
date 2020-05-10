
function check(arr3, item) {
    for(i = 0; i<arr3.length; i++){
        if(arr3[i] == item){
            return true;
        }
    }return false
    
}




// console.log(check([1, 2, 3, 4, 5], 3)) //➞ true

// console.log(check([1, 1, 2, 1, 1], 3)) //➞ false

// console.log(check([5, 5, 5, 6], 5)) //➞ true

// console.log(check([], 5)) //➞ false

function gaga(num1, num2, num3) {

    return num1 + num2 + num3
    
}
//console.log(gaga(3,4,6));


// swap orange with mango
// the arr should look like  ['apple', 'mango', 'orange', 'banana']
// go for ti

let arr = ['apple', 'orange', 'mango', 'banana']
arr[1] = "mango";
arr[2] = "orange"


// console.log(arr)

// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

// Examples
// progressDays([3, 4, 1, 2]) ➞ 2
// // There are two progress days, (3->4) and (1->2)

// progressDays([10, 11, 12, 9, 10]) ➞ 3

// progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

// progressDays([9, 9]) ➞ 0
// Notes
// Running the same number of miles as last week does not count as a progress day.

function progressDays(arrar){
    let days = 0;
    for(i = 0; i<arrar.length; i++){
        if(arrar[i] < arrar[i+1]){
            days = days+1
        }
    }
    return days
}
console.log(progressDays([10, 11, 12, 9, 10]));
