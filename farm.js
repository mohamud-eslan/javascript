function animals(chicken, cows, pigs){
    let chickenLegs = chicken * 2;
    let cowLegs = cows * 4;
    let pigLegs = pigs * 4;
    
    totalLegs = chickenLegs + cowLegs + pigLegs;

    return totalLegs;
}


console.log(animals(1,3,2)) //  1*2 + 3*4 + 2*4 = 22
console.log(animals(2, 3, 5))  // ➞ 36

console.log(animals(1, 2, 3)) // ➞ 22

console.log(animals(5, 2, 8)) // ➞ 50

// conceptual solutions:
// tirada lo'da X 4 = 
// tirada digaaga X 2 = 
// tirada doffarka X 4 = 
// waxaan iskuray lugaha guud