// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
	(num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
	return n1 + n2;
};
//interfaceで関数の型を書ける

interface Nameable {
	name: string;
	nickName?: string;
};
const namable:Nameable = {
    name:'Quill'
}

interface Human extends Nameable {
	// interfaceは何個でもextendsできる
	age: number;
	greeting(message: string): void;
}

class Developper implements Human {
	constructor(
		public name: string,
		public age: number,
		public experience: number
	) {}
	greeting(message: string = 'hello') {
        // 引数に?をつけられるがつけた場合はundefined型の可能性も出てコンパイルエラーが起きるためif(hoge) {hufa}を必ずつけなければいけない
        // if(message) {
        //     console.log("Hello");
        // }
        console.log(message)
	}
}
const tmpDevelopper = {
	name: "Quill",
	age: 38,
	experience: 3,
	greeting(message: string) {
		console.log(message);
	},
};
const user: Human = tmpDevelopper;
let developper = new Developper("Quill", 38, 3);
