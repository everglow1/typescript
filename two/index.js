"use strict";
// function sayHello(person: string) {
//   return 'hello' + person;
// }
// let userr = [111,222,33];
// console.log(sayHello(userr))
// let isDOne: boolean = true;
// let myFav: string | number;
// myFav = '111';
// myFav = 222;
// function getLength(something: string | number): string {
//   return something.toString();
// }
// // interface Persons {
// //   name: string;
// //   age?: number;
// //   [propName: string]: any;
// // }
// // let tom: Persons = {
// //   name: 'Tom',
// //   age: 25,
// //   gender: 'male'
// // };
// interface Persons {
//   readonly id: number;
//   name: string;
//   age?: number;
//   [propName: string]: any;
// }
// let tom: Persons = {
//   id: 89757,
//   name: 'Tom',
//   gender: 'male'
// };
// // tom.id = 9527;
// // let fibonacci: number[] = [1,2,3];
// // let fibonacci: Array<number> = [1,2,3];
// interface NumberArray {
//   [ddd: number]: number
// }
// let fibonacci: NumberArray = [1,2,2];
// function sum() {
//   let args: IArguments = arguments;
//   return args
// }
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
// let mySearchs: SearchFunc;
// mySearchs = function(source: string, subString: string) {
//   return source.search(subString) !== 1;
// }
// function buildName(firstName: string, lastName: string = 'cat') {
//   return firstName + lastName
// }
// function push(arrry: any[], ...items: any[]) {
//   items.forEach(function(item) {
//     arrry.push(items)
//   })
// }
// let b = [];
// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//   // if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''));
//   // } else if (typeof x === 'string') {
//   //   return x.split('').reverse().join('');
//   // }
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// interface Fish {
//   name: string;
//   swim(): void;
// }
// // function isFish(animal: Cat | Fish) {
// //   if (typeof (animal as Fish).swim === 'function') {
// //       return true;
// //   }
// //   return false;
// // }
// const toms: Cat = {
//   name: 'Tom',
//   run() {
//     console.log('run')
//   }
// };
// // (window as any).name = 1
// function getCacheData(key: string): any {
//   return (window as any).caches[key];
// }
// type EventName = 'click' | 'scroll' | 'mousemove';
// function handleEvent(ele: EventName, event: EventName) {
// }
// let tom: [string, number];
// enum Days {Sun, Mon, Tue, Wed, Fri, Sat}
// console.log(Days['Sun'] === 0)
// console.log(Days['Mon'] === 1)
// const enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// interface Alarm {
//   alert(): void;
// }
// interface Light {
//   lightOn(): void;
//   lightOff(): void;
// }
// class Door {
// }
// class SecurityDoor extends Door implements Alarm {
//   alert() {
//     console.log('SecurityDoor alert');
//   }
// }
// class Car implements Alarm, Light {
//   alert() {
//     console.log('Car alert')
//   }
//   lightOn() {
//   }
//   lightOff() {
//   }
// }
// class Point {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }
// interface Point3d extends Point {
// }
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(2, 'x');
