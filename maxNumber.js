// let numbers = [1,3,4,5,6,22,6,10,7,7]
// console.log(Math.max(...numbers));

function maxmumNumber(value){
    let heghest = 0;
    for(let i = 0; i<value.length; i+=1){
        if(value[i] > heghest){
            heghest = value[i]
        }
    }
    return heghest;
}
console.log(maxmumNumber([2,3,4,5,6,555,]));