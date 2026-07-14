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
