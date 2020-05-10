// let numbers = [1,3,4,5,6,22,6,10,7,7]
// console.log(Math.max(...numbers));

function maxmumNumber(value){
    let heghest = value[0];
    for(let i = 0; i<value.length; i+=1){
        if(value[i] > heghest){
            heghest = value[i]
        }
    }
    return heghest;
}
//  console.log(maxmumNumber([-9,-8,-5]));


function miniNumber(value){
    let lowest = value[0];
    for(let i = 0; i<value.length; i+=1){
        if(value[i] < lowest){
            lowest = value[i]
        }
    }
    return lowest;
}

function smallestBiggest(arr) {
    // let smallest = miniNumber(arr)
    // let biggest = maxmumNumber(arr)
    // let youngest = {
    //     smallest: smallest,
    //     biggest:  biggest
    // }
    // return youngest
    return {
        small: miniNumber(arr),
        big: maxmumNumber(arr)
    }
}

console.log(smallestBiggest([2,3,555,5,6,555,]));
// {
   // small: 8,
 //   big: 88
// }
// console.log(miniNumber([2,3,555,5,6,555,]));
// console.log(miniNumber([24,3,555,5,6,555,]));
// console.log(miniNumber([32,3,555,5,6,555,]));
// console.log(miniNumber([23,3,555,5,6,555,]));
// console.log(miniNumber([22,3,555,5,6,555,]));

// let number = [2,3,555,5,6,555,];
// console.log(Math.min(3,4,...number));
