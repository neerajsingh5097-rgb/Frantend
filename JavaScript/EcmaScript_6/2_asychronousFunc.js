// Asynchronous Functions in JS:
// --------------------------- //
// JavaScript is a synchronous and single thread
// only one task can be performed at a time
// this run as line by line

// data fetching from db, api, file read, timer  (in sab me sab me isko use krte he )

// page load
// data show
// data fetch form db
// 

// application became slow

// asynchronous function
// *** Promise, async-await(preffered,top of promise,)
// A Promise is an Object that represents the future result of an asynchronous operation
// it tells
// I will give you result later-> seccess, failure
// pending
// Promise have 3 state
// pending
// resolve - data fetched
// reject - error

// syntex
// creating promise
// const promise = new Promise((resolve,reject) =>{
//     let success = true;
//     if(success){
//         resolve("Take completed")
//     }else{
//         reject("Task failed")
//     }
// })
// // // consuming promise
// promise
//        .then(res => console.log(res))
//        .catch(err => console.log(err))
//        .finally(console.log("Done"))
// =====================================================================
// const dataPromise = new Promise((res) => {
//     setTimeout(() => {
//         res("Data fetched")
//     }, 2000)
// })

// dataPromise.then(res => console.log(res))

// console.log("Hello")

// setTimeout(() => {
//     console.log("Hello World")
// }, 3000)

// ==============================================================================

// fake api/dummy api

// endpoints
// https://fakestoreapi.com/users

