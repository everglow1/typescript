// function sayHello(person: string) {
//   return 'hello' + person;
// }
// let userr = [111,222,33];
// console.log(sayHello(userr))
var isDOne = true;
var myFav;
myFav = '111';
myFav = 222;
function getLength(something) {
    return something.toString();
}
var tom = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
var fibonacci = [1, 2, 2];
function sum() {
    var args = arguments;
    return args;
}
var mySearchs;
mySearchs = function (source, subString) {
    return source.search(subString) !== 1;
};
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'cat'; }
    return firstName + lastName;
}
function push(arrry) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        arrry.push(items);
    });
}
var b = [];
function reverse(x) {
    // if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
    // } else if (typeof x === 'string') {
    //   return x.split('').reverse().join('');
    // }
}
