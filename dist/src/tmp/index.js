"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
const fruits = ['Apple', 'Banana', 'Grape'];
const book = ['business', 1500, false,];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
console.log(person);
let unionType = 10;
let unionTypes = [21, 'hello'];
const apple = 'apple';
let clothSize = 'large';
const cloth = {
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
let tmp;
const anotherAdd = add;
const doubleNumber = number => number * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 21;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
