// function identity(arg: number): number {
// 	return arg
// }

// function identity1(arg: any): any {
// 	return arg;
// }

// function identity2<T>(arg: T): T {
// 	return arg;
// }

// let output = identity2<string>('myString');

// function loggingIdentify<T>(arg: T[]): T[] {
// 	console.log(arg.length)
// 	return arg;
// }

// function identity3<T>(arg: T): T {
// 	return arg;
// }

// let myIdentify: <T>(arg: T) => T = identity3;

// 范型接口
// interface GenericIdentutyFn {
// 	<T>(arg: T): T;
// }
// function identity<T>(arg: T): T {
// 	return arg;
// }

// let myIdentify: GenericIdentutyFn = identity;

// interface Generic<T> {
// 	(arg: T): T;
// }
// function identity<T>(arg: T): T {
// 	return arg;
// }
// let myIdentify: Generic<number> = identity;

// class GenericNumber<T> {
// 	zeroValue: T;
// 	constructor(msg: T) {
// 		this.zeroValue = msg
// 	}
// 	add: (x: T, y: T) => T;
// }

// interface Lengthwise {
// 	length: number;
// }
// function loggingIdentify<T extends Lengthwise>(arg: T) {
// 	console.log(arg.length);
// 	return arg;
// }

// loggingIdentify({length: 1})

// function getProperty<T, key extends keyof T>(obj: T, key: K) {
// 	return obj[key];
// }

// let x = {
// 	a: 1,
// 	b: 2,
// 	c: 3
// }
