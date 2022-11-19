//Create the function that takes an array with objects and returns the sum of people's budgets.

//Examples
function getExpense(str) {
    totalExpense = 0;
    for (let i = 0; i < str.length; i++) {
        totalExpense = totalExpense + str[i].expense       
    }
    return totalExpense
}
console.log(getExpense([
    {name: "maxamud", age: 46, expense: 1},
    {name: "hasen", age: 40, expense: 2},
    {name: "calan", age: 26, expense: 3}
]));

console.log(getExpense([
    {name: "maxamud", age: 46, expense: 20000},
    {name: "hasen", age: 40, expense: 50000},
    {name: "calan", age: 26, expense: 30000}
]));
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

