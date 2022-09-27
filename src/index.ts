// string, boolean, number,...
let x: number = 10;

x = 20;
// x = "teste";  o ts mostra erro 
console.log(x);

// inferencia x annotation
let y = 12;
// y = "teste" dá erro por causa da inferencia

let z: number = 12;

// tipos básicos
let firstName: string = "candice";
let age: number = 34;

// String com S maiusculo é objeto com s minusculo é tipo

console.log(typeof firstName);

//object
const myNumbers: number[] = [1, 2, 3] //define um array numerico
console.log(myNumbers);
console.log(myNumbers.length);
//console.log(myNumbers.toUpperCase());
console.log(firstName.toUpperCase());

//tuplas => tuple

let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b"]];

//object literals => {prop:value}
const user: { name: string, age: number } = {
  name: "candice",
  age: 18,
};

console.log(user);

console.log(user.name);

// user.job = "programadora"

//any
let a: any = 0

a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10"

id = 200
//id = true //erro

// type alias
type myIdType = number | string
const userId: myIdType = 10;

// enum
// tamanho de roupas (size: medio, size: pequeno)
enum size {
  P = "pequeno",
  M = "medo",
  G = "grande"
}

const camisa = {
  name: "camisa de gola",
  size: size.G,
}

console.log(camisa);

// literal types
let teste: "autenticado" | null
//let teste = "outrovalor"
teste = "autenticado";
teste = null;

// funcoes

function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(12, 12));

function sayHelloTo(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHelloTo("Candice"));

function logger(msg: string): void {
  console.log(msg);
}
logger("Teste!");

function greeting(name: string, greet?: string) {
  if (greet) {
    console.log(`Olá ${greet} ${name}`);
  }
  console.log(`Ola, ${name}`);
}
greeting("José");
greeting("Pedro", "Sir");

// interfaces

interface MathFunctionParams {
  n1: number,
  n2: number
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2
}

console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumbers(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
  n1: 5,
  n2: 10,
}
console.log(multiplyNumbers(someNumbers));

//narrowing
// checagem tipos

function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O numero é ${info}`);
    return;
  }
  console.log("Não foi passado um numero");
}

doSomething(5);
doSomething(true);

//generics
function showArraysItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);

//classes

class User {
  name
  role
  isApproved

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;

    showUserName(){
      console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow: boolean) {
      if (canShow) {
        console.log(`O papel do usuário é: ${this.role} `);
      }
      console.log("Informação restrita");
    }
  }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();

zeca.showUserRole(false);

//interfaces em classes

interface IVehicle {
  brand: string;
  showBrand(): void
}

class Car implements IVehicle {
  brand
  wheels

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`A marca do carro é ${this.brand}`);
  }
}
const fusca = new Car("vW", 4);
fusca.showBrand();

// heranca

class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number): Car {
    super(brand, wheels);
    this.engine = engine;
  }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);

a4.showBrand();

// decorators
function BaseParamters() {
  return function <T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random()
      createdAt = new Date();
    };
  };
}

@BaseParamters()
class Person {
  name
  constructor(name: string) {
    this.name = name
  }
}

const sam = new Person("Sam")
console.log(sam);

