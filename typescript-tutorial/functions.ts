/// functions

/// lambda function
/// syntax: (arg1 : <type>, arg2, ...) => { ... }
/// syntax: arg1 => { ... }
/// syntax: (arg1) => arg1 // (arg1) => { return arg1; }
/// syntax: arg1 => arg1

var Pokemon = function Pokemon(name, age){
    var xthis = this;
    this.name = name;
    this.age = age;

    var _myPrivateProperty = 32;
    var _myPrivateFunction =  function(){
        // ...
    };

    this.sayHello = function sayHello(){
        console.log(this.name + ' said hello');
    }

    this.birthday = function(){
        setTimeout(() => {
            this.age++;
        }, 1000);
    }
}

var pikachu = new Pokemon('pikachu', 32);
pikachu.birthday();
setTimeout(function(){
    console.log(pikachu.age);
}, 2000);

/// default value

function sayHello(name : string, age : string = '32', message : string){

}

sayHello('Yariv', undefined, 'hello');














