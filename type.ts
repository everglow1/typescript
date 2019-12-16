// 数组
let list: null[] = [null,null,null];
let lis: Array<number|string> = [1,'ss',3];

// 元祖 表示一个已知数量和类型的数组
// let x: [string, number];
// x = ['saa', 10];
// 枚举
enum Color {red, green, blue};
let c: Color = Color.green;

enum Colorr {red = 1, green, blue}
let ColorName: string = Color[2]
console.log(ColorName)

let unable: void = undefined;

let someValue: any = 'this is string';
let strLength: number = (<string>someValue).length;

let str: number = (someValue as string).length;