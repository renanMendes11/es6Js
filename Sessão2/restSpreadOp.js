// conceitos de Rest, Spread Operator

// forma classica
function sum (a, b){
    var value = 0;
    //palavra reservada: arguments
    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}
console.log(sum(5, 5, 5, 5));

// com ES6, rest operator
function sum(... args){
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5));
//argumentos restantes
var sum1 = (a, b, ... rest) =>{
    console.log(a, b, rest);
}
sum(1, 2, 3, 4);

// rest operator vs spread operator

//rest
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
console.log(multiply(2, 2, 2));

//spread
const sum2 = (...rest) => {
    return multiply(...rest);
}

console.log(sum2(5, 5, 5, 2, 3));

