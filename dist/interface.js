"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
;
const namable = {
    name: 'Quill'
};
class Developper {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message = 'hello') {
        console.log(message);
    }
}
const tmpDevelopper = {
    name: "Quill",
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    },
};
const user = tmpDevelopper;
let developper = new Developper("Quill", 38, 3);
