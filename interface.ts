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

