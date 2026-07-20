// Q.14 Remove Negative Numbers:take an array containing positive and naegative numbers. Using a loopp, create a
//  new array containning only posiitive numbers. Display the new array in the console.
// let arr = [12, -14, 15, -5, 58, -78, 69];
// let newArr1= [];
// let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         newArr1.push(arr[i]);
//     }else{
//         newArr2.push(arr[i]);
//     }
// }
// console.log(newArr1);
// console.log(newArr2);

// Q.15 Student Pass/Fail Report: store marks of 10 students in an array. Using a loop,count passed and failed students.
// marks 40 or above are Pass. Aso display the highest marks.
// let marks = [45, 38, 72, 65, 40, 35, 80, 42, 55, 30];
// let passed = 0;
// let failed = 0;
// let highest = marks[0];

// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] >= 40) {
//         passed++;
//     } else {
//         failed++;
//     }
//     if (marks[i] > highest) {
//         highest = marks[i];
//     }
// }
// console.log("Passed students:", passed);
// console.log("Failed students:", failed);
// console.log("Highest marks:", highest);

// Q.13 Day Type Using Switch: take a day number from 1to 7. Create a fuction using switch case to display the day name and whether it is a "weekday
// // "or "weekend".
// function getDayType(dayNumber) {
//     let dayName;
//     let dayType;

//     switch (dayNumber) {
//         case 1:
//             dayName = "Monday";
//             dayType = "weekday";
//             break;
//         case 2:
//             dayName = "Tuesday";
//             dayType = "weekday";
//             break;
//         case 3:
//             dayName = "Wednesday";
//             dayType = "weekday";
//             break;
//         case 4:
//             dayName = "Thursday";
//             dayType = "weekday";
//             break;
//         case 5:
//             dayName = "Friday";
//             dayType = "weekday";
//             break;
//         case 6:
//             dayName = "Saturday";
//             dayType = "weekend";
//             break;
//         case 7:
//             dayName = "Sunday";
//             dayType = "weekend";
//             break;
//         default:
//             dayName = "Invalid day number";
//             dayType = "Invalid";
//     }

//     console.log("Day:", dayName + ", Type:", dayType);
// }
// getDayType(1); // Day: Monday, Type: weekday
// getDayType(6); // Day: Saturday, Type: weekend

// Q.11 print Number from Array: take an array of number,Create a fuction that checks every element and prints only the prime numbers fro the array.
// numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let primeNumbers = [];

// function isPrime(number) {
//   if (number <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (isPrime(numbers[i])) {
//     primeNumbers.push(numbers[i]);
//   }
// }
// console.log(primeNumbers);

// =========================================================================================================================
// Q.1 Student Result Analysis: Take marks of 5 subjects in an array. Using a loop, calculate total and percentage.
//  Using if-else if, display Grade A for 90%+, Grade B for 75%+, Grade C for 60%+, Grade D for 40%+, otherwise Fail.

// let marks = [85, 92, 78, 88, 95]; // Marks of 5 subjects
// let total = 0;
// for (let i = 0; i < marks.length; i++) {
//     total += marks[i]; // Calculate total marks
// }
// console.log("Total Marks:", total);

// let percentage = (total / (marks.length * 100)) * 100;
// console.log("Percentage:", percentage.toFixed(2) + "%");   
//                                                                  // let num = 123.45678;
//                     //  to.fixed  ka use                         //console.log(num.toFixed(2)); // "123.46" (ध्यान दें: यह राउंड अप हो गया है)
//                                                                  //console.log(num.toFixed(4)); // "123.4568

// if (percentage>= 90) {
//   console.log("Grade: A");
// } else if (percentage>= 75) {
//   console.log("Grade: B");
// } else if (percentage>= 60) {
//   console.log("Grade: C");
// } else if (percentage>= 40) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: Fail");
// }
// ==========================================================================================================================
// Q.2 Employee Salary Analysis: Store salaries of 5 employees in an array. Using a loop, find the highest salary, 
// lowest salary, and count how many employees earn more than ₹50,000.
let saL = [45000, 60000, 75000, 50000, 80000]; // Salaries of 5 employees
let highestSalary = saL[0];
let lowestSalary = saL[0];
let countAbove50k = 0;

for (let i = 0; i < saL.length; i++) {
    if (saL[i] > highestSalary) {
        highestSalary = saL[i];
    }
    if (saL[i] < lowestSalary) {
        lowestSalary = saL[i];
    }
    if (saL[i] > 50000) {
        countAbove50k++;
    }
}
console.log("Highest Salary:", highestSalary);
console.log("Lowest Salary:", lowestSalary);
console.log("Count of Employees Earning More than ₹50,000:", countAbove50k);
