function removeLeadingZeroes(str) {
    for (let postion = 0; postion < str.length; postion++) {
        if (str[postion] !== '0') {
            let trail = str.slice(postion, str.length)
            return trail
        }
    } return ""
}

function removeTrailing(str)
  {
    if (!str.includes('.')) {
        return str
    }
    // EXAMPLE "230.000"

    for (let postion = str.length-1; postion >= 0; postion--) {
        
        if (str[postion] !== '0') {
            let trailing = str.slice(0, postion+1)
            if (trailing[trailing.length-1] == ".") {
                return trailing.slice(0, trailing.length-1)
            }
            return trailing;
        }
    } 
    return ""
}
function checkIfItsNumber(str){
    // check if the string only contains 0-9 or a dot
    let aa = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
    for (let index = 0; index < str.length; index++) {
        let currentItem = str[index]
        if (!aa.includes(currentItem) ) {
            return false
        }
    }return true
}

function removeLeadingTrailing(n) {
    if(!checkIfItsNumber(n)){
        return NaN
    }
    let removedLeading = removeLeadingZeroes(n)
    let removedTrailing = removeTrailing(removedLeading)
    return removedTrailing
}

console.log(removeLeadingTrailing("230.000")) //➞ "230"

// console.log(removeLeadingTrailing("00402")) //➞ "402"

// console.log(removeLeadingTrailing("03.1400")) //➞ "3.14"

// console.log(removeLeadingTrailing("30")) //➞ "30"

//console.log(n); // 1.000000000000
