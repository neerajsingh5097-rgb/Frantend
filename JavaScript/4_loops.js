// loop in js are used to excute a block of code repeatedly until a cretain condition is met.There are three main 
// tpyes of loops in js For loop, While loop, do-while loops.

// For loop-> a for loop is used to excuted a block of code specified number of time .The basic syntax of a For loop is as follows
// ------------------------------------------------------------------------------------------------

// print hello javascript using while loop in 10times

// let i= 1;
// while(i<=10){
//     console.log("Hello JacvaScript")
//     i++;
// }
// ------------------------------------------------------------------------------------------------

// Q. 1 to 100 number are print  using for loop

// for(let i =1; i<=100; i++){
//     console.log(i)
// }

// ------------------------------------------------------------------------------------
// Q. 5 to 25 ke bich ke even numbeer to print now using do-while loop

// let i =5;
// do {
//    if (i % 2 ===0) {
//     console.log("print even number 5 to 25 ke bich ke" + i)
//    } 
//    i++;
// } while (i<=25);

// ==========================================================

// Q.  Print the seriesw: 10 20 30 40 50 60 ..................100 using for loop
 
// for(let i = 10; i<=100; i=i+10){

//     console.log(i)
// }
// Q. prin the series: 105 98 91 .........7

// for(let i =105;i>=7;i=i-7){
//     console.log(i)
// }
// --------------------------------------------------------------------------------------


// fibonacci series upto 10th term
// 0 1 1 2 3 5 8 ...........

let n = parseFloat(prompt("Enter the numbedr of the term: ")); // 10
let first = 0;
let second = 1;
let count = 1;
 while (count <= n) {
   console.log(first)  // 0 1
   
   let next = first + second; // 2
   first = second; // 1
   second = next; // 1

   count++
 }


