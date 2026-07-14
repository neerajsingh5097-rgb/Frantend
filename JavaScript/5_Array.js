//  Array:- in JS an array is a data strucure that allows you to store multiple values in a single variable
// It is a container that holds an ordered collection of elements , which can be of any data type. such as 
// numbers, string, objects, or even other array.
// How to create array [] we can seperate elements using ,
// array indexing will start with 0 
// total number of elements - start with 1

// let language = ["JavaScript", "Python","Java" , "c++", 1234,true,["A","B"]]
// we can access elements using array[index]

// console.log(language[1])
// console.log(language)
// accessing nested array element - arr[nested arrayn index][element index]
// console.log(language[6][1])

// Length of an array - arr.length
// console.log(language.length) //7
// -----------------------------------------------------------------------------------------
// Array Methods:
// let arr_language = ["JavaScript","Java","C++","HTML"]
// koi bhi elements ko add krne ke liye push() method ka use krte he 
// arr_language.push("CSS");  // this is add the element in last position array
// console.log(arr_language)
// ======
// if you want to add the elements in first(like 0th index) position of array than you use to unshift() method is use
// arr_language.unshift("Hindi")
// console.log(arr_language)
// =======
// remove element to use pop() method  use to delete element of array(last element ko delete krta he)
// arr_language.pop();  // this method to delete the last element of array
// arr_language.splice(2,1);  // remove element from specific element - ( indexing, number of element)
// arr_language.splice(2, 0, "English") // insert element in specific index,(index,0(zero hi rkhna he tabhi add krega) ,"element")
// arr_language.splice(1,1,"Ramayan") // update element ,(index, 1 , "updatedElement")
// console.log(arr_language)

// let arr2_frameWork = ["Django","Spring","Fast API"];
// let arr3_database = ["SQl","NoSql"];
// merge/copy/concat/add two or more array to use -> concat()- this  method will not upadate the original array.
// return new array
// let margedArray = arr_language.concat(arr2_frameWork,arr3_database)
// console.log(margedArray)

// access first element
// console.log(arr_language[0])
// access last element: using length keyword interview mw puchta he
// console.log(arr_language[arr_language.length-1])  // isme braket lagana jaruri he nhi to yah index print kr dega
// --------------------------------------------------------------------------------------------------------

// join() method array ko string me convert kr deta he,this  method will not upadate the original array.
// let arr_language = ["JavaScript","Java","C++","HTML"]
// let arrToString = arr_language.join(" ,")
// console.log(arrToString)
// console.log(typeof arrToString)

// split() method : string ko string me convert krta he 
// let lang = "Math";
// // let strToArr = lang.split(" "); // ["Math"]
// let strToArr = lang.split(""); // ["M","a","t","h"]

// console.log(strToArr)
// =====================================================================================
// indexOf()
// let arr_language = ["JavaScript","Java","C++","HTML"]
// let index= arr_language.indexOf("Java")
// console.log(index)
// ==================================================================================
// includes()-> yah check krta he ki element he ki nhi or ans deta he true or fald me
// let arr_language = ["JavaScript","Java","C++","HTML"]
// let exists = arr_language.includes("Java")
// console.log(exists)
// ====================================================================================
// slice() method ka use ham yah krte he ki kisi array me se element ko remove krna he kaha se kaha tak
// let arr =[12, 14, 15, 5, 58, 78, 69]
// // remove krna he 5 , 58 ,78
// let newArr  = arr.slice(3,6); // starting index , index of from where to remove
// console.log(newArr)
// ============================================================================
// reverse()
// let arr =[12, 14, 15, 5, 58, 78, 69]
// console.log(arr.reverse())

// let framework = ["React","Angular", "Django","Spring"]
// // to channge ya fir upadte kro ki Django ko "Fast API" se replace krna he to use splice() method
// framework.splice(2,1,"Fast API") // (index, number of element to remove, "new element")
// console.log(framework)
// ========================================================================================
// Q.1 Write a JavaScript program to add an element at the end of an array.
// let arr = ["JavaScript", "Python", "Java"];
// arr.push("C++");
// console.log(arr);
// Q.2 Write a JavaScript program to remove the last element from an array.
// let arr = ["JavaScript", "Python", "Java"];
// arr.pop();   
// console.log(arr);
// Q.3 Write a JavaScript program to add an element at the beginning of an array.
// let arr = ["JavaScript", "Python", "Java"];
// arr.unshift("C++");
// console.log(arr);
// Q.4 Write a Javascript program to remove the first element from an array.
// let arr = ["JavaScript", "Python", "Java"];
// arr.shift(); 
// console.log(arr);
// Q.5 Write a JavaScript program to find the index of an element in an array.
// let arr = ["JavaScript", "Python", "Java"];
// let index = arr.indexOf("Python");
// console.log(index);`


