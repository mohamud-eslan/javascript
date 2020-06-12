function changeEnough(arrayOfChanges, dueBalance){
    let quarter = arrayOfChanges[0] * 0.25
    let dimes = arrayOfChanges[1] * 0.10
    let nickels =  arrayOfChanges[2] * 0.05
    let pennies = arrayOfChanges[3] * 0.01

    let totalChanges = quarter + dimes + nickels + pennies

    if (totalChanges < dueBalance) {
        return false
    }  
    return true
}

// devs spend 10% writing and 90% reading code

console.log(changeEnough([2, 100, 0, 0], 14.11)) // ➞ false

console.log(changeEnough([0, 0, 20, 5], 0.75))//➞ true

console.log(changeEnough([30, 40, 20, 5], 12.55)) //➞ true

console.log(changeEnough([10, 0, 0, 50], 3.85) )//➞ false

console.log(changeEnough([1, 0, 5, 219], 19.99)) //➞ false
// Notes
// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01
