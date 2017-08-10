/// classes

/// syntax: class <class name> { }

class Pokemon {
    // public name : string = '';
    // private readonly age : number = 0;

    // constructor(strenght : boolean = true){
    //
    // } // Error

    constructor(public name : string = 'Pikachu', private age : number = 32){
    }

    // constructor(name : string = 'Pikachu'){
    //
    // } // for sport error!

    sayHello() : string{
        // return 'hello';
        return `hello my name is ${this.name}`;
        // return `hello my name is ${name}`; // OK!
    }

    private _myPrivateFunction() : number{
        return 3;
    }
}

// instance

const myPokemon : Pokemon = new Pokemon('squirtle');

/// inheritance
//// syntax: class <name of class> extends <class to extend> {}

class WaterPokemon extends Pokemon {
    constructor(name : string, age : number, public waterStrength : number = 200){
        super(name, age);
    }
}

/// abstract

abstract  class Person {
    constructor(public name : string = 'Yariv'){

    }

    abstract getGrade() : number;
}

class Student extends Person {
    constructor(public name : string = 'yariv', public grade : number = 0) {
        super(name);
    }

    getGrade(){
        return this.grade;
    }
}

const goodStudent : Student = new Student();

interface PositionPoint {
    getPosition : () => number;
}

class GPS implements PositionPoint {
    getPosition() : number {
        return 10;
    }
}