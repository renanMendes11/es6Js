// Destructuring Assignment

// simple assignment
var arr = ['Node', 'React', 'React Native', ['JS']];
var node = arr[0];
var react = arr[1];
var reactNative = arr[2];
var js = arr[3][0];

//destructuring
var [node2, react2, reactNative2, [js2], value] = arr;

console.log(node, node2);
console.log(js, js2);
console.log(value); // undefined

// com objetos

var obj = {
    name: 'Renan',
    props: {
        age: 22,
        favoriteColors: ['Black', 'Blue']
    }
}
var name1 = obj.name;
var age = obj.props.age;
var color1 = obj.props.favoriteColors[0];
var color2 = obj.props.favoriteColors[1];

//destructuring
var { name: name2 } = obj;
var { age: age2 } = obj.props;
var { props: { age: age3 , favoriteColors: [color3, color4] } 
} = obj;  

console.log(name1, name2);
console.log(age, age2, age3);
console.log(color1, color2, color3, color4);

// functions

function sum (arr){
    return arr[0] + arr[1];
}

//com destructuring
function sum2 ([a, b]){
    return a + b;
}

console.log(sum([5,5]));
console.log(sum2([5,10]));