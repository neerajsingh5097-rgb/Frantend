// Operator is js; Operator special symabol that perform opration an value or variable
// atypes of Operator:
// Arithmetic Operators: use for arithemic calculation -> + - * / % (module/remainder)
 
// console.log( 10 + 20 )

// let num1 = 10;
// let num2 = 20;
//  console.log( "addition of two number " + (num1 +num2))
// console.log( "multiplication of two number " + (num1 * num2))
//  console.log( "sub  of two number " + (num1 - num2))
//   console.log( "div of two number " + (num1  / num2))
//    console.log( "remainder of two number " + (num1 % num2))

//  user input- prompt()
// let num1 = prompt("enter fist number");  // yah number ko string ke roop me save krta he addition me 
// let num2 = prompt("enter the second number");  // or sab me yah nhi krta he kyoki addtion symble ak operater he or ak syble for use adding two string
//  console.log( "addition of two number " + (num1 +num2))
// console.log( "multiplication of two number " + (num1 * num2))
//  console.log( "sub  of two number " + (num1 - num2))
//   console.log( "div of two number " + (num1  / num2))
//    console.log( "remainder of two number " + (num1 % num2))


// let num1 = parseInt(prompt("enter the first number ")); // yah number ko an stirn ke roop me save nhi karega 
// // let num2 = parseInt(prompt("enter the second number ")); // ab yah number ke rrop me asve krega yah desimal nhi leta he desimal ke liye parseFloat() use krna he 
// let num2 = parseFloat(prompt("enter the second number "));
//  console.log( "addition of two number " + (num1 +num2))
// console.log( "multiplication of two number " + (num1 * num2))
//  console.log( "sub  of two number " + (num1 - num2))
//   console.log( "div of two number " + (num1  / num2))
//    console.log( "remainder of two number " + (num1 % num2))
// // note-> isme yadi ham two number ka addi or multi, kr rhe he to yah addition me sting smjta he kyoki yah bian int me convert kiye yah addition ko astine smjata he or operation me vah sahi ans deta he un ko intiger smja he 

// -----------------------------------------------------------------------------------------------
// Assigment operators: used to assign values = , +=, -=,*=,/=
//  num += 10 // num= num + 10;
// sum +=num  // sum = sum + num:

// let num = 20
// num += 10; // num =num +10
// console.log(num)  // ans 30

// ============================================================================================
// Comparsion Operator: used to compare values
// > < >=(greater than or equal) <= == === != !==
// =   values assign krna 
// == values will compare
// ===  values and data types (both are check)

// console.log(6>5) //ans true
// console.log(5==5) // ans true
// console.log(5 == "5") // ans t
// console.log(5 === "5")   // ans f
// console.log(5 === 5)   // ans t  (jada tar ise used krte he)
// console.log(5<=5) // t
// console.log(5>=10) // f
// console.log(5!=5) // f

// ==========================================================================================
// 1. using user input perform arthimatic operation + * / % - 
// Code down side
//  let num1 = parseInt(prompt("Enter the first number "))
// let num2 = parseInt(prompt("Enter the secound number "))
//  console.log( "addition of two number " + (num1 +num2))
// console.log( "multiplication of two number " + (num1 * num2))
//  console.log( "sub  of two number " + (num1 - num2))
//   console.log( "div of two number " + (num1  / num2))
//    console.log( "remainder of two number " + (num1 % num2))

// 2. using user input perform comparison operator. == === !=
//  code down side 

//  let num1 = parseFloat(prompt("Enter the first number "))
// let num2 = parseFloat(prompt("Enter the secound number "))
// / console.log(6>5) //ans true
// // console.log(5==5) // ans true
// // console.log(5 == "5") // ans t
// // console.log(5 === "5")   // ans f
// // console.log(5 === 5)   // ans t  (jada tar ise used krte he)
// // console.log(5<=5) // t
// // console.log(5>=10) // f
// // console.log(5!=5) // f

// =================================================================================================
// Logical Operators: And($$), OR(||),Not(!
// && - multiple condition ckeck at a time in one if statements, each condition may satisfies
// ||- multiple condition ckeck at a time in one if statements, any one  condition may satisfies
// !- not equale


//  let num1 = parseFloat(prompt("Enter the first number "))
// let num2 = parseFloat(prompt("Enter the secound number "))
// let op = prompt("enter the case like mul, div, add, rem sub")

// switch (op) {
//     case "mul":
//         console.log(num1*num2)
        
//         break;
//     case "div":
//       console.log(num1/num2)
//       break;
//     case "add":
//       console.log(num1+num2)
//       break;
//     case "rem":
//       console.log(num1%num2)
//       break;
//     case "sub":
//       console.log(num1-num2)
//       break;
//     default:
//         console.log("invalid number")
//         break;
// }