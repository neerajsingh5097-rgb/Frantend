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
// default parameter :-> function me agar hum kisi parameter ko define nhi krte he to uska default value undefined hota he,
// function add(a,b=0){  // parameters
//     return a+b;`
// }
// console.log(add(1,20)) //30  // arguments
// console.log(add(20))  // isme 20+0 = 20 ayega arror nhi dega
// ========================================================================================================
