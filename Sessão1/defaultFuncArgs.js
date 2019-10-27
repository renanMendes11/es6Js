// defaults functions arguments

//problema
function multiplyOld(a, b){
    return a * b;
}
console.log(multiplyOld(5)); // 5 * undefined = NaN

// solução
function multiplyNew(a = 2, b = 1){
    return a * b;
}
console.log(multiplyNew(5)); // 5 * 1 = 5
console.log(multiplyNew(undefined, 5)); // 2 * 5 = 10
console.log(multiplyNew()); // 2 * 1 = 2