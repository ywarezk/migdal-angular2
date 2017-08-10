/// classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// syntax: class <class name> { }
var Pokemon = (function () {
    // public name : string = '';
    // private readonly age : number = 0;
    // constructor(strenght : boolean = true){
    //
    // } // Error
    function Pokemon(name, age) {
        if (name === void 0) { name = 'Pikachu'; }
        if (age === void 0) { age = 32; }
        this.name = name;
        this.age = age;
    }
    // constructor(name : string = 'Pikachu'){
    //
    // } // for sport error!
    Pokemon.prototype.sayHello = function () {
        // return 'hello';
        return "hello my name is " + this.name;
        // return `hello my name is ${name}`; // OK!
    };
    Pokemon.prototype._myPrivateFunction = function () {
        return 3;
    };
    return Pokemon;
}());
// instance
var myPokemon = new Pokemon('squirtle');
/// inheritance
//// syntax: class <name of class> extends <class to extend> {}
var WaterPokemon = (function (_super) {
    __extends(WaterPokemon, _super);
    function WaterPokemon(name, age, waterStrength) {
        if (waterStrength === void 0) { waterStrength = 200; }
        var _this = _super.call(this, name, age) || this;
        _this.waterStrength = waterStrength;
        return _this;
    }
    return WaterPokemon;
}(Pokemon));
/// abstract
var Person = (function () {
    function Person(name) {
        if (name === void 0) { name = 'Yariv'; }
        this.name = name;
    }
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, grade) {
        if (name === void 0) { name = 'yariv'; }
        if (grade === void 0) { grade = 0; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.getGrade = function () {
        return this.grade;
    };
    return Student;
}(Person));
var goodStudent = new Student();
