/// Define variables in JS

// var message = 'hello';
// message = 10;

function sayHello(isHello){
    if (isHello) {
        var message = 'Hello Migdal';
    }
    console.log(message);
}

sayHello(true); // hello migdal
sayHello(false); // undefined
