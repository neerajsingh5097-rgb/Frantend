// creating object using {} key(property)-value
// student -> rollno,name,subject,class....
// employee -> empid,name,designation,salary,address,skills,dept




let student = {
    rollno: 101,
    name: "Neeraj Singh",
    subject: "Computer Science",
    class: "10th",
    employee: {  // object inside object
        empId: 101,
        name: "Alice",
        emailid: "alice@email.com",
        salary: 45000,
        address: {
            city: "Noida",
            state: "UP",
            pincode: 201301,
            country: "India"
        },
        skills: ["Java", "Python", "SQL"],
        designation: "Developer"

    }
}
console.log(student.name)
console.log(student.employee.address.city)
console.log(student.employee.skills[1])
console.log(student)
// // mutating(updating, changing, or modifying) object's property 
// // add kro age 26
student.age=26
console.log(student)
// // hame skills ke under or skills add krni he tab ham push method ka use krte he becouse skills array he isliye
student.employee.skills.push("JavaScript")
console.log(student.employee.skills[3])
// // Update salary 50000
student.employee.salary=50000
console.log(student.employee.salary)
// // delete skills
delete student.employee.skills
console.log(student.employee.skills) // undefined(ayega becouse skilss he nhi he object me)


let employee = {
    empId: 101,
    name: "Alice",
    emailid: "alice@email.com",
    designation: "Developer",
    salary: 45000,
}
// keys, values
console.log(Object.keys(employee)); // return keys in an array
console.log(Object.values(employee)); // return values in an array

// Methods: function inside object

// let user = {
//     name: "Alice",
//     sayHi: function () { // before ES6
//         console.log("Hello....")
//     },
//     sayBye() { // after ES6
//         console.log("Byee....")
//     }
// }
// user.sayHi()
// user.sayBye()



// let user = {
//     name: "Alice",
//     sayHi: function () {
//         console.log("Hello...." + this.name)
//     }
// }

// user.sayHi()


// let user = {
//     name: "John",
//     designation: "Developer",
//     sayDetails() {
//         console.log("Hello, my name is " + this.name + " ,and i have a " + car.brand + " car")
//     }
// }
// let car = {
//     brand: "Toyota",
//     color: "Black"
// }
// user.sayDetails()
// hello my name is John,and i have a Toyota car.

// let student = new Object();
// student.name = "Alice";
// student.class = 10
// console.log(student)


// Create an object person with:
//  name
//  age
//  a function greet() that prints:
// "Hello, my name is ___" 
// let calculator = {
//     add(a, b) {
//         console.log(a + b)
//     },

// }
// object.add(19, 40)




// creating object using {} key(property)-value
// student -> rollno,name,subject,class....
// employee -> empid,name,designation,salary,address,skills,dept

let student = {
    rollno: 101,
    name: "Neeraj Singh",
    subject: "Computer Science",
    class: "10th",
    employee: {
        empId: 101,
        name: "Alice",
        emailid: "alice@email.com",
        salary: 45000,
        address: {
            city: "Noida",
            state: "UP",
            pincode: 201301,
            country: "India"
        },
        skills: ["Java", "Python", "SQL"],
        designation: "Developer"

    }
}
console.log(student.name)
console.log(student.employee.address.city)
console.log(student.employee.skills[1])
console.log(student)
// // mutating(updating, changing, or modifying) object's property 
// // add kro age 26
student.age=26
console.log(student)
// // hame skills ke under or skills add krni he tab ham push method ka use krte he becouse skills array he isliye
student.employee.skills.push("JavaScript")
console.log(student.employee.skills[3])
// // Update salary 50000
student.employee.salary=50000
console.log(student.employee.salary)
// // delete skills
delete student.employee.skills
console.log(student.employee.skills) // undefined(ayega becouse skilss he nhi he object me)