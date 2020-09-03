type Engineer = {
	name: string;
	role: string;
};
type Blogger = {
	name: string;
	follower: number;
};
// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}
// &は全ての型が必要になる
const quill: EngineerBlogger = {
	name: "Quill",
	role: "front-end",
	follower: 1000,
};
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
	if (typeof x === "string") {
		return x.toUpperCase();
	}
	return "";
}
const upperHello = toUpperCase("hello") as string;
type NomadWorker = Engineer | Blogger;
function describeNomadWorkerProfile(nomadWorker: NomadWorker) {
	console.log(nomadWorker.name);
	if ("role" in nomadWorker) {
		console.log(nomadWorker.role);
	}
	if ("follower" in nomadWorker) {
		console.log(nomadWorker.follower);
	}
}
class Dog {
	kind: "dog" = "dog";
	speak() {
		console.log("bow-bow");
	}
}
class Bird {
	kind: "bird" = "bird";
	speak() {
		console.log("tweet-tweet");
	}
	fly() {
		console.log("flutter");
	}
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
	pet.speak();
	switch (pet.kind) {
		case "bird":
			pet.fly();
	}
	if (pet instanceof Bird) {
		pet.fly();
	}
}
havePet(new Bird());

const input = document.getElementById("input")! as HTMLInputElement;
//!を使うことでヌルではないと言い切ることができる
// const input = <HTMLInputElement>document.getElementById("input");
// =の後に書くこともできるけどJSXのなかでは紛らわしいのでasを積極的に使っていく
// HTMLElementはnullableである
input.value = "initial input value";
interface Designer {
	name: string;
	[index: string]: string;
	// interface内の型を全てstringにする必要がある
}
const designer: Designer = {
	name: "Quill",
	role: "afa",
};
interface DownloadedData {
	id: number;
	user?: {
		name?: {
			first: string;
			last: string;
		};
	};
}

const downloadedData: DownloadedData = {
	id: 1,
};
console.log(downloadedData.user?.name?.first);
const userData = downloadedData.user ?? "no-user";
//undefinedとnullだったときにno-userになる
type id = DownloadedData["id" | "user"];
enum Color {
	RED,
	BLUE,
}

class AdvancedPerson {
	name: string = "Peter";
	age: number = 35;
}
class AdvancedCar {
	name: string = "Prius";
	age: number = 5;
}
let target = new AdvancedPerson();
let source = new AdvancedCar();
target = source;
