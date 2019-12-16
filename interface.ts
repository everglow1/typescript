function printLabek(labekkedObj: {label: string}) {
	console.log(labekkedObj.label);
}

let myObj = {
	size: 10,
	label: 'Size 10'
}
printLabek(myObj)

interface LabelVal {
	label: string
}
function printLabel(labekkedObj: LabelVal) {
	return labekkedObj
}
let my = {
	size: 10,
	label: 'Size 10 Object'
}
printLabel(my)

interface Poi {
	readonly x: number;
	readonly y: number;
}
let p1: Poi = {
	x: 10,
	y: 20
}

let a: number[] = [1,2,3,4]
let ro: ReadonlyArray<number> = [2,4]

interface SquatrConfig {
	color?: string;
	width?: number;
	[pro: string]: any;
}

interface SearchFunc {
	(source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
	let result = source.search(subString);
	return result > -1;
}


interface StringArray {
	[index: number]: string;
}
let myArray: StringArray;
myArray = ['bob', 'fred'];

let myStr: string = myArray[0];

// class Animal {
// 	name: string;
// }
// class Dog extends Animal {
// 	bred: string
// }

// interface ClockInterface {
// 	currentTime: Date;
// }
// class Clock implements ClockInterface {
// 	currentTime: Date;
// 	constructor(h: number, m: number) {}
// }

// interface ClockInterface {
// 	currentTime: Date;
// 	setTime(d: Date): void;
// }

// class Clock implements ClockInterface {
// 	currentTime: Date;
// 	constructor() {
// 		this.currentTime = new Date()
// 	}
// 	setTime(d: Date) {
// 		this.currentTime = d;
// 	}
// }

// interface Shape {
// 	color: string;
// }

// interface Square extends Shape {
// 	sideLength: number;
// }

// let square= <Square>{};
// square.color = "blue";
// square.sideLength = 10;

interface Counter {
	(start: number): string;
	interval: number;
	reset(): void;
}

function getCounter(): Counter {
	let counter = <Counter>function (start: number) {
	}
	counter.interval = 123;
	counter.reset = function() {

	}
	return counter
}

