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
