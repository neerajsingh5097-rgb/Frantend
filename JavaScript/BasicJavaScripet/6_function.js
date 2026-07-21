//  Function :-> In js function are block of code that can be define and excuted to poerform a specific 
// task or ser of task. They are  a fundamental part of the languaGE AND ALLOWS you to 
// reusable and modular code.

// built- in function :-> js me kuch built-in function hote he jise hum use kr skte he like alert(), prompt(), confirm() etc
// annonymous function :-> js me function ko define krte he bina kisi name ke use annonymous function bolte he
//  function declaration :-> function keyword ka use krke function ko define krte he
// fuction expression :-> function ko variable me assign krke use krte he
// immediately invoked function expression (IIFE) :-> (one time excution, fuction without name)function ko turant call krne ke liye use krte he
// arrow fuction -ES6 me introduce hua he, arrow function ka use krke function ko define krte he, arrow function me this keyword ka use krte he
// ================================================================================================
// function exprression :-> function ko variable me assign krke use krte he
// function functionName(parameters){
//     // code to be executed
// }
// ================================================================================================
// sum of two number using function
// function sum(a,b){
//     console.log(a+b)`; //30
// }
// console.log(sum(10,20)) ;
// ========================================================================================================
// invoke/call function
// function greet(name){
//     console.log("Hello User" )
// }

// greet("John") //Hello User
// ========================================================================================================
// function with return type
// function add(a,b){  // parameters
//     return a+b;
// }
// console.log(add(1,20)) //30  // arguments
// console.log(add(20))  // isme 20+undefined = NaN ayega arror nhi dega 
// console.log(add(0,20))
// console.log(add(11,20,30,40)) // isme 11+20=31 ayega baki ko ignore kr dega
// ========================================================================================================
// ** default parameter :-> function me agar hum kisi parameter ko define nhi krte he to uska default value undefined hota he,
// function add(a,b=0){  // parameters
//     return a+b;`
// }
// console.log(add(1,20)) //30  // arguments
//  console.log(add(20))  // isme 20+0 = 20 ayega arror nhi dega


// function greet(name="User"){  // default parameter
//     console.log("Hello " + name)
// }
// greet() //Hello User
// greet("John") //Hello John`
// ========================================================================================================
// annonymous function :-> js me function ko define krte he bina kisi name ke use annonymous function bolte he

//  this variabler behaves like a fuction but not completely a fuction
// let greet = function(name){
//     console.log("Hello " + name)
// }
// greet("John") //Hello John
// ========================================================================================================
// *** Hoisting :-> js me function ko define krne se pehle hi use kr skte he, isse hoisting bolte he(to pull fuction and vartiablr declartion to top of their scope ,- before ES6)
// greet("John") //Hello John
// function greet(name){
//     console.log("Hello " + name)
// }

// yah keval js me hita he other language me nhi he.
//  isme only var ka use hota he let and const me nhi hota he becouse let and const are block scope and var is function scope

// // greet("John") //greet is not a function
// var greet = function(name){  // isme let kiya to is prakir se error dega->Cannot access 'greet' before initialization
//     console.log("Hello " + name)
// }

// var num; //declaration
// console.log(num) //undefined
// num = 10;

// console.log(num) // undefined
// var num;// declaration
// num = 10; //expression/assignment

// var a;
// console.log(a) //undefined
// a = 10;

 
//  num = 10; //expression/assignment
// console.log(num) // undefined
// var num;// declaration
// // jay only declaration ko pull keta  he only
// =========================================================================================================
// immediately invoked function expression (IIFE) :-> (one time excution, fuction without name)function ko turant call krne ke liye use krte he
// (function(){
//     console.log("Hello User")
// })() //Hello User    // hay fuction only one time use/call hota he
//  //()  // reuse nhi hota he error dega
// ==========================================================================================================
// Q.1 What is fuction in js? Explain different types of function in js with example.
// Q.2 what is function expression in js? Explain with example.
// Q.3 what is annonymous function in js? Explain with example.
// Q.4 what is IIFE in js? Explain with example.
// Q.5 what is arrow function in js? Explain with example.
// Q.6 what is hoisting in js? Explain with example.
// Q.7 what is default parameter in js? Explain with example.





// 1. Student Result Analysis: Take marks of 5 subjects in an array. Using a loop, calculate total and percentage. Using if-else if, display Grade A for 90%+, Grade B for 75%+, Grade C for 60%+, Grade D for 40%+, otherwise Fail.
// 2. Employee Salary Analysis: Store salaries of 5 employees in an array. Using a loop, find the highest salary, lowest salary, and count how many employees earn more than ₹50,000.
// 3. Shopping Bill Discount: Store prices of 5 products in an array. Calculate the total bill using a loop. If the total is above ₹5000, apply a 20% discount; if above ₹3000, apply 10%; otherwise no discount. Display total, discount amount, and final amount.
// 4. Array Element Search: Take an array and a number from the user. Check whether the number exists in the array using a loop. Display "Element Found" or "Element Not Found".
// 5. Calculator Using Function and Switch: Create a function calculator(a, b, operation). Use switch case to perform Addition, Subtraction, Multiplication, and Division based on the operation passed.
// 6. Even and Odd Array: Take an array of 10 numbers. Using a loop, store even numbers in a new even array and odd numbers in a new odd array using push().
// 7. Square Each Element: Take an array of numbers. Create a function that stores the square of each element in a new array using a loop and push().
// 8. Second Largest Number: Take an array of 10 numbers. Find the second largest number without using sort().
// 9. ATM Menu System: Create a program with an initial balance of ₹10,000. Display Deposit, Withdraw, Check Balance, and Exit. Use switch case for the selected option and a loop to keep displaying the menu until Exit is selected.
// 10. Count Positive, Negative, and Zero: Take an array of numbers. Using a loop and if-else if, count positive numbers, negative numbers, and zeros separately.
// 11. Prime Numbers from Array: Take an array of numbers. Create a function that checks every element and prints only the prime numbers from the array.
// 12. Employee Bonus: Store employee salaries in an array. Create a function to calculate bonus for every employee: salary ≥ ₹50,000 gets 20%, salary ≥ ₹30,000 gets 10%, otherwise 5%. Store updated salaries in a new array.
// 13. Day Type Using Switch: Take a day number from 1 to 7. Create a function using switch case to display the day name and whether it is a "Weekday" or "Weekend".
// 14. Remove Negative Numbers: Take an array containing positive and negative numbers. Using a loop, create a new array containing only positive numbers. Do not use filter().
// 15. Student Pass/Fail Report: Store marks of 10 students in an array. Using a loop, count passed and failed students. Marks 40 or above are Pass. Also display the highest marks.