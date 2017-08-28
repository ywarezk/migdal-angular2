// Promise

import {Promise} from "es6-promise";

// promise example

// let promise : Promise<string> = new Promise((resolve : (event : any) => any, reject) => {
//     console.log('1');
//     setTimeout(() => {
//         console.log('4');
//         resolve('hello from promise');
//         // reject('error message');
//     }, 1000)
// });
//
// console.log('2');
// promise.then(function resolve1(message : string){
//     console.log('5');
//     console.log(message);
// }, function reject1(errMsg : string){
//     console.log(errMsg);
// });
//
// console.log('3');

// chaining

// promise.then().then().then()...

console.log('1');
let promise : Promise<string> = new Promise((resolve : (event : any) => any, reject) => {
    console.log('2');
    setTimeout(() => {
        console.log('4');
        resolve('hello from promise');
        // reject('error message');
    }, 1000)
});

console.log('3');
// promise.then(function resolve1(message : string){
//     console.log('5');
//     console.log(message);
//     return message.length;
// }, function reject1(errMsg : string){
//     console.log(errMsg);
// }).then(function resolve2(num : Number){
//     console.log('6');
//     console.log(`we change the value from string to number: ${num}`);
// }, function reject2(){
//
// });

