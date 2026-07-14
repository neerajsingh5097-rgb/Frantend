// Conditional statements in javascript are used to execute code based on certain conditions. The most common conditional statements are if, else if, and else.

// Username =="admin"
// access

// declaration:
// if(condition){
//     // code to be executed if the condition is true
// } else if (condition) { 
//     // code to be executed if the condition is true
// } else {
//     // code to be executed if the condition is false
// } 

// ----------------------------------------------------------------------------------------------------------
// let username = prompt("Enter your username: ");

// if (username === "admin") {
//     console.log("Access granted. Welcome, admin!");
// } else if (username === "user") {
//     console.log("Access granted. Welcome, user!");
// } else {
//     console.log("Access denied. Please try again.");
// }
// -----------------------------------------------------------------------------------------------------
// take  two numbers and check witch one is large number.

// let num1 = parseFloat(prompt("Enter the first number: "));
// let num2 = parseFloat(prompt("Enter the second number: "));
// if (num1 > num2) {
//         console.log(num1 + " is the larger number.");
//     } else if(num2>num1){
//     console.log(num2 + " is the larger number1.");
// }else{
//     console.log("Both are equal ")
// }
// ------------------------------------------------------------------------------------------------
// // WAC to check whether a number is positive or nagative
// let num =-10;
// if(num >=0){
//     console.log(num+" is positive ")
// }else{
//     console.log(num+" is negative")
// }
// --------------------------------------------------------------------------------------------
// WAC to check whether a person is eligible for vote or NodeIterator, age>=18

// let age = 15;
//  if(age>=18){
//     console.log("person is eligible for vote")
//  }else{
//         console.log("person is not eligible for vote")

//  }
// --------------------------------------------------------------------------------------
// WAC to check whether a person is senior citizen or not . age >= 60
// write a code to check whether it is a square or rectangle.
// -----------------------------------------------------------------------------
// Take 3 inputs,check Largest number

// let num1 = 10;
// let num2 = 30;
// let num3 = 15;
// if(num1 > num2 && num1>3){
//     console.log( num1 + " is largest number")
// }else if(num2 > num1 && num2 > num3){
//      console.log( num2 + " is largest number")  
// }else if(num3> num1 && num3 > num2){
//      console.log( num3 + " is largest number")

// }else{
//     console.log("Invalid Inputs ")
// }
// ----------------------------------------------------------------------------------
// Take 3 inputs,check Smalest number nkalo
// ------------------------------------------------------------------------------------
// WAC to check whether a number is even or odd

// let num = parseInt(prompt("Enter the first number: "));
// if (num %2 == 0) {
//     console.log(num + " number is even")
// } else {
//         console.log( num + " number is odd")

// }

// ---------------------------------------------------------------------------------------
// Take a number.
// If divisible by 3 and5 - Print "DIvisible by 3 and 5"
// If divisible by only 3  - Print "DIvisible by 3"
// If divisible by only 5 - Print "DIvisible by  5"
// else - print "nOt divisible by 3 or 5"

// let num = 15;
// if (num % 3 == 0 && num % 5 ==0) {
//     console.log("Divisible by 3 and 5")
    
// } else if(num % 3 ==0) {
//     console.log("print Divisible by 3")
    
// }else if(num % 5 ==0){
//     console.log("Divible by 5")
// }else{
//     console.log(
//         ' not divisible by 3 or 5'
//     )
// }

// //Q. compare karana he konsa number equale he
// let num1 = 40;
// let num2 = 40;
// let num3 = 30;
// // num1 = num2 && num2 = num3 
// if (num1 === num2 && num2 === num3) {
//   console.log("All numbers are equal");
  
// } else if(num1 === num2 || num2 === num3 || num1 === num3) {
//   console.log("Two number are equals")
// }else{
//   console.log("All numbers are diffrent")
// }
// =========================================================================================

// Q. grade calculater:
// Assign grad based on marks
// marks 90+ than grad A
// marks 75-89 than grad B
// marks 60-74 than grad C
// marks 40-50 than grad D
// marks 40 than grad Fail

// let marks = 60;

// if(marks >= 90 ){
//   console.log("Grad A")
// }else if(marks <= 89 && marks >=75){
//   console.log("Grad B")
// }else if( marks <= 74 && marks >= 60){
//   console.log("Grad c")
// }else if(marks <=50 && marks>= 40){
//   console.log("Gtrad D")
// }else{
//   console.log("Fail")
// }

// ===============================================================================================
// Q. Electricity Bill Discount
// Apply Dis count based on bill amount
// above 5000 -> 20% discount
// above 3000 -> 10% dis 
// otherwise no discount

//  let bill = 2000;
//   if(bill >= 5000){
//     let dis = bill*20/100;
//     let totalbill = bill - dis;
//     console.log("Without discount bill " + bill)
//     console.log("With discount bill " + totalbill)
//   } else if( bill>=3000){
//      let dis = bill*10/100;
//      let totalbill = bill - dis;
//     console.log("Without discount bill " + bill)
//     console.log("With discount bill " + totalbill)
//   }else{
//     console.log("no discount " + bill)

//   }
// ------------------------------------------------------------------------------------------------------
// Q. take three input and find witch one is secound largest number
// let num1 = 40;
// let num2 = 50;
// let num1 = 20;
// // (num1 < num3 && num1 > num2 )||(num1 < num2 && num1 > num3)
// if( (num1 < num3 && num1 > num2 )||(num1 < num2 && num1 > num3)){

// }

// ==========================================================================================
// new topic
// ------------------------------------------------------------------------------------------

// A switch Statements is used to excute diffrent block of code depending on diffrent cases:

// decleration
// switch (type)
// case 1 : if case is matched
// block of code
// default:

// Q.  day 1 =  Monday, day 2 = Tuesday, day 3 = Wednesday.......so on

// var num = parseInt(prompt("Enter the number and find the day name : "))
//   switch (num) {
//     case 1: 
//       console.log("Monday")
//       break;
  
//     case 2: 
//        console.log("Tuesday");
//        break;
//     case 3: 
//     console.log("Wednesday");
//     break;
//    case 4: 
//       console.log("Thursday")
//       break;
  
//     case 5: 
//        console.log("Friday");
//        break;
//     case 6: 
//     console.log("Saturday");
//     break;
//    case 7: 
//     console.log("Sunday");
//     break;
  
//     default:
//       console.log(
//         "invailid data"
//       )
//       break;
//   }
// ----------------------------------------------------------------------------------------------------

// Display the following mwnu using prompt()
// ATM Menu:
// 1. Check Balance
// 2. Deposit
// 3. Withdraw
// 4. Exit
// Accept the user choice and perform the corresponding action.
// Option 1: Display the current balance (initially set to 1000).
// Option 2: Ask the user to enter deposite amount ,add it to the balace and display the updated balance.(using prompt() and alert() function)
// Option 3: Ask the user to enter 
// Option 4: Exit the program.

// let balance = 1000;

// let choice = Number(
//     prompt(
//         "ATM Menu\n " +
//         "1. Check Balance\n"+
//         "2. Deposit\n" +
//         "3. Withdraw\n" +
//         "4. Exit\n\n" ,
//         "Enter your choice:"
//     )
// );

// switch (choice) {
//     case 1:
//         alert("Current Balance: ₹" + balance);
//         break;

//     case 2:
//         let deposit = Number(prompt("Enter deposit amount:"));
//         balance += deposit;
//         alert("Updated Balance: ₹" + balance);
//         break;

//     case 3:
//         let withdraw = Number(prompt("Enter withdrawal amount:"));

//         if (withdraw <= balance) {
//             balance -= withdraw;
//             alert("Remaining Balance: ₹" + balance);
//         } else {
//             alert("Insufficient Balance");
//         }
//         break;

//     case 4:
//         alert("Thank you! Visit again");
//         break;

//     default:
//         alert("Invalid choice");
// }

// let x = 0;
// let y = 2;
// let z = 4;

// if (x >= y && x >= z) {
//   if (y >= z) {
//     console.log(x + ", " + y + ", " + z);
//   } else {
//     console.log(x + ", " + z + ", " + y);
//   }
// } else if (y >= x && y >= z) {
//   if (x >= z) {
//     console.log(y + ", " + x + ", " + z);
//   } else {
//     console.log(y + ", " + z + ", " + x);
//   }
// } else {
//   if (x >= y) {
//     console.log(z + ", " + x + ", " + y);
//   } else {
//     console.log(z + ", " + y + ", " + x);
//   }
// }


// let num = 10;

// while (num>=1) {
//   console.log(num)
//   num--;
  
// }

// let num1 =105;

// while (num1>=7) {
//    console.log(num1);
//    num1= num1 -7;
  
// }

// let n = 1;
// sum=0;
// while (n<=10) {
//   sum = sum+n;
//   n++;
// }
// console.log(sum)

// let n = 1;
// sum=0;
// while (n<=20) {
//   if(n % 2 ===0){
//     sum = sum + n;
//   }
//   n++;
// }
// console.log(sum)

// let n = parseInt(prompt("enter the number:"))
// count = 0;
// i=1;
// while (i<=n) {
//   if (i % 2 ===0) {
//     count++;
//   }
//   i++
// }
// console.log(count)

// for (let i = 0; i <= n; i++) {
//   if (i % 2 ===0) {
//     count++;
//   }
  
// }

// let num1 = parseInt(prompt("enter the first number:"))

// let num2 = parseInt(prompt("enter the 2nd number :"))

// for (let i = num1; i <= num2; i++){
//   console.log(i)

// }

let n = 10;
number = 0;
 for(let i =1;i<=n; i++){
  for(let j = 2; j<=i-1; j++){
    if(i % j ===0){
      number++;
      // console.log(i)
    }
  }
  if (number ===0) {
    console.log("number is prime to print " + i)
  }else{
    number=0;
  }
 }


