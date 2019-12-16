function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
// 剩余参数
function buildName(firstName) {
    var resetOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        resetOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + resetOfName.join(" ");
}
var employeeName = buildName('dd', 'dd', 'll');
// this 和箭头函数
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPciker: function () {
        var _this = this;
        // let _this = this
        return function () {
            var pickedCard = Math.floor(Math.random() * 3);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPciker();
var pickedCard = cardPicker();
alert('card:' + pickedCard.card + ' of ' + pickedCard.suit);
var deckk = {
    suits: ['heard', 'spads', 'clubs'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            return {
                suit: _this.suits[pickedCard],
                card: pickedCard % 10
            };
        };
    }
};
