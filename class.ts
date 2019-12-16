// class Greeter {
// 	greeter: string;
// 	constructor(message: string) {
// 		this.greeter = message;
// 	}
// 	greet() {
// 		return 'Hello, ' + this.greeter
// 	}
// }
// let greet = new Greeter('world');

// class Animal {
// 	move(distanceInMeters: number = 0) {
// 		console.log(`animal moved ${distanceInMeters}.`)
// 	}
// }

// class Dog extends Animal {
// 	bark() {
// 		console.log('woof! woof!')
// 	}
// }
// const dog = new Dog();
// dog.bark();
// dog.move(10);

// class Animal {
// 	name: string;
// 	constructor(theName: string) {
// 		this.name = theName;
// 	}
// 	move(distanceInMeters: number = 0) {
// 		console.log(`${this.name} moved ${distanceInMeters}m.`)
// 	}
// }

// class Snake extends Animal {
// 	constructor(name: string) {
// 		super(name);
// 	}
// 	move(distanceInMeters = 5) {
// 		console.log('Slithering...')
// 		super.move(distanceInMeters)
// 	}
// }

// class Horse extends Animal {
// 	constructor(name: string) {
// 		super(name);
// 	}
// 	move(distanceInMeters = 45) {
// 		console.log('Galloping...')
// 		super.move(distanceInMeters)
// 	}
// }
// let sam = new Snake('sammy the Python');
// let tom: Animal = new Horse('Tommy the Palomino');
// sam.move()

// class Animal {
// 	public name: string;
// 	public constructor(theName: string) {
// 		this.name = theName;
// 	}
// 	public move(distanceInMeters: number) {
// 		console.log(`${this.name} moved ${distanceInMeters}m.`);
// 	}
// }

// class Animal {
// 	private name: string;
// 	constructor(theName: string) {
// 		this.name = theName;
// 	}
// }
// new Animal('cat');

// class Animal {
// 	private name: string;
// 	constructor(theName: string) {
// 		this.name = theName;
// 	}
// }
// class Rhine extends Animal {
// 	constructor() {
// 		super('Rhino');
// 	}
// }
// class Employee {
// 	private name: string;
// 	constructor(theName: string) {
// 		this.name = theName;
// 	}
// }

