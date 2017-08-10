/// functions in JS

function sayHello(arg1, arg2){
    /// ...
    /// this
}

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
        setTimeout(function(){
            xthis.age++;
        }, 1000);
    }
}

var pikachu = new Pokemon('pikachu', 32);
pikachu.birthday();
setTimeout(function(){
    console.log(pikachu.age);
}, 2000);

