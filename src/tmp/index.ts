import { string } from "prop-types";

let hasValue: boolean = true
let count: number = 10;
let float: number = 3.14
let negative: number = -0.12
let single: string = 'hello'

const person = {
    name:{
        first:'Jack',
        last:'Smith'
    },
    age:21
}
const fruits = ['Apple','Banana','Grape']

const book:[string,number,boolean] = ['business',1500,false,]

enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI,
}
//enumは一般的に全部大文字にする

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

//typeScriptは初期値には厳しい
console.log(person)

let unionType: number | string = 10
let unionTypes: (number | string)[] = [21,'hello']
// []の前にカッコで包んでユニオンタイプを使える

type ClothSize = 'small' | 'medium' | 'large'
const apple = 'apple'

let clothSize:ClothSize = 'large'
const cloth: {
    color:string;
    size:ClothSize
} = {
    color:'white',
    size:'medium'
}

function add(num1:number,num2:number):number {
    return num1 + num2
}
add(1,2)

function sayHello(): void {
    console.log('Hello')
    return
}

console.log(sayHello())
let tmp: undefined

const anotherAdd:(n1:number,n2:number) => number = add

const doubleNumber: (num:number) => number = number => number * 2;

function doubleAndHandle(num:number,cb: (num:number) => number): void {
    const doubleNum = cb(num * 2)
    console.log(num * 2)
}
doubleAndHandle(21,doubleNum => {
    return doubleNum
})

let unknownInput: unknown
// unknown型は自身に代入はできるが、他の値に代入されることはできない
let anyInput:any
// any型は自身に代入もできるし、他の値に自身が代入されることもできる
let text:string
unknownInput = 21
if (typeof unknownInput === 'string') {
    text = unknownInput
}
// unknownは使う際にif文を使ってtypeof判定をすれば他の値にいれることができる


function error(message:string): never {
    throw new Error(message)
}
console.log(error('This is an error'))
// voidは一応undefinedは帰ってくるが本当に何も帰ってこないときにnever型を使う
