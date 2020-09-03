function copy<T extends { name: string }, U extends keyof T>(
	value: T,
	key: T
): T {
	value[key];
	return value;
}
console.log(copy({ name: "Quill", age: 38 }, "foo"));
// 引数から型を渡している
// type K = keyof { name: string; age: number };
// keyof演算子は右隣のオブジェクトの型をユニオン型として使う
class LightDatabase<T extends string | number | boolean> {
	private data: T[] = [];
	add(item: T) {
		this.data.push(item);
	}
	remove(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}
	get() {
		return this.data;
	}
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add("Apple");
stringLightDatabase.add("Banana");
stringLightDatabase.add("Grape");
stringLightDatabase.remove("Banana");
console.log(stringLightDatabase.get());
type TmpDatabase<T> = {
	id: number;
	data: T[];
};
const TmpDatabase: TmpDatabase<number> = {
	id: 3,
	data: [32],
};

interface Todo {
	title: string;
	text: string;
}
type Todoable = Partial<Todo>;
type ReadTodo = Readonly<Todo>;

const fetchData: Promise<string> = new Promise((resolve) => {
	setTimeout(() => {
		resolve("hello");
	}, 3000);
});
fetchData.then((data) => {
	data.toUpperCase();
});
const vegetables: Array<string> = ["tomato", "broccoli", "asparagus"];

interface ResponseData<T = any> {
	data: T;
	status: number;
}
let tmp: ResponseData;
interface Vegetables {
	tomato: string;
	pumpkin: string;
}
let tmp3: keyof Vegetables;
type MappedTypes = {
	readonly [P in "tomato" | "pumpkin"]?: string;
};
type ConditionalTyeps = "tomato" extends string ? number : boolean;
// tomatoがstringに代入できればnumber falseならbool
type ConditionalTypesInfer = { tomato: "tomato" } extends { tomato: infer R }
	? R
	: boolean;
type DistributiveConditionalTypes = "tomato" | "pumpkin" extends "tomato"
	? number
    : boolean;
    // tomatoとpumpkinでどちらもtrueならnumber,falseならbooleanになる
