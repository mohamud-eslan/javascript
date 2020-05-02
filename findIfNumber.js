function findIdexOf(num1, num2){
    let sum = num1 + num2
    if(sum < 100){
        return true
    }
    return false
    }

 console.log(findIdexOf(5,9)); // true
 console.log(findIdexOf(5,99)); // false