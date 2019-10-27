// Enhanced Objects Literals

var prop2 = 123;
var prop3 = 50;
var propName = 'prop4';
var obj1 = {
    prop1: 'Hello word',
    prop2: prop2,
    prop3,  // com omissao (ES6)
    [propName + 'concat']: 'prop 4' 
}
console.log(obj1);
//com metodos
function method1(){
    console.log('method 1');
}
var obj2 = {
    method1,
    method2: function sum(a , b){
        return a + b;
    },
    sum(a, b){
        return a + b;
    }
}
obj2.method1();
console.log(obj2.method2(1, 1));
console.log(obj2.sum(2, 2));