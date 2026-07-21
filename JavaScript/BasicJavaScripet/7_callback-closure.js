//  yah dono topic imp he 

// Callback function is a function is a function that is passed as an arguments to another function and is excuted later.
// a function inside another function's argument

// Ex.
// ========================================================================
// // callback function
// function greet(name){
//     console.log("Hello " + name)
// }
// // Main function
// function processUser(callback){
//     let name = "Alice";
//     callback(name)
// }
// processUser(greet)

// Note-> greet function created
// processUser receive another function as parameter
// callback(name) calls greet(name)
// output printed
// ====================================================================

// function sayHi(){
//     console.log("Hello....")
// }
// function execute(callback){  // isme main fucntion phle call hota he 
//     callback()
// }
// execute(sayHi)

// real-life example
// ordering food:
// resturant prepare it
// when ready-> then call you
// that calling later behaviour is the callback
// ============================================================================
// function calculate(a,b, callback){
//     callback(a, b)
// }
// function add(x, y){
//     console.log(x+y)
// }

// calculate(10,20,add)
// ==============================================================================
// ==============================================================================

// Closure in JavaScript:- A closure is create when an inner function remember and variable from
// its oter function even after the outer function has finished execution
// simple word me -> when you to access outer function's variable, you have to create inner function
// Use for -> private variable when you have sensitive information or data(backend)

// function outer(){
//     let count = 0;

//     function inner(){
//         count++;
//         console.log(count)  // 1
//     }
//     return inner;
// }
// let counter = outer();
// counter(); // 1
// counter(); //2
// counter(); // 3
// ============================================
// function parent(){
//     let message = "Helloo";

//     function child(){
//         console.log(message)
//     }
//     return child;
// }

// let sayHi = parent();
// sayHi();
// =======================================
// function multiply(x){
//     return function(y){
//         return x * y 
//     }
// }
//  let double  = multiply(2);
//  console.log(double(5))
// ====================================
// Q. Create nested closure example with:
// outer
// middle
// inner
// access all parent variable

// function outer(){
//     let outerVar = "I am outer variable"
//      function middle(){
//         let middleVar = "I am middle variable"

//         function inner(){
//             let innerVar = "I am inner variable";

//             console.log(outerVar);
//             console.log(middleVar);
//             console.log(innerVar);
//         }
//         return inner;
//      }
//      return middle;
// }
// // outer() excutes, now excution goes inside
// // inside outer() variable created, middle function is create but not excuted yet then
// // entier middle function is returned and inside  -  middleFunction

// const middleFunction = outer();
// const innerFunction = middleFunction();
// innerFunction();

// ===================================================
// Q. Create a function counter(type) using closure.
// inside the function create a variable count = 0
// return another function
// if argument is:
// "inc" -> increase count
// "dec"-> decrease count
// Print Updated count after every function call

function  counter(){
    let count= 0;
    return function(type){
        if(type === "inc"){
            count++;
        }else if(type ==="dec"){

            count--;
        }
        console.log(count);
    }
}
 
const updateCount = counter("inc");
updateCount("inc"); // 1 
updateCount("inc");   // 2 
updateCount("inc");   // 3 

updateCount("dec");
updateCount("dec");