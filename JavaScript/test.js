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
numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let primeNumbers = [];

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

for (let i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    primeNumbers.push(numbers[i]);
  }
}
console.log(primeNumbers);
