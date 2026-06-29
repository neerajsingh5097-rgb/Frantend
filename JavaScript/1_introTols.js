// Print statement:       
// alert() -pop-up   (for user only)jab ham koi for vagera sumit karte he tab pop-up ka box type aata he tp yah usi ke liye he
// console.log() -right click on browser-> inspect -> console
// use to display output in the brower's developer console. It is mainly used for debugging and chaecking values
//  while writing code..
 
// document.writeln - in document      iska ham kam use krte he

// alert(1234)    // yah screen pr alert krta he 
// Hello JavaScript
// alert('helloo') // isme "", '' cotetion ka use kr skte heyah errar nhi dega but one time ak use krna he 
// alert("Hello javascript")

// console.log("Hello Java")   // yah console pr aaate he 
// console.log(1234)  // aisa krte to yah number ki trh save ktra he console.log("1234") to yah string trh save krta he

// ------------------------------------------------------------------------------------------------------------------------------
// Data Type: A data type defines the kind of vslue stroe in variable.

// premetive data type:
// 1. string: stores test ' ' " " radha 
// 2. number: integer/float- 1234,1.2,2.3 etc
// 3. boolean: (1)true, false(0)
// 4. undefined: a variable declared but not assigned a value.

// non-premetive/complex data type: array, object,functio,null(intentionally empty)

// .........................................................................................................

// how to check data type : datatype of
// console.log(typeof(1234))
// console.log(typeof("hello"))
// console.log(typeof(12.3))
// console.log(typeof(true))
// console.log(typeof('1234'))

// 10line line of code 
// 1 se 5 tak sahi he 6 line me error ho gayi he to yah 7 line ko run nhi karega yah line by line code execute krta he

// --------------------------------------------------------------------------------------------------------------------

//  Variable in Javascript: Variable is container use to store data.
// data can be anything like number, string, function, array, boolean.
// variable name must be meaningful  dont't accept any special character(%,#,@,-...) except($,_)
// dont't start variable name with numeric character
// no space in variable name
// num1 num2
// 1num X yah glt he
// camelCasing ka use kran chahiye like nameOf, dataType, userName , firstName......

// How to declare variablr?
// var: global scope->(variable can be reassigned,can be update) iska mtlv he ise isi file kahi bhi use(access) kr sket h {} iske bahar bhi use kr skate  he
// let: local scope { } isi braket ke undar use kr skte he(can not be reassigned,value can be upadte)
// const: local/block scope {},constant

// var num;  // undefine dega usme hamane koi value nhi di he
// num = 10; // assigment /expression
// console.log(num)

// var num=20
// {var num = 30} // yah globle scope he iske breket ke bahar bhi essis kr skte he
// console.log(num)

// let num = 50;
// // let num=40  //Identifier 'num' has already been declared
// console.log(num)

// {let num = 60;
//     console.log(num) // ise ham { } iske undeer hi essis kr skte he bas
// }

// {let num = 50}
// console.log(num)  //Uncaught ReferenceError: num is not defined kuch asie error dega

// let userName= "Radha";
// userName = "Krishan"  // isme update kr deta  he
// console.log(userName)

// {
//     let userName = 'Alis'
//     console.log(userName)
// }

// {
//   let userName = 'john'
//     console.log(userName)  // {} ke under rkhne se yah user name same hone ise koi frk nhi hota qkyki yah use dubara se save krta hr
// }

// const num =126
// num=65   // Uncaught TypeError: Assignment to constant variable.
// console.log(num)


// Concatination: to merje strig + variable/dynamic value
let userName ='radhe';
let age = 20;
// print: My name is Radhe rani
console.log("My name is " + userName + " my age " + age)  

