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

// let arr = [9,5,7,8,9,3,2,1];
// // isme jo 9 se chota he use nikalna he to yah 5 ko dedega jo use phle mila he use deta he 
//  console.log(arr.find(num => num <9))
// //  =========
// Q. find first even number to given array 

// // Q find user by id 
// const user  = [
//     {id:1,name:"A"},
//     {id:2,name:"B"},
//     {id:3,name:"C"},
//     {id:4,name:"D"},
//     {id:5,name:"E"},
// ]
// //  find the user with id 2

// let userById = user.find(user => user.id === 2)
// console.log(userById) // yah ak object return krta he

// //  sum of two number using arrow function
// let sum = (a,b) => a+b
// console.log(sum(10,20))

// // Student processing
// const students = [
//     {id:1,name:"A",marks:80},
//     {id:2,name:"B",marks:90},
//     {id:3,name:"C",marks:70},
//     {id:4,name:"D",marks:85},
// ]
// // takes  get student with marks>=40
// let good = students.filter(student => student.marks >= 40)
// console.log(good) // yah ak new array return krta he
// // increase marks of all student by 5
// let updatedStudents = students.map(student => ({
//     ...student,
//     marks: student.marks + 5
// }));
// console.log(updatedStudents);

// // return only name 
// let studentNames = students.map(student => student.name)
// console.log(studentNames) // yah ak new array return krta he

// // filter + map 
// // frome an array
// //  Filter numbers greter than 10 
// let filteredNumbers = [1, 2, 3, 4, 5, 11, 7, 12, 9, 10].filter(num => num > 10);
// console.log(filteredNumbers);
// // then square the filtered numbers
// let squaredNumbers = filteredNumbers.map(num => num * num);
// console.log(squaredNumbers);

// // Q price update
// let products = [
//     {name:"Shirt",price:100},
//     {name:"Pant",price:200},
//     {name:"Shoes",price:300},
// ]
// // increase price of all products by 10%
// let updatedProducts = products.map(product => ({
//     ...product,
//     price: product.price * 1.1
// }));
// console.log(updatedProducts);
// ==========================================================
// 3rd day

// reduce(): this method reduces all array elements in a signle value.
// use  sum, max, min, multiplicationt

// array.reduce((accumulator,currentValue) =>{
    // return accumalator},initialValue)
// accumulator = store result after each itertion
// currentValue = current element
// initialValue = starting value of the accumulator

// total number of sum
// let numbers = [10 ,20 ,30 ,40]
// let total =numbers.reduce((sum,num) => sum+num ,0) // 0 initial value he
// console.log(total)+

// largest number of
// let numbers = [12, 45, 20, 34 ,89]
// let max = numbers.reduce((largest,num) =>{
//     if (num>largest) {
//         return num;
//     } else {
//         return largest
        
//     }
// }, numbers[0])
// console.log(max)


// let employees = [
//     {name:"John", Salary:30000},
//     {name:"Alice", Salary:400000},
//     {name:"Jack", Salary:35000},
//     {name:"Bob",Salary:100000}
// ]
// // tatal salary
// let tolSal = employees.reduce((sum,emp) => sum+emp.Salary,0)
// console.log(tolSal)

// ======================================================
// new topic

// Destructuring 
// array & object

// let book  = ["EcmaScript",2500,800,["JS Publication",2015]]

// let first = book[0]  // before ES6

// let [bookTile, pages, price, [publicationName, publicationYear]] = book  /// isme kya hota he book ke elements hote he vo iske variable me store ho jate he 
// console.log(publicationName)
// jese hame kis ak access krna he to sab nam nhi rkhana nhi chahte he to usko coma de kr chhod skte he 

// let [  ,  ,  , publicationName] = book
// console.log(publicationName)


// =================
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  let filteredArr = numbers.filter(num => num % 2 ===0)
//  console.log(filteredArr)

//  let[first, , third]= filteredArr
//  console.log(first,third)

// ==================================================
// object bali  Destructuring 

// let book = {
//     bookTitle:"EcmaScript 6",
//     pages:4500,
//     price:1500,
//     publication:{

//         publicatioName: "JS Publication",
//         year:2015
//     }
// }
// main rule
// variable name must be same with property name initially
// let {bookTitle, pages, price, publication:{publicatioName, year}} = book;
// console.log(pages)
// isme kya hota he jo name object me diya hota he usi access kr skte he but ham iska name bhi change bhi kr skte he 
// let {bookTitle, pages, price:Rate, publication:{publicatioName, year}} = book; // isme price ka name change kr ke Rate rkha he 
// console.log(Rate)

// // ========================================================
// const books = ["book1","book2","book3","book4"]
// let [first, second, ...rest] = books // rest operator use krke baki ke element ko ak array me store kr skte he
// console.log(rest) // yah ak new array return krta he


// =============
// Q. Destructuring in function parameter
// const student = {name:"A",marks:90};
// // Write a function that prints name and mrks using destructuring in function parameter
// function printStudent({name, marks}) {
//     console.log(`Name: ${name}, Marks: ${marks}`);
// }
// printStudent(student);

// ================
// Q. Convert array to objects
// const names = ["A","B","C"];
// Convert into:
// [{name:"A"},{name:"B"},{name:"C"}]
// const students = names.map(name => ({ name }));
// console.log(students);


// ==========================================================================
// new topic start

// Spread Oprator/ Rest Parameter:......
// Although both use the same syntax(....), they serves different purpose.
// Spead operator: Expand or spread elements. array and object
// Array - copy ,merge,add new elements of an array
// Rest parameter: collectios multiple elements into single array, fucntion when you have multiple paramaters
// arguments
// ====================
// // copy of an array
//  let arr1 = [1 ,2, 3,4];
//  let arr2 =[...arr1] // aisa krne first array secound array mecopy ho gya he 
//  console.log(arr2)
// =========================
// // merge array 
// let arr1 = [1, 2, 3, 4, 5, 6]
// // let arr2 = [7, 8, 9, 10, 11]
// // // let margeArr =[...arr1,...arr2] /// aise marge krte he 
// // // console.log(margeArr)
// // or 

// let arr2 = [...arr1,7,8,9,10,11] // aise bhi marge kr skte wthout store other variable (ise ham kahi bhi rkh skt he biche me phle bad me man kre vha )
// console.log(arr2)
// =====================
 
// let obj1 = {
//     name:"Neeraj Singh"
// }

// let obj2 = {
//     age:23
// }

// let NameAge = {...obj1,...obj2}  // aise object ko bhi marge kr skte he 
// console.log(NameAge)
// ===================
// Q.  Destructure the array and store EcmaScript6 in a separate variable and other values will be in separate
// single variable

// let book = ["Ecmascripts6",2500,800,["JS Publication",2015]]

// let [bookTitle ,...rest]=book; /// isme booktitle me Ecmascripts6 store ho gya he or ja bacha he rest me 

// console.log(bookTitle)
// console.log(rest) //// rest array return krta he (isme multiple vlaue hote he islye yh array me store krte he )
// ==============================

// Rest Parameter: sum of function


// store all elements
const show = (...nums) =>{ // rest parameter use huaa he ak ak krke value ko store krta he 
    console.log(nums)  // array return krta he 
}
show(10,20,30,40)

// =======
const sum = (...numbers) =>{

    let total = 0;
    for(let i=0;i<numbers.length;i++){
        total += numbers[i]
    }
    return total
}
console.log(sum(10,20,30))
console.log(sum(120 ,456,3,54,9))
console.log(sum(10,20))
console.log(sum(10))

let display = (first, ...rest) =>{
    console.log(first) /// isme 1 aa jayega 
    console.log(rest) // 1 ke bad jo kuch bacha he isme aa jata he array ki form me 
}
display(1, 2, 3, 4, 5)