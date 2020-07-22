"use strict";
// 数组
var list = [null, null, null];
var lis = [1, 'ss', 3];
// 元祖 表示一个已知数量和类型的数组
// let x: [string, number];
// x = ['saa', 10];
// 枚举
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var c = Color.green;
var Colorr;
(function (Colorr) {
    Colorr[Colorr["red"] = 1] = "red";
    Colorr[Colorr["green"] = 2] = "green";
    Colorr[Colorr["blue"] = 3] = "blue";
})(Colorr || (Colorr = {}));
var ColorName = Color[2];
console.log(ColorName);
var unable = undefined;
var someValue = 'this is string';
var strLength = someValue.length;
var str = someValue.length;
