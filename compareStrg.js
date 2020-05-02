//conceptual solution
//declare two string variales in a function
// put in if else condition to compare the strings

function CompareStrings(strg1, strg2) {
    // return strg1.length === strg2.length
    if (strg1.length == strg2.length) {
        return true;
    } else {
        return false;
    }
 }
console.log(CompareStrings("AB", "CD"));
console.log(CompareStrings("ABC", "DE"));
console.log(CompareStrings("hello", "edabit"));