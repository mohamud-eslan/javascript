// a function that takes a number as a parameter and logs that number
function printNum(number) {
    console.log(number);
}

// a function that takes a name and logs a greet
function greeting2(name, name2) {
    console.log("Hello " + name + " , and Hello " + name2);
}
// a function that takes two numbers and prints the total 
function firstAttempt(n1, n2) {
    console.log(n1 + n2)
    }
    // firstAttempt(2, 3)
    // firstAttempt(1, 8)
    // firstAttempt(4, 8)
    // firstAttempt(1, 5)

    // write a function that takes a number
    // if the number is even print "even"
    // if hte number is odd print "odd"

    function checkEven(number) {
        if (number % 2 == 0) {
            // console.log("even")
        }
        else {
            console.log("odd")
        }
    }
    // checkEven(4)


    // write a function that takes an array
    // and adds 1 to every element
function addOne(arrr){
    console.log("we are runing funciton addOne");
    for(i = 0; i<=arrr.length-1; i++){
        arrr[i] = arrr[i] + 1
    }
    console.log(arrr);
}

    addOne([9,8,7])


    // write a function that takes an array
    // and prints the even numbers
    
    function mixture(aa){
        for(i = 0; i<aa.length; i++){
            if(aa[i] % 2 == 0){
                console.log(aa[i])
            }
        }
    }
    // mixture( [1,2,3,4,8,44,33,45,23,12] )

    // mixture( [18,6,5,4,212] )


    // greeting2("Maxamuud", "Ziyaad")
    // greeting2("Messi", "Neymar")
    // greeting2("Donald Trump", "Kim Jong Un")


    //printNum(32)


    // a function that prints hello wolrd
    function geat() {
        console.log("hello world");
    }


    // a function logs greeting
    function salaan() {
        let name = "Maxamuud";
        let greeting = "Hello " + name;
        console.log(greeting);
    }

    // a funciton that adds two numbers and prints their sum
    function addTwoNumbers() {
        let num1 = 100
        let num2 = 299
        let sum = num1 + num2
        console.log(sum);
    }

    // // a funciton that prints odd numbers of array
    // function printOdd() {
    //     let aa = [1, 2, 34, 33, 23, 14, 56, 7, 8, 9]
    //     for (i = 0; i < aa.length; i++) {
    //         if (aa[i] % 2 === 0) {
    //             console.log(aa[i]);
    //         }
    //     }
    // }