// steps
//declare the function the loopthrough the array3 then console log array


// go through the array
// check if the current number is greater thatn the next number
// if its greater , counter = counter + 1


// after you run the array
function progressDays(array){
    let days = 0; 
    
    for(i = 0; i<array.length-1; i++){
            
        if(array[i] < array[i+1]){
            days = days +1;
        }else{
        }
    }
    return days
}

 //console.log(progressDays([3, 4, 1, 2])) // ➞ 2
 console.log(progressDays([10, 11, 12, 9, 10])) // ➞ 3
// console.log(progressDays([6, 5, 4, 3, 2, 9])) // ➞ 1
// console.log(progressDays([9, 9])) // ➞ 0

