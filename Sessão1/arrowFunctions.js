// functions simples
function log(value){
    console.log(value);
}
log('Função Simples');

//functions anonimas
var log = function (value){
    console.log(value);
}
log('Funcão anonima');

// arrow functions são tambem funcões anonimas
//var sum = (a, b) => { return a + b }
var sum = (a, b) => a + b; // return implicito
console.log(sum(10, 10));

// com 1 argumento
var sum = a => a + 10;
// retornano obejto
var createObj = () => ({ test : 123});
console.log(createObj());
//arrow functions em problemas de contexto
var obj = {
    showContextOld: function showContextOld(){
        var _that = this;
        setTimeout(function(){
            _that.log('after 1000ms');
        }, 1000);
    },
    showContextNew: function showContextNew(){
        setTimeout(() => {
            this.log('after 1000ms with arrow func');
        },1000)
    },
    log: function log(value){
        console.log(value);
    }
}
obj.showContextOld();
obj.showContextNew();