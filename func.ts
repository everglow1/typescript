function add(x: number, y: number): number {
	return x + y;
}

let myAdd = function(x: number, y: number): number {
	return x + y;
}
// 剩余参数
function buildName(firstName: string, ...resetOfName: string[]) {
	return firstName + " " + resetOfName.join(" ");
}
let employeeName = buildName('dd', 'dd', 'll')

// this 和箭头函数
let deck = {
	suits: ['hearts', 'spades', 'clubs', 'diamonds'],
	cards: Array(52),
	createCardPciker: function() {
		// let _this = this
		return () => {
			let pickedCard = Math.floor(Math.random() * 3);
			let pickedSuit = Math.floor(pickedCard / 13);
			return {
				suit: this.suits[pickedSuit],
				card: pickedCard % 13
			}
		}
	}
}
let cardPicker = deck.createCardPciker();
let pickedCard = cardPicker();

alert('card:' + pickedCard.card + ' of ' + pickedCard.suit)

interface Card {
	suit: string;
	card: number;
}
interface Deck {
	suits: string[];
	cards: number[];
	createCardPicker(this: Deck): () => Card;
}

let deckk: Deck = {
	suits: ['heard', 'spads', 'clubs'],
	cards: Array(52),
	createCardPicker(this: Deck) {
		return () => {
			let pickedCard = Math.floor(Math.random() * 52);
			return {
				suit: this.suits[pickedCard],
				card: pickedCard % 10
			}
		}
	}
}

interface UIElement {
	addClickListener(onclick: (this: void, e: Event) => void): void;
}