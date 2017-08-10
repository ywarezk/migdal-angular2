// type annotation

/// syntax: let/const/var <name> : <type annotation> = ...

/// primitives types

let myNumber : number = 10;
let myString : string = 'hello';
let myBoolean : boolean = true;

// myNumber = 'hello';

/// array

///syntax: let/const/var <name> : Array<type>
/// let/const/var <name> : type[]

let myNumberArray : Array<number> = [];
let myStringArray : string[] = [];
// myNumberArray.push('hello'); //error!

/// any

let myAniDemo : any = 10;
myAniDemo = 'hello';
// let stamVar = 10;
// stamVar = 'sdf'; // error!

/// dictionary

let myDict : {[x : string] : number} = {

}

let myDictArray : {[x : string] : any[]} = {

}

// myDict['z'] = 'asdf'; // Error!
myDict['z'] = 10;

///

/// multiple types in variable

//// syntax: let/const/var <name of variable> : (type1 | type2 | type3 ...)

let myMultipleVar : (number | string) = 10;
myMultipleVar = 'hello';
// myMultipleVar = true; // error!

/// define variable as function
//// syntax : let/const/var <var name> : (paramName : <the type> , ...) => string

let myFunction : (message : string) => void = function(x : string){
    console.log(x);
}

// myFunction = function(z : string){
//     console.log(z);
// } // OK!

// myFunction = function(z : number){
//     console.log(z);
// } // Error!


// function sayHello(){
//
// }
//
// var myFunc = function ddd(){
//
// }
//
// sayHello();

/// cast
//// syntax : (<type of case>varName)
//// syntax : (varName as <type>)


let myCastNumber : number = 10;
// myCastNumber.length // Error!
(myCastNumber as any).length;
(<any>myCastNumber).length;
























