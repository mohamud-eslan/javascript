//Create the function that takes an array with objects and returns the sum of people's budgets.

//Examples
function getBudgets(array){
    let totalBudget = 0;
    for(i = 0; i<array.length; i++){
        totalBudget = totalBudget +  array[i].budget
    }
  
    return totalBudget
}
 
console.log(getBudgets([
{ name: "John", age: 21, budget: 1 },
{ name: "Steve", age: 32, budget: 2 },
{ name: "Martin", age: 16, budget: 3 }
])) //➞ 65700

console.log(getBudgets([
{ name: "John", age: 21, budget: 29000 },
{ name: "Steve", age: 32, budget: 32000 },
{ name: "Martin", age: 16, budget: 1600 }
])) //➞ 62600

