"use strict";
exports.__esModule = true;
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape'];
var book = ['business', 1500, false,];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
//enumは一般的に全部大文字にする
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
//typeScriptは初期値には厳しい
console.log(person);
var unionType = 10;
var unionTypes = [21, 'hello'];
var apple = 'apple';
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
function sayHello() {
    console.log('Hello');
    return;
}
console.log(sayHello());
var tmp;
var anotherAdd = add;
var doubleNumber = function (number) { return number * 2; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
// unknown型は自身に代入はできるが、他の値に代入されることはできない
var anyInput;
// any型は自身に代入もできるし、他の値に自身が代入されることもできる
var text;
unknownInput = 21;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// unknownは使う際にif文を使ってtypeof判定をすれば他の値にいれることができる
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
