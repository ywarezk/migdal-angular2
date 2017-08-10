// interfaces in typescript

// syntax: interface <name> {}

interface Point {
    x: number;
    y: number;
}

const myPoint : Point = {
    x: 32,
    y: 45
}

/// optional param

interface Point3D {
    x: number;
    y: number;
    z? : number;
}

// extends interface

// interface Point3D extends Point{
//     z? : number;
// }

const my3dPoint : Point3D = {
    x: 0,
    y: 0,
    z: 5
}

/// function interface

interface MyFunction {
    (message : string) : void
}

// const myFunction : (arg1 : string) => : void = function(arg1){
//     console.log(arg1);
// }

const myFunction : MyFunction = function(arg1){
    console.log(arg1);
}







