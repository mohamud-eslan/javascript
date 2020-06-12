// forloop
// let aa = [2,5,9,6,4,2,1]
// let num = 0
// while(num <= aa.length-1){
// 	if(aa[num] % 2 !== 0){
// 		console.log(aa[num]);
// 	}
// 	num += 1

// }
// let arr = [1,30,5,50,66,645,5,33]

// let f = 0
// while(f <= arr.length-1){
// 	if(arr[f] % 2 !== 0){
// 		console.log(arr[f])
// 	}
// 	f++
// }
// let ps = aa.length-1
// while(ps >=0){
// 	console.log(aa[ps]);
// 	ps -= 1
// }

// // let item = 0
// // print 0 to 10
// let i = 0
// while(i <= aa.length -1){
// 	aa[i] = aa[i] + 3
// 	// if(aa[i] % 2 == 0){
// 	// 	console.log(aa[i]);
// 	// }
// 	i += 1
// }

// console.log(aa);




// while(position< 6){
// 	console.log("position is: " + position);
	
// 	console.log("item is : ", aa[position]);
// 	position += 1;
// 	console.log("");
	
// }
// console.log("----------------")
// for (let position = 0; position < aa.length; position++) {
// 	console.log("position is: " + position);
	
// 	console.log("item is : ", aa[position]);
// 	console.log("");
// }

// let qq = [1,2,10,2,30,4,4,44]

// for(i = qq.length-1; i>=0; i--){
// 	{
// 		if(qq[i] % 10 !==0)
// 		// qq[i] = qq[i] + 10

// 		console.log(qq[i])
// 	}
// }
// let pp = [11,221,33,444,5,66,21]
// let kk = 0
// while(kk <=pp.length-1){
// 	// pp[kk] = pp[kk] + 10
// 	if(pp[kk] % 2 !== 0){

// 		console.log(pp[kk])
// 	}
// 	kk++
// }

// let ps = pp.length-1
//  while(ps >=0){
// 	console.log(pp[ps]);
//  	ps -= 1
//  }

// let pos = pp.length
// while(pos >= 0){
// 	console.log(pp[pos])
// pos--
// // }
// for(let i = pp.length-1; i>=0; i--){
// 	// if(pp[i] % 2 !== 0)
// 	pp[i] = pp[i] + 1 
// 	console.log(pp[i])
// }

let bb = [8,9,6,7,5,4,3,6,21,3,5,7,8,99]
// print the odd numbers
for(let i = 0; i<=bb.length-1; i++){
	if(bb[i] % 2 !== 0){
	// console.log(bb[i])
}
}

// using while loop add 1 to every item in the list

// prilnte tthe even numbers in while loop
let fr = 0
while(fr <=  bb.length-1){
	bb[fr] = bb[fr] +1
	fr++
}
console.log(bb)


let pos = 0
while(pos <=bb.length-1){
	if(bb[pos] % 2 !== 0){
		// console.log(bb[pos])
	}
	pos++
}

// 
for(i = bb.length-1; i>0; i--){
	// console.log(bb[i])
}
// that takes 3 numbers and logs their sum


// that takes 3 arrays, and logs one array that contains all three
// addThreeArrays([1,2,3], [1,2,5], [6,9]) -> [1,2,3,1,2,5,6,9]

// that takes a name and logs hellow plus the name you are given

// that takes an array and prints even numbers


function addthree(num1, num2, num3){
    console.log(num1 + num2 + num3)
}
// addthree(1,2,3)

function addThreeArrays(ff1, ff2, ff3){
    let sumArraray = ff1.concat(ff2).concat(ff3)
    console.log(sumArraray)
}
//addThreeArrays([1,2,], [1,2], [6,9])

function findName(name){
    console.log("hello ", name)
}
//findName("siyaad")

function printEven(dd){
    for(i = 0; i<=dd.length-1; i++){
        if(dd[i] % 2 === 0){
            console.log(dd[i])
        }
    }
}


//printEven([1,2,3,4,5,6]) // it should print 2, 4, 6

// a funciton that takes an array and adds 5 to every element
function addFive(mm){
    for(i = 0; i<=mm.length-1; i++){
       mm[i] = mm[i] + 5
    }
    console.log(mm)
}
addFive([1,3,4,5,7])

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

// function getBudgets(arr) {
//         let totalBudget = 0
//         for(i=0; i<arr.length; i++){
//             totalBudget += arr[i].budget
//         }
//         //  let total = {
//             return totalBudget
//          }
//         // console.log(totalAge)
    
//         console.log(getBudgets([
//             { name: "John", age: 21, budget: 23000 },
//             { name: "Steve", age: 32, budget: 40000 },
//             { name: "Martin", age: 16, budget: 2700 }
//             ])); //➞ 65700))

// function getBudgets(arr){
//     let totalBudget = 0;
//     for(i = 0; i<arr.length; i++){
//         totalBudget += arr[i].budget 
//     }
//     return totalBudget
//     }
//     console.log(getBudgets([
//         { name: "John", age: 21, budget: 23000 },
//         { name: "Steve", age: 32, budget: 40000 },
//         { name: "Martin", age: 16, budget: 2700 }
//         ])) //➞ 65700

//         console.log(getBudgets([
//             { name: "John",  age: 21, budget: 29000 },
//             { name: "Steve",  age: 32, budget: 32000 },
//             { name: "Martin",  age: 16, budget: 1600 }
//           ])) //➞ 62600

// function getBudgets(arr) {
//     return arr
//       .map(obj => Object.values(obj)[2])
//       .reduce((acc, curr) => acc + curr);
//   }
//  console.log(getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
//   ])) //➞ 65700);
   function getBudgets(arr){
       return arr
       .map(obj => Object.values(obj)[2])
       .reduce((sall, curr) => sall + curr);
   }
   console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ])) //➞ 65700);
   