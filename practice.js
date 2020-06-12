function removeLeading(str) {
    for (let i = 0; i < str.length-1; i++) {
        
        if (str[i] !== '0') {
            let trail = str.slice(i, str.length)
            return trail
        }        
    }
    return ""
} 
function traillingZeros(str) {
    if (!str.include ('')) {
        return str
    }
    
}
console.log(removeLeading("230.000"))