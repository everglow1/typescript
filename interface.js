"use strict";
function printLabek(labekkedObj) {
    console.log(labekkedObj.label);
}
var myObj = {
    size: 10,
    label: 'Size 10'
};
printLabek(myObj);
function printLabel(labekkedObj) {
    return labekkedObj;
}
var my = {
    size: 10,
    label: 'Size 10 Object'
};
printLabel(my);
var p1 = {
    x: 10,
    y: 20
};
var a = [1, 2, 3, 4];
var ro = [2, 4];
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myArray;
myArray = ['bob', 'fred'];
var myStr = myArray[0];
function getCounter() {
    var counter = function (start) {
    };
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
