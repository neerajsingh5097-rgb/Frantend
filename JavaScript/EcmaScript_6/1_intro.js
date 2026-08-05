// let : can not accept redeclaration, value can be update later,block scope
// const : can not accept redeclaration, block scope, constant

// const num = 10;
// num = 30;
// console.log(num)  //  Assignment to constant variable.

// {
//     let num  = 30; // braket ke under hi access kr ste he only out of breaket not use this num properties
// }
// {
//     let num = 50; // isse ak fayada bhi he yah breket ke under hi use hota he isliye bahar bale se koi mtlv nhi he chahe same name ke variable hi ho
// }

// [
//     {id:20,name:"",class:""},
//     {id:20}
// ]

// let username= "Alic";
// let age =25
// // My name is : Alic
// // console.log("My name is "+username + " my age is " +age)
// console.log(`My name is ${username}. My age is ${age}`) // jo tab button ke upr bala button he vhi he
// // + opretor ki need nhi hoti he bar //
// =======================================================
// // Arrow function: =>

// // simple function
// function sum(a,b){
//     return a+b;
// }

// console.log(sum(10,20));

// to convert into arrow function
// let sum =(a,b) =>{
//     return a+b;
// }
// console.log(sum(10,50))
// ==============================
// i. multiple parameters:() tab ham is tahar se likhte he
// let checkNum = (num) => {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };
// //// let checknum = num => num % 2 === 0 ? "Even" : "Odd"

// console.log(checkNum(5))

// ====================
// ii single parameter  - you can avoid ()

// double of 5
// function double(num) {
//     return num * 2
// }

// let double = num => num * 2
// console.log(double(5))

// let greet = () => {
//     console.log("Helloooo")
// }

// document.addEventListener("click", () => {
//     alert()
// })
// ===============================================
// 2nd Day
// Array Method : map(), filter(), find()

// filter():- usee to filter values/element based on condition and return a new array
// original array length may be modified
// arr.filter(function(parameter){condition return})
// this parameter will check each element of an array and condition
// in simple word(yah condition ke base pr filter krta he or yah ak new array return krta he or iski array ki length bhi modified bhi ho jati he (ho bhi jaye na bhi ho ))

// let number = [12, 6, 34, 8, 34, 27, 5, 15, 7, 54];
// [12,34,27,15,54] yah array return krna he

// this qustion sole by without using filter
// let number = [12, 6, 34, 8, 34, 27, 5, 15, 7, 54];
// let result = [];

// for (let i = 0; i < number.length; i++) {
//     // स्थिति: संख्या 10 या उससे बड़ी हो और परिणामी सरणी में पहले से मौजूद न हो
//     if (number[i] > 10 ) {
//         result.push(number[i]);
//     }
// }

// console.log(result); // आउटपुट: [12, 34, 27, 15, 54]

// this question solve by using filter method
// let filterArr = number.filter(function(num){

//     return num>10
// })
// console.log(filterArr)

// // // uper code convert into one line or isme arrow function ka use kiya he
// console.log(number.filter(num = (num)=>{return num >10})) // or sort krna he
// console.log(number.filter(num => num>10)) // console me islye print kra diya he kyoki yah one line code he
// ===============
// now using filter to find even number to given array like in below

// let mixArr = [15, 78, 65, 48, 32, 4, 2, 9, 1, 3];
// // create a even array like this [78,48,32,4,2]

// let evenArr = mixArr.filter(num => {
//     if(num % 2 ===0){
//         return num
//     }
// })
// console.log(evenArr)
// // uper code convert into one line
// console.log(mixArr.filter(num => num%2 ===0)) // both code are same
// ================
// Q.
// let team = [
//     {name:"John",position:"Developer"},
//     {name:"Jack",position:"Manager"},
//     {name:"Alic",position:"Developer"},
//     {name:"Bob",position:"lead"},
// ]

// let developers = team.filter(dev => dev.position ==="Developer") // yaha pr dev vah ak perameter he name position data store ho rha he
// console.log(developers)
// ==================================================================
// map():- yah bhi new array return krta he , yah array ki length ko modifiy nhi krta he
// use of map(); data fetch from api,store data in new array
// Q.
// let arr = [1, 2, 3, 4, 5];
// // [2,4,6,8,10] 
// // [1,4,9,16,25]

// console.log(arr.map(num => num+num)) // num ak perameter he isme array ki value store ho rhi he one by one
// console.log(arr.map(num => num*num))  // in tis code to show the squre of given array number 

// console.log(arr.map(num => num>2)) // map will not given a arror becouse map return the boolen values and not modifiy the lengh of array 
// =============================================================================
// find():- can not return array, return first match element (in simple lag - jab koi array me 1 to se 5 number he use 2 ko find krna he to jaya pr 2 mil jayega vahi se yah use reutrn kr deta he )

let arr = [9,5,7,8,9,3,2,1];
// isme jo 9 se chota he use nikalna he to yah 5 ko dedega jo use phle mila he use deta he 
 console.log(arr.find(num => num <9))
//  =========
// Q. find first even number to given array 

let mix 

