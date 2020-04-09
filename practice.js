// adding to list together
// slice a list
// remove item from a list
// what is the lenth of an array
// check if item includes in array

let num = [1,2,3,4,5,6,7,8,9,10]
let cats = [11,12,13]
let veg = num.concat(cats)
// console.log(veg)
veg.pop()
// console.log(veg)
// console.log(veg.length)
veg[2] = 33
// console.log(veg)
veg[11] = 120
// console.log(veg)

// change the number 7 into 'seven'
veg[6] = 'seven'
// console.log(veg)
// add the word 'veg' at the end of the list
veg.push("veg")
// console.log(veg)

// slice for me the items 4,5,6,
let aa = ["aaa", "f", "g", "4", 40, 2, 0]
// slice "f", "g",  and  40, 2
let nomber = aa.slice(1,3)
let qayb = aa.slice(4,6)
//slice(startingPos, endPosition+1)
console.log(nomber)
console.log(qayb)
let ab = [...nomber,...qayb,...veg]
// console.log(ab)

// removing item from an array
// yourArray.splice(positionOfItem, 1)
ab.splice(1,1)
console.log(ab)
ab.splice(9,1)
console.log(ab)

ab.splice(0,1)
// console.log(ab)
ab.splice(13,1)
// console.log(ab)
ab[9] = 99;
// console.log(ab)

ab.splice(1,1)
// console.log(ab)
let mynum = ab[ab.length-1]
console.log(mynum)


// check if 10 is in the list
console.log(ab.includes(120))


// how to 
// add item
// remove item
// remove last item
// slice items
// checkh if item is in list
// add two lists
// slice multiples places in list
// change item  in list
// lenght of list

//TODO:
// practive all above repeatedly - suggest 3 times each
// next time we should cover all the above in less 20 mins
// learn to do faster the things you do alot
//  e.g, saving, copying, runing terminal, commenting, uncommenting, organising your window for maximum viewability 
//   performing action on multiple lines using CTRL+D 
// learn to type faster
// next : String manipulation



let myList = ['mango','banana','avacado','apple','orange']
console.log(myList)
myList.push('babaya')
 console.log(myList)
myList.splice(1,1)
 console.log(myList)
myList.pop()
 console.log(myList)
let myFruits = myList.slice(1,3)
 console.log(myFruits)

 console.log(myList.includes('kiwi'))
let newFruits = ['tomato','lemon','onion','bricolli']
console.log(newFruits)
let totalFruits = [...myFruits,...newFruits]
console.log(totalFruits)
vegetables = totalFruits.slice(1,3)
console.log(vegetables)
let newVeg = totalFruits.slice(0,3)
 console.log(newVeg)
let totalVeg = [...vegetables,...newVeg]
 console.log(totalVeg)
totalVeg[1] = 'greenpaper'
 console.log(totalVeg)
 console.log(totalVeg.length)











